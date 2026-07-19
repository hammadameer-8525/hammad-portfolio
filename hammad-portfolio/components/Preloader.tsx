"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  // This component is only ever mounted client-side (imported with
  // ssr:false in app/page.tsx), so it's safe to read sessionStorage in a
  // lazy useState initializer -- it runs once, before first paint, and
  // never touches a ref during render.
  const [alreadyVisited] = useState(() => sessionStorage.getItem("visited") === "1");

  useEffect(() => {
    if (alreadyVisited) return;
    sessionStorage.setItem("visited", "1");

    const id = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 22 + 8, 100);
        if (next >= 100) {
          clearInterval(id);
          setTimeout(() => setDone(true), 350);
        }
        return next;
      });
    }, 140);
    return () => clearInterval(id);
  }, [alreadyVisited]);

  if (alreadyVisited) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
        >
          <p className="font-display text-2xl font-bold tracking-tight">
            HAMMAD<span className="text-amber-bright">.</span>
          </p>
          <p className="mt-4 font-mono text-3xl tabular-nums text-text-muted">
            {String(Math.floor(progress)).padStart(2, "0")}
          </p>
          <div className="mt-6 h-px w-40 overflow-hidden bg-border-soft">
            <motion.div
              className="h-full bg-gradient-to-r from-champagne to-amber-bright"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
