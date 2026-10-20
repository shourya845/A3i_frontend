export type ChatMessage = { id: string; role: 'user' | 'assistant'; content: string };
export type ChatIntent = 'learn' | 'pricing' | 'demo';
export type ChatEvent =
  | { type: 'session'; session_id: string; intent?: ChatIntent }
  | { type: 'delta'; text: string }
  | { type: 'done' }
  | { type: 'error'; message: string };
