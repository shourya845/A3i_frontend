'use client';

import { useRef, useState, type FormEvent } from 'react';

export default function DemoForm() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const submission = useRef<{ key: string; id: string } | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const fields = new FormData(event.currentTarget);
    const details = {
      name: String(fields.get('name') || '').trim(),
      company: String(fields.get('company') || '').trim(),
      need: String(fields.get('need') || '').trim(), confirmed: fields.get('confirmed') === 'on',
    };
    const key = JSON.stringify(details);
    if (submission.current?.key !== key) submission.current = { key, id: crypto.randomUUID() };
    setBusy(true); setError('');
    try {
      const response = await fetch('/api/leads', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...details, request_id: submission.current.id }),
      });
      const result = await response.json();
      if (!response.ok || result.status !== 'saved') {
        throw new Error(typeof result.detail === 'string' ? result.detail : 'Could not save your request. Please retry.');
      }
      setSaved(true);
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : 'Could not save your request. Please retry.');
    } finally { setBusy(false); }
  }

  if (saved) return <div className="a31-demo-success" role="status">
    <h2>Your request is saved.</h2>
    <p>This is a demo request, not a confirmed appointment.</p>
  </div>;

  return <form className="a31-demo-form" onSubmit={submit}>
    <fieldset disabled={busy}>
      <label>Your name<input name="name" required maxLength={100} autoComplete="name" /></label>
      <label>Company<input name="company" required maxLength={200} autoComplete="organization" /></label>
      <label>What would you like help with?<textarea name="need" required maxLength={2000} rows={4} /></label>
      <label className="a31-confirm"><input name="confirmed" type="checkbox" required />
        <span>I confirm these details can be saved for my demo request.</span></label>
      {error ? <p role="alert">{error}</p> : null}
      <button type="submit">{busy ? 'Saving…' : error ? 'Retry request' : 'Send demo request'}</button>
    </fieldset>
  </form>;
}
