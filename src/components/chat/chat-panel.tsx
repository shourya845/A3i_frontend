"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { streamReply } from "@/lib/chat-api";
import type { ChatMessage as Message } from "@/types/chat";
import ChatMessage from "./chat-message";
import ActivityAnimation from "@/components/ui/activity-animation";

const greeting: Message = {
  id: "greeting",
  role: "assistant",
  content: "Hi! I'm A3i Assistant. What would you like to know about A3i?",
};
const sessionKey = "a31-session";

export default function ChatPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [failed, setFailed] = useState<{
    question: string;
    replyId: string;
  } | null>(null);
  const sessionId = useRef<string | null>(null);
  const controller = useRef<AbortController | null>(null);
  const sending = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  function updateSession(value: string) {
    sessionId.current = value || null;
    try {
      if (value) sessionStorage.setItem(sessionKey, value);
      else sessionStorage.removeItem(sessionKey);
    } catch {
      /* Chat still works when browser storage is unavailable. */
    }
  }

  useEffect(() => {
    try {
      sessionId.current = sessionStorage.getItem(sessionKey);
    } catch {}
    return () => controller.current?.abort();
  }, []);
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);
  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, busy]);

  async function send(
    question: string,
    replyId = crypto.randomUUID(),
    retry = false,
  ) {
    if (sending.current || !question.trim()) return;
    sending.current = true;
    setBusy(true);
    setError("");
    setFailed(null);
    if (retry) {
      setMessages((previous) =>
        previous.map((m) => (m.id === replyId ? { ...m, content: "" } : m)),
      );
    } else {
      setMessages((previous) => [
        ...previous,
        { id: crypto.randomUUID(), role: "user", content: question },
        { id: replyId, role: "assistant", content: "" },
      ]);
    }
    controller.current = new AbortController();
    try {
      await streamReply(
        question,
        sessionId.current,
        (event) => {
          if (event.type === "session") updateSession(event.session_id);
          if (event.type === "delta") {
            setMessages((previous) =>
              previous.map((m) =>
                m.id === replyId
                  ? { ...m, content: m.content + event.text }
                  : m,
              ),
            );
          }
        },
        controller.current.signal,
        window.location.pathname,
      );
    } catch (failure) {
      if (!(failure instanceof DOMException && failure.name === "AbortError")) {
        setError(
          failure instanceof Error
            ? failure.message
            : "Could not get an answer. Please retry.",
        );
        setFailed({ question, replyId });
      }
    } finally {
      sending.current = false;
      setBusy(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();
    if (!question || busy) return;
    setInput("");
    void send(question);
  }

  return (
    <section
      id="a31-panel"
      className="a31-panel"
      role="dialog"
      aria-label="Chat with A3i Assistant"
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
      }}
    >
      <header className="a31-header">
        <div>
          <strong>A3i Assistant</strong>
          <small>Your A3i website guide</small>
        </div>
        <button type="button" aria-label="Close chat" onClick={onClose}>
          ×
        </button>
      </header>
      <div
        className="a31-messages"
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {messages
          .filter((m) => m.content)
          .map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        {busy ? (
          <p className="a31-thinking" role="status">
            <ActivityAnimation />
            {messages[messages.length - 1]?.content ? "Writing…" : "Thinking…"}
          </p>
        ) : null}
      </div>
      {error ? (
        <div className="a31-error" role="alert">
          <span>
            {error}
            {failed &&
            messages.some((m) => m.id === failed.replyId && m.content)
              ? " The partial answer above is incomplete."
              : ""}
          </span>
          {failed ? (
            <button
              type="button"
              disabled={busy}
              onClick={() => void send(failed.question, failed.replyId, true)}
            >
              Retry
            </button>
          ) : null}
        </div>
      ) : null}
      <div className="a31-actions">
        <Link className="a31-meeting" href="/demo" onClick={onClose}>
          Book a Meeting <span aria-hidden="true">↗</span>
        </Link>
        <button
          type="button"
          disabled={busy}
          onClick={() => {
            updateSession("");
            setMessages([greeting]);
            setError("");
            setFailed(null);
            inputRef.current?.focus();
          }}
        >
          New chat
        </button>
      </div>
      <form className="a31-compose" onSubmit={submit}>
        <label className="sr-only" htmlFor="a31-question">
          Your question about A3i
        </label>
        <input
          id="a31-question"
          ref={inputRef}
          value={input}
          maxLength={4000}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about A3i…"
          autoComplete="off"
        />
        <button type="submit" disabled={busy || !input.trim()}>
          Send
        </button>
      </form>
    </section>
  );
}
