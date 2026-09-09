export function buildKnowledgeContext(entries, query, limit = 8) {
  const terms = tokenize(query);
  const ranked = entries.map(entry => ({ entry, score: score(entry, terms) })).sort((a,b) => b.score - a.score);
  const selected = ranked.filter(x => x.score > 0).slice(0, limit).map(x => x.entry);
  const fallback = selected.length ? selected : entries.slice(0, Math.min(limit, entries.length));
  return { entries: fallback, text: fallback.map(item => `[${item.category}] ${item.title}\n${item.content}`).join('\n\n') };
}
function tokenize(value) { return [...new Set(String(value).toLowerCase().split(/[^a-z0-9₱]+/).filter(x => x.length > 2))]; }
function score(entry, terms) { const haystack = `${entry.title} ${entry.category} ${entry.content}`.toLowerCase(); return terms.reduce((sum, term) => sum + (haystack.includes(term) ? 1 : 0), 0); }
