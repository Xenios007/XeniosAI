import React, { useEffect, useMemo, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

async function api(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    credentials: 'include',
    headers: options.body ? { 'Content-Type': 'application/json', ...(options.headers || {}) } : options.headers,
    ...options
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || `Request failed (${response.status})`);
  return body;
}

const accessLabels = {
  direct: 'Direct API',
  'review-required': 'App review / business approval',
  'partner-required': 'Partner program required',
  'via-platform': 'Via support/aggregator platform'
};

export default function IntegrationsPage({ business }) {
  const [channels, setChannels] = useState([]);
  const [connections, setConnections] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  async function load() {
    const { channels } = await api('/api/integrations/catalog');
    setChannels(channels);
    if (!business) { setConnections([]); return; }
    const { integrations } = await api(`/api/businesses/${business.id}/integrations`);
    setConnections(integrations);
  }

  useEffect(() => { load().catch(err => setError(err.message)); }, [business?.id]);

  const visible = useMemo(() => {
    const query = search.trim().toLowerCase();
    return channels.filter(item => !query || `${item.name} ${item.group} ${item.description}`.toLowerCase().includes(query));
  }, [channels, search]);

  const grouped = useMemo(() => Object.entries(visible.reduce((acc, item) => {
    (acc[item.group] ||= []).push(item); return acc;
  }, {})), [visible]);

  async function remove(id) {
    if (!window.confirm('Disconnect this channel from the selected business?')) return;
    await api(`/api/integrations/${id}`, { method: 'DELETE' });
    await load();
  }

  async function test(id) {
    setError(''); setNotice('Testing connection…');
    try { const result = await api(`/api/integrations/${id}/test`, { method: 'POST' }); setNotice(result.detail || 'Connection test succeeded.'); }
    catch (err) { setNotice(''); setError(err.message); }
  }

  return <>
    <div className="page-title"><h1>Integrations</h1><p>{business ? `Connect ${business.name} to customer and staff messaging channels.` : 'Create or select a business first.'}</p></div>
    {error && <div className="error integration-message">{error}</div>}
    {notice && <div className="success-note integration-message">{notice}</div>}

    <div className="panel integration-flow">
      <strong>How channel replies work</strong>
      <span>Customer message</span><b>→</b><span>Channel adapter</span><b>→</b><span>{business?.name || 'Business'} knowledge + AI</span><b>→</b><span>Reply on same channel</span>
    </div>

    <div className="panel">
      <div className="integration-section-head"><div><h3>Connected to {business?.name || 'business'}</h3><p className="muted">Credentials are encrypted server-side and are never returned to the browser.</p></div></div>
      {!business ? <div className="empty">Select a business to manage its channels.</div> : connections.length === 0 ? <div className="empty">No channels connected yet. Choose one below.</div> : <div className="connection-list">
        {connections.map(connection => {
          const definition = channels.find(item => item.id === connection.channelId);
          return <div className="connection-row" key={connection.id}>
            <div><strong>{connection.name}</strong><small>{definition?.name || connection.channelId} · {connection.status} · Auto reply {connection.autoReply ? 'on' : 'off'}</small><code>{connection.webhookUrl}</code></div>
            <div className="connection-actions"><button onClick={() => navigator.clipboard?.writeText(connection.webhookUrl)}>Copy webhook</button><button onClick={() => test(connection.id)}>Test</button><button onClick={() => remove(connection.id)}>Disconnect</button></div>
          </div>;
        })}
      </div>}
    </div>

    <div className="integration-catalog-head"><div><h2>Channel catalog</h2><p className="muted">Direct channels use normal developer credentials. Other platforms require app review, commercial enrollment, or an official partner relationship.</p></div><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search Facebook, Airbnb, Telegram, RCS…" /></div>

    {grouped.map(([group, items]) => <section key={group} className="integration-group"><h3>{group}</h3><div className="integration-grid">
      {items.map(channel => <div className="integration-card" key={channel.id}>
        <div className="integration-card-top"><div><strong>{channel.name}</strong><p>{channel.description}</p></div><span className={`badge access-${channel.access}`}>{accessLabels[channel.access] || channel.access}</span></div>
        <div className="integration-card-meta"><span>{readiness(channel)}</span><span>Target: inbound + outbound</span></div>
        <button disabled={!business} className={channel.inboundImplemented || channel.outboundImplemented ? 'primary' : ''} onClick={() => setSelected(channel)}>{channel.access === 'partner-required' ? 'Prepare integration' : 'Connect'}</button>
      </div>)}
    </div></section>)}

    {selected && <ConnectionModal business={business} channel={selected} onClose={() => setSelected(null)} onSaved={async () => { setSelected(null); await load(); }} onError={setError} />}
  </>;
}

function ConnectionModal({ business, channel, onClose, onSaved, onError }) {
  const [name, setName] = useState(channel.name);
  const [settings, setSettings] = useState({});
  const [credentials, setCredentials] = useState({});
  const [autoReply, setAutoReply] = useState(Boolean(channel.inboundImplemented && channel.outboundImplemented));
  const [aiProvider, setAiProvider] = useState('mock');
  const [providers, setProviders] = useState([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => { api('/api/ai/providers').then(({ providers }) => setProviders(providers)).catch(() => {}); }, []);

  async function submit(event) {
    event.preventDefault(); setBusy(true); onError('');
    try {
      await api(`/api/businesses/${business.id}/integrations`, { method: 'POST', body: JSON.stringify({ channelId: channel.id, name, settings, credentials, autoReply, aiProvider }) });
      await onSaved();
    } catch (err) { onError(err.message); }
    finally { setBusy(false); }
  }

  return <div className="modal-backdrop" onMouseDown={event => event.target === event.currentTarget && onClose()}>
    <form className="integration-modal" onSubmit={submit}>
      <div className="modal-head"><div><h2>Connect {channel.name}</h2><span className={`badge access-${channel.access}`}>{accessLabels[channel.access]}</span></div><button type="button" onClick={onClose}>×</button></div>
      <p className="muted">{channel.description}</p>
      <div className="adapter-readiness">{readiness(channel)}</div>
      {channel.access === 'partner-required' && <div className="partner-note">This platform does not offer ordinary self-serve messaging credentials. Save this connection to track onboarding, then add approved partner credentials when XeniosAI receives access.</div>}
      <label>Connection name<input value={name} onChange={event => setName(event.target.value)} /></label>
      {channel.settingsFields.map(field => <label key={field}>{humanize(field)}<input value={settings[field] || ''} onChange={event => setSettings({ ...settings, [field]: event.target.value })} /></label>)}
      {channel.credentialFields.map(field => <label key={field}>{humanize(field)}<input type="password" autoComplete="new-password" value={credentials[field] || ''} onChange={event => setCredentials({ ...credentials, [field]: event.target.value })} placeholder={field === 'verifyToken' || field === 'webhookSecret' ? 'Create a private random token' : ''} /></label>)}
      <label>AI provider<select value={aiProvider} onChange={event => setAiProvider(event.target.value)}>{providers.map(provider => <option key={provider.id} value={provider.id}>{provider.name}{provider.connected ? ' · connected' : ''}</option>)}</select></label>
      <label className="toggle-line"><input type="checkbox" disabled={!channel.inboundImplemented || !channel.outboundImplemented} checked={autoReply} onChange={event => setAutoReply(event.target.checked)} /> Automatically answer inbound messages with XeniosAI</label>
      {(!channel.inboundImplemented || !channel.outboundImplemented) && <small className="muted">Auto-reply becomes available after both inbound and outbound adapter paths for this channel are implemented.</small>}
      <div className="modal-actions"><button type="button" onClick={onClose}>Cancel</button><button className="primary" disabled={busy}>{busy ? 'Saving…' : 'Save integration'}</button></div>
    </form>
  </div>;
}

function readiness(channel) {
  if (channel.inboundImplemented && channel.outboundImplemented) return 'Inbound + outbound adapter live';
  if (channel.inboundImplemented) return 'Inbound live · outbound planned';
  if (channel.outboundImplemented) return 'Outbound live · inbound planned';
  return 'Adapter planned / approval tracking';
}
function humanize(value) { return value.replace(/([A-Z])/g, ' $1').replace(/^./, character => character.toUpperCase()); }
