"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
          <a
            href="#home"
            data-cursor="HOME"
            className="font-display text-sm font-semibold tracking-tight focus-ring"
          >
            HAMMAD<span className="text-amber-bright">.</span>
          </a>

          <nav
            className={`hidden md:flex items-center gap-1 rounded-full border border-border-soft px-2 py-2 backdrop-blur-xl transition-colors ${
              scrolled ? "bg-surface/80" : "bg-surface/40"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="VIEW"
                className={`relative rounded-full px-4 py-2 font-mono text-[11px] tracking-wider uppercase transition-colors focus-ring ${
                  active === link.href.slice(1)
                    ? "text-void"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-champagne to-amber-bright"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            data-cursor="MENU"
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-surface/60 backdrop-blur-xl md:hidden focus-ring"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex flex-col bg-void/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-6">
              <span className="font-display text-sm font-semibold">HAMMAD.</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft focus-ring"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-baseline gap-4 py-3 focus-ring"
                >
                  <span className="font-mono text-xs text-amber-bright">
                    0{i + 1}
                  </span>
                  <span className="font-display text-3xl font-semibold text-text-primary group-hover:text-gradient">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
