'use client';
export default function ErrorPage({ reset }: { reset: () => void }) { return <main className="fallback"><h1>This page could not load</h1><button onClick={reset}>Try again</button></main>; }
