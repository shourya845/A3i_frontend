// Keep the Python backend address on the server, never API keys in the browser.
export async function forwardToAgent(request: Request, path: '/chat/stream' | '/leads') {
  try {
    const body = await request.text();
    if (body.length > 20000) return Response.json({ detail: 'Request is too large.' }, { status: 413 });
    const base = (process.env.A3I_API_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');
    const response = await fetch(base + path, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body,
      cache: 'no-store',
      signal: AbortSignal.any([request.signal, AbortSignal.timeout(600000)]),
    });
    return new Response(response.body, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/json',
        'Cache-Control': 'no-store', 'X-Accel-Buffering': 'no',
      },
    });
  } catch {
    return Response.json({ detail: 'The assistant is unavailable. Please try again shortly.' }, { status: 503 });
  }
}
