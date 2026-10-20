"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { X } from "lucide-react";
import { useRef, useState } from "react";
const ChatPanel = dynamic(() => import("./chat-panel"));

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);
  function close() {
    setOpen(false);
    launcher.current?.focus();
  }
  return (
    <div className="a31-widget">
      {opened ? (
        <div hidden={!open}>
          <ChatPanel open={open} onClose={close} />
        </div>
      ) : null}
      <button
        ref={launcher}
        className={`a31-launcher${open ? " is-open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close A3i assistant" : "Open A3i assistant"}
        title={open ? "Close assistant" : "Ask A3i"}
        aria-haspopup="dialog"
        aria-controls={opened ? "a31-panel" : undefined}
        onClick={() => {
          setOpened(true);
          setOpen((previous) => !previous);
        }}
      >
        {open ? (
          <X size={25} aria-hidden="true" />
        ) : (
          <Image src="/logo.png" width={36} height={36} alt="" />
        )}
      </button>
    </div>
  );
}
