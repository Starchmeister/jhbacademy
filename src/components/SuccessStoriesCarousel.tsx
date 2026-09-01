"use client";

import { useEffect, useRef, useState } from "react";
import { successStories } from "@/data/successStories";

const BASE_WIDTH = 22;
const HOVER_WIDTH = 32;
const ACTIVE_WIDTH = 42;

const BASE_HEIGHT = 110;
const ACTIVE_HEIGHT = 380;

export default function SuccessStoriesCarousel() {
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = window.setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeItem]);

  function widthFor(index: number) {
    if (activeItem === index) return ACTIVE_WIDTH;
    if (hoveredItem === index) return HOVER_WIDTH;
    return BASE_WIDTH;
  }

  function heightFor(index: number) {
    return activeItem === index ? ACTIVE_HEIGHT : BASE_HEIGHT;
  }

  return (
    <ul
      ref={wrapperRef}
      onMouseLeave={() => setHoveredItem(null)}
      className="flex flex-col gap-3 md:h-[480px] md:flex-row md:gap-[1.5%]"
    >
      {successStories.map((person, index) => {
        const active = activeItem === index;
        return (
          <li
            key={person.name}
            role="button"
            tabIndex={0}
            aria-current={active}
            aria-label={`${person.name}, ${person.role}`}
            onClick={() => setActiveItem(index)}
            onMouseEnter={() => setHoveredItem(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveItem(index);
              }
            }}
            style={{
              ["--panel-w" as string]: `${widthFor(index)}%`,
              ["--panel-h" as string]: `${heightFor(index)}px`,
            }}
            className="relative cursor-pointer border border-[var(--line)] rounded-xl overflow-hidden w-full h-[var(--panel-h)] md:w-[var(--panel-w)] md:h-full [transition:height_var(--transition,280ms_ease),width_var(--transition,280ms_ease)]"
          >
            <img
              src={person.img}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-500"
              style={{
                filter: active
                  ? "grayscale(0.1) saturate(1.05)"
                  : "grayscale(1) brightness(0.85)",
              }}
            />

            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-500"
              style={{
                background: active
                  ? "linear-gradient(180deg, rgba(161,15,54,0) 30%, rgba(161,15,54,0.55) 70%, rgba(80,5,20,0.92) 100%)"
                  : "linear-gradient(180deg, rgba(8,9,12,0) 55%, rgba(8,9,12,0.8) 100%)",
              }}
            />

            <div className="absolute left-6 right-6 bottom-6 md:left-7 md:right-7 md:bottom-7">
              <p
                className="mono-label text-[11px] text-[rgba(245,244,241,0.82)] overflow-hidden transition-[max-height,opacity] duration-300"
                style={{
                  opacity: active ? 1 : 0,
                  maxHeight: active ? "20px" : "0px",
                }}
              >
                {person.role}
              </p>
              <p
                className="font-[family-name:var(--font-sora)] text-[#f5f4f1] leading-tight transition-[font-size] duration-300"
                style={{ fontSize: active ? "clamp(22px, 2.4vw, 30px)" : "14px" }}
              >
                {person.name}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
