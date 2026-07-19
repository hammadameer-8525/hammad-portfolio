"use client";

import { ArrowUp, Link2, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-border-soft px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg font-semibold">
            HAMMAD AMEER<span className="text-amber-bright">.</span>
          </p>
          <p className="mt-1 text-xs text-text-muted">
            Software Engineer in Progress. Building. Learning. Evolving.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            data-cursor="OPEN"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-text-muted transition-colors hover:border-amber-bright hover:text-amber-bright focus-ring"
          >
            <Link2 size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            data-cursor="EMAIL"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-text-muted transition-colors hover:border-amber-bright hover:text-amber-bright focus-ring"
          >
            <Mail size={15} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            data-cursor="TOP"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-bright/40 text-amber-bright transition-colors hover:bg-amber-bright hover:text-void focus-ring"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl font-mono text-[10px] text-text-muted/60">
        &copy; {new Date().getFullYear()} Hammad Ameer. All rights reserved.
      </p>
    </footer>
  );
}
