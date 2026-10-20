"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { destinations } from "@/content/destinations";
import { useEffect, useRef, useState } from "react";
import MobileNav from "./mobile-nav";
import ButtonArrow from "@/components/ui/button-arrow";
import { Icon, NavContent, type MenuName } from "./nav-content";
import styles from "./header.module.css";

export default function Header({
  productRequest = 0,
}: {
  productRequest?: number;
}) {
  const router = useRouter();
  const [open, setOpen] = useState<MenuName | null>(null);
  const [mobile, setMobile] = useState(false);
  const [notice, setNotice] = useState("");
  const header = useRef<HTMLElement>(null);
  const triggers = useRef<Partial<Record<MenuName, HTMLButtonElement | null>>>(
    {},
  );
  const mobileTrigger = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }
  useEffect(() => {
    if (!mobile) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobile]);
  useEffect(() => {
    if (productRequest === 0) return;
    cancelClose();
    header.current?.scrollIntoView({ block: "start", behavior: "instant" });
    const desktop = window.matchMedia("(min-width: 1100px)").matches;
    if (desktop) {
      setOpen("Products");
      triggers.current.Products?.focus();
    } else {
      setMobile(true);
      mobileTrigger.current?.focus();
    }
  }, [productRequest]);
  function select(label: string) {
    cancelClose();
    if (mobile) mobileTrigger.current?.focus();
    else if (open) triggers.current[open]?.focus();
    setOpen(null);
    setMobile(false);
    router.push(
      destinations[label] || `/preview?feature=${encodeURIComponent(label)}`,
    );
  }
  useEffect(() => {
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) {
        setOpen(null);
        setMobile(false);
      }
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      cancelClose();
      if (mobile) mobileTrigger.current?.focus();
      else if (open) triggers.current[open]?.focus();
      setOpen(null);
      setMobile(false);
      setNotice("");
    }
    const media = window.matchMedia("(min-width: 1100px)");
    function resize() {
      setOpen(null);
      setMobile(false);
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
      media.removeEventListener("change", resize);
      cancelClose();
    };
  }, [mobile, open]);
  function menuButton(menu: MenuName) {
    return (
      <button
        ref={(node) => {
          triggers.current[menu] = node;
        }}
        className={`nav-link ${open === menu ? "is-open" : ""}`}
        aria-expanded={open === menu}
        aria-controls={`desktop-${menu}`}
        onClick={(event) => {
          cancelClose();
          setOpen(event.detail === 0 && open === menu ? null : menu);
        }}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") {
            cancelClose();
            setOpen(menu);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(menu);
            requestAnimationFrame(() =>
              header.current
                ?.querySelector<HTMLButtonElement>(`#desktop-${menu} button`)
                ?.focus(),
            );
          }
        }}
      >
        {menu}
        <svg
          className="chevron"
          width="14"
          height="14"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path
            d="m3 6 5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </button>
    );
  }
  return (
    <>
      <header
        ref={header}
        className={`site-header ${styles.header}`}
        onPointerEnter={cancelClose}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse")
            closeTimer.current = setTimeout(() => {
              if (!header.current?.contains(document.activeElement))
                setOpen(null);
            }, 180);
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setOpen(null);
            setMobile(false);
          }
        }}
      >
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="/" aria-label="A3i-Accel home">
            <span className="brand-symbol">
              <Image src="/logo.png" alt="" width={42} height={42} priority />
            </span>
            <span>
              A3i<span className="brand-suffix">-Accel</span>
            </span>
          </a>
          <div className="desktop-links">
            {menuButton("Products")}
            {menuButton("Industry")}
            <button
              className="nav-link"
              onPointerEnter={() => setOpen(null)}
              onClick={() => select("Services")}
            >
              Services
            </button>
            {menuButton("Company")}
          </div>
          <div className="desktop-actions">
            <button
              className="responsible"
              onPointerEnter={() => setOpen(null)}
              onClick={() => select("Responsible AI")}
            >
              <Icon name="scales" />
              Responsible AI
            </button>
            <button className="login" onClick={() => select("Login")}>
              Login
            </button>
            <button
              className="start-button"
              onClick={() => select("Get Started")}
            >
              Get Started
              <ButtonArrow />
            </button>
          </div>
          <button
            ref={mobileTrigger}
            className="menu-toggle"
            aria-label={mobile ? "Close navigation" : "Open navigation"}
            aria-expanded={mobile}
            aria-controls="mobile-navigation"
            onClick={() => {
              setMobile(!mobile);
              setOpen(null);
            }}
          >
            <span className={mobile ? "hamburger active" : "hamburger"}>
              <i />
              <i />
              <i />
            </span>
          </button>
        </nav>
        <div className="desktop-panels">
          {(["Products", "Industry", "Company"] as MenuName[]).map((menu) => (
            <div
              className={`dropdown-panel panel-${menu.toLowerCase()}`}
              id={`desktop-${menu}`}
              hidden={open !== menu}
              key={menu}
            >
              <NavContent menu={menu} select={select} />
            </div>
          ))}
        </div>
        {mobile ? (
          <MobileNav
            select={select}
            initialExpanded={productRequest > 0 ? "Products" : null}
          />
        ) : null}
      </header>
      <div className="navigation-notice" role="status">
        {notice ? (
          <>
            <span>{notice}</span>
            <button
              aria-label="Dismiss notification"
              onClick={() => setNotice("")}
            >
              ×
            </button>
          </>
        ) : null}
      </div>
    </>
  );
}
