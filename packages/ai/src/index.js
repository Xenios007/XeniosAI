const PROVIDERS = [
  ['mock','XeniosAI Local Test','built-in'],['openai','OpenAI','native/API'],['anthropic','Anthropic Claude','native/API'],['google','Google Gemini','native/API'],['xai','xAI Grok','native/API'],['openrouter','OpenRouter','OpenAI-compatible'],['meta','Meta Llama','via compatible host'],['deepseek','DeepSeek','OpenAI-compatible'],['mistral','Mistral','API'],['qwen','Qwen / Alibaba','API'],['cohere','Cohere','API'],['perplexity','Perplexity','API'],['groq','Groq','OpenAI-compatible'],['together','Together AI','OpenAI-compatible'],['fireworks','Fireworks AI','OpenAI-compatible'],['nvidia','NVIDIA','API'],['cerebras','Cerebras','API'],['huggingface','Hugging Face','API'],['azure-openai','Azure OpenAI','API'],['bedrock','AWS Bedrock','cloud'],['vertex','Google Vertex AI','cloud'],['ollama','Ollama','local'],['lmstudio','LM Studio','local/OpenAI-compatible'],['custom','Custom OpenAI-Compatible API','custom']
];

export function providerCatalog(env = process.env) {
  return PROVIDERS.map(([id,name,type]) => ({ id, name, type, connected: id === 'mock' || (id === 'openai' && Boolean(env.OPENAI_API_KEY && env.OPENAI_MODEL)) || (id === 'openrouter' && Boolean(env.OPENROUTER_API_KEY && env.OPENROUTER_MODEL)) }));
}

export class AIService {
  constructor(env = process.env) { this.env = env; }
  async chat({ provider, message, knowledgeContext }) {
    if (provider === 'mock') return mockResponse(message, knowledgeContext);
    if (provider === 'openai') return openAiCompatible({ baseUrl: 'https://api.openai.com/v1', apiKey: this.env.OPENAI_API_KEY, model: this.env.OPENAI_MODEL, provider, message, knowledgeContext });
    if (provider === 'openrouter') return openAiCompatible({ baseUrl: 'https://openrouter.ai/api/v1', apiKey: this.env.OPENROUTER_API_KEY, model: this.env.OPENROUTER_MODEL, provider, message, knowledgeContext });
    throw new Error(`${provider} is present in the provider registry but its live adapter is not implemented in this first product slice yet.`);
  }
}

async function openAiCompatible({ baseUrl, apiKey, model, provider, message, knowledgeContext }) {
  if (!apiKey || !model) throw new Error(`${provider} is not configured on the server.`);
  const response = await fetch(`${baseUrl}/chat/completions`, { method: 'POST', headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ model, messages: [{ role: 'system', content: `You are XeniosAI in Customer Simulation mode. Answer only from the supplied business knowledge when the question depends on business facts. If the answer is not in the knowledge, say that the business owner needs to confirm it.\n\nBUSINESS KNOWLEDGE:\n${knowledgeContext || '(none)'}` }, { role: 'user', content: message }] }) });
  const body = await response.json(); if (!response.ok) throw new Error(body.error?.message || `${provider} request failed.`);
  return { text: body.choices?.[0]?.message?.content || '', provider, model, inputTokens: body.usage?.prompt_tokens ?? null, outputTokens: body.usage?.completion_tokens ?? null };
}

function mockResponse(message, knowledgeContext) {
  if (!knowledgeContext) return { text: `I don't have business knowledge for that yet. Add the relevant rates, policies, FAQs, or business information in Business Knowledge first.`, provider: 'mock', model: 'grounded-test' };
  return { text: `Based on the business information currently stored:\n\n${knowledgeContext}\n\nCustomer question: ${message}\n\nThis is the local grounded test provider. Connect OpenAI or OpenRouter to generate a natural customer-ready answer from the same context.`, provider: 'mock', model: 'grounded-test' };
}
