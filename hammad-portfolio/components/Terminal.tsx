"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare, X } from "lucide-react";

const RESPONSES: Record<string, string[]> = {
  help: ["Available commands: whoami, about, skills, projects, education, contact, clear"],
  whoami: ["Hammad Ameer", "Software Engineer in Progress", "AI Enthusiast", "Problem Solver"],
  about: [
    "BS Software Engineering @ University of Central Punjab, Lahore.",
    "4th semester completed. Focused on AI, full-stack dev, and DSA.",
  ],
  skills: ["Java, Python, JavaScript, SQL", "OOP, DSA, DBMS", "AI Foundations", "Git, IntelliJ, VS Code"],
  projects: [
    "01 Student Performance Management System",
    "02 Art Gallery Management System",
    "03 Intelligent Chat Bot",
    "04 Secure Auth & Login Page",
    "05 Health Share Bridge System",
    "06 Personal Portfolio Website",
  ],
  education: ["BS Software Engineering — UCP, Lahore (2024 – 2028 expected)"],
  contact: ["gkhokhar826@gmail.com", "linkedin.com/in/hammad-ameer-60070b375"],
};

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<string[]>(["Type 'help' to see available commands."]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "`" ) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;
    if (trimmed === "clear") {
      setLines([]);
      return;
    }
    const output = RESPONSES[trimmed] ?? [`command not found: ${trimmed}`];
    setLines((prev) => [...prev, `> ${trimmed}`, ...output]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open developer terminal"
        data-cursor="TERMINAL"
        className="fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-border-soft bg-surface/80 text-text-muted backdrop-blur-xl transition-colors hover:border-amber-bright hover:text-amber-bright md:flex focus-ring"
      >
        <TerminalSquare size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            className="fixed bottom-6 right-6 z-[110] w-[min(420px,calc(100vw-3rem))] overflow-hidden rounded-2xl border border-border-soft bg-void/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-border-soft px-4 py-3">
              <span className="font-mono text-[11px] text-text-muted">hammad@portfolio ~ %</span>
              <button onClick={() => setOpen(false)} aria-label="Close terminal" className="text-text-muted hover:text-amber-bright">
                <X size={14} />
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto px-4 py-3 font-mono text-xs leading-relaxed text-text-muted">
              {lines.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                runCommand(input);
                setInput("");
              }}
              className="flex items-center gap-2 border-t border-border-soft px-4 py-3"
            >
              <span className="font-mono text-xs text-amber-bright">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-transparent font-mono text-xs text-text-primary outline-none"
                placeholder="type a command..."
                aria-label="Terminal command input"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
