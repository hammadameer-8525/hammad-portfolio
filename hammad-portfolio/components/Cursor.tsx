"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const isTouch = matchMedia("(pointer: coarse)").matches;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    let ringX = 0,
      ringY = 0;
    const handleMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      ringX = e.clientX;
      ringY = e.clientY;
    };

    let raf: number;
    let curX = 0,
      curY = 0;
    const animate = () => {
      curX += (ringX - curX) * 0.18;
      curY += (ringY - curY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const handleOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("[data-cursor]");
      setLabel(el ? el.getAttribute("data-cursor") || "" : "");
      ringRef.current?.classList.toggle("border-amber-bright", !!el);
      ringRef.current?.classList.toggle("bg-amber/10", !!el);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Visibility is controlled purely by CSS (custom-cursor class, defined in
  // globals.css) so touch devices and prefers-reduced-motion never need a
  // render-triggering state flag here.
  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-amber-bright"
      />
      <div
        ref={ringRef}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[100] flex h-10 w-10 items-center justify-center rounded-full border border-amber/60 transition-colors duration-200 ease-out"
      >
        {label && (
          <span className="font-mono text-[9px] tracking-widest text-champagne">{label}</span>
        )}
      </div>
    </>
  );
}
