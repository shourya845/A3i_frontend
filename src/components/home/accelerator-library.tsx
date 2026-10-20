"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers } from "lucide-react";
import examples from "@/content/imported/workflows.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import "swiper/css";
export default function AcceleratorLibrary() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(0);
  const carousel = useRef<SwiperInstance | null>(null);
  const reduced = useReducedMotion();
  const items = examples.filter(
    (item) => filter === "All" || item.type === filter,
  );
  function move(direction: number) {
    const slider = carousel.current;
    if (!slider || slider.destroyed) return;
    slider.slideTo(
      (slider.activeIndex + direction + items.length) % items.length,
    );
  }
  return (
    <section className="library-section content-section" id="accelerators">
      <div className="content-container library-layout">
        <div className="library-intro">
          <p className="section-label">Explore nine workflow examples</p>
          <h2>Find another task to hand over.</h2>
          <p>
            Browse the examples by Apps, Ants, or Agents to find work relevant
            to your team. Choose a workflow to discuss in a demo.
          </p>
          <div className="library-filters" aria-label="Filter accelerators">
            {["All", "App", "Ant", "Agent"].map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={filter === item}
                onClick={() => {
                  setFilter(item);
                  setIndex(0);
                }}
              >
                {item === "All" ? "All" : item + "s"}
              </button>
            ))}
          </div>
          <div className="library-controls">
            <button
              type="button"
              aria-label="Previous accelerator"
              data-tooltip="Previous workflow"
              onClick={() => move(-1)}
            >
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <span aria-live="polite">
              {index + 1} / {items.length}
            </span>
            <button
              type="button"
              aria-label="Next accelerator"
              data-tooltip="Next workflow"
              onClick={() => move(1)}
            >
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div
          className="library-slider"
          role="region"
          aria-label="Accelerator carousel"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowRight" ? 1 : -1);
            }
          }}
        >
          <Swiper
            key={filter}
            modules={[A11y]}
            a11y={{
              containerRoleDescriptionMessage: "carousel",
              slideRole: "group",
              slideLabelMessage: "{{index}} of {{slidesLength}}",
            }}
            speed={reduced ? 0 : 450}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={(slider) => {
              carousel.current = slider;
            }}
            onSlideChange={(slider) => setIndex(slider.activeIndex)}
          >
            {items.map((item, slide) => (
              <SwiperSlide key={item.id}>
                <article className="library-card" inert={slide !== index}>
                  <span className="library-type">
                    <Layers size={20} aria-hidden="true" />
                    {item.type}
                  </span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <ul>
                    {item.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                  <Link className="text-action" href="/demo">
                    Discuss this workflow
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
