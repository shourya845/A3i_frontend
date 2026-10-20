"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productStories } from "@/content/product-stories";
import ProductPreview, { productIcons } from "./product-preview";

// React Bits SpotlightCard pattern, reduced to this preview's decorative light.
function moveSpotlight(event: PointerEvent<HTMLDivElement>) {
  if (event.pointerType !== "mouse" || !window.matchMedia(
    "(min-width: 761px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  ).matches) return;
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - box.top}px`);
}

export default function ProductGrid() {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");
    let frame = 0;
    // Activate the description nearest the centre of the visible area.
    // This also works when scrolling backwards or jumping down the page.
    const update = () => {
      frame = 0;
      if (!desktop.matches || !listRef.current) return;
      const stories = Array.from(listRef.current.children);
      const centre = 80 + (window.innerHeight - 80) / 2;
      let nearest = 0;
      let distance = Infinity;
      stories.forEach((story, index) => {
        const rect = story.getBoundingClientRect();
        const delta = Math.abs(rect.top + rect.height / 2 - centre);
        if (delta < distance) {
          distance = delta;
          nearest = index;
        }
      });
      setActive(nearest);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section
      className="product-stories content-section"
      id="products"
      aria-labelledby="portfolio-title"
    >
      <div className="content-container">
        <div className="content-heading product-showcase-heading">
          <p className="section-label">Our products</p>
          <h2 id="portfolio-title">Find the right AI for your team.</h2>
          <p>Six products. Different ways to get everyday work done.</p>
        </div>
        <nav className="product-jump-links" aria-label="Explore the six products">
          {productStories.map((product, index) => <a key={product.kind}
            href={`#product-${product.kind}`} aria-current={active === index ? 'location' : undefined}
            onClick={() => setActive(index)}>{product.name}</a>)}
        </nav>
        <div className="product-showcase">
          <div className="product-story-list" ref={listRef}>
            {productStories.map((product, index) => {
              const Icon = productIcons[product.kind];
              return (
                <article
                  className="product-story"
                  id={`product-${product.kind}`}
                  key={product.name}
                  aria-labelledby={`product-heading-${product.kind}`}
                  onFocusCapture={() => setActive(index)}
                >
                  <div className="product-story-copy">
                    <span className="product-story-name">
                      <Icon size={20} aria-hidden="true" />
                      {product.name}
                    </span>
                    <h3 id={`product-heading-${product.kind}`}>
                      {product.headline}
                    </h3>
                    <p>{product.description}</p>
                    <div className="product-story-actions">
                      {product.href && <Link href={product.href} className="text-action product-explore-action">
                        {product.href === '/contact' ? `Ask about ${product.name}` : `Explore ${product.name}`}
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </Link>}
                      <Link href="/demo" className="product-demo-action" aria-label={`Request a demo of ${product.name}`}>Request a demo</Link>
                    </div>
                  </div>
                  <div className="product-stage product-mobile-preview">
                    <ProductPreview product={product} />
                  </div>
                </article>
              );
            })}
          </div>
          <div
            className="product-stage product-sticky-preview"
            data-active-product={productStories[active].name}
            onPointerMove={moveSpotlight}
          >
            {productStories.map((product, index) => (
              <div
                className={`product-preview-layer${active === index ? " is-active" : ""}`}
                key={product.name}
                aria-hidden={active !== index}
              >
                <ProductPreview product={product} />
              </div>
            ))}
            <span className="product-spotlight" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
