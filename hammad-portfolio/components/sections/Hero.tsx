"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Link2, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/lib/useIsMobile";
import { profile } from "@/lib/data";

const EngineeringCore = dynamic(() => import("@/components/3d/EngineeringCore"), {
  ssr: false,
});

function RoleCycler() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="h-6 overflow-hidden font-mono text-xs tracking-[0.2em] text-amber-bright md:text-sm">
      <motion.div
        animate={{ y: -index * 24 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
      >
        {profile.roles.map((role) => (
          <div key={role} className="h-6">
            {role}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const mobile = useIsMobile();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      {/* background environment */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,138,0,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(247,244,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(247,244,238,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-coral/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 md:grid-cols-2 md:gap-8 md:px-8">
        {/* left: copy */}
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
          >
            THE CORE — HELLO, I&rsquo;M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            HAMMAD
            <br />
            <span className="text-gradient">AMEER</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5"
          >
            <RoleCycler />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-md text-base leading-relaxed text-text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              data-cursor="VIEW"
              className="group relative overflow-hidden rounded-full bg-amber-bright px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-widest text-void focus-ring"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work <ArrowUpRight size={14} />
              </span>
              <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-champagne transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <a
              href="/resume/Hammad_Ameer_CV.pdf"
              download
              data-cursor="OPEN"
              className="rounded-full border border-border-soft px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-widest text-text-primary transition-colors hover:border-amber-bright hover:text-amber-bright focus-ring"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { icon: Link2, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-cursor={label.toUpperCase()}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft text-text-muted transition-colors hover:border-amber-bright hover:text-amber-bright focus-ring"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* right: 3D portrait presentation */}
        <div className="order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-[4/5] w-[clamp(230px,60vw,420px)]"
          >
            {/* 3D scene layer, behind portrait */}
            <div className="absolute -inset-16 -z-10">
              <EngineeringCore mobile={mobile} />
            </div>

            {/* portrait frame */}
            <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-champagne/25 bg-elevated shadow-[0_0_0_1px_rgba(255,138,0,0.08),0_40px_80px_-20px_rgba(0,0,0,0.7)]">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-[28px] shadow-[inset_0_0_60px_rgba(255,138,0,0.12)]" />
              <Image
                src="/images/profile.png.png"
                alt="Portrait of Hammad Ameer"
                fill
                priority
                sizes="(max-width: 768px) 60vw, 420px"
                className="object-contain object-bottom scale-[1.05]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-void/70 to-transparent" />
            </div>

            {/* floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-5 rounded-2xl border border-border-soft bg-surface/90 px-4 py-3 backdrop-blur-xl"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-emerald">
                Available for
              </p>
              <p className="text-sm font-medium">Internships &amp; Freelance</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-muted md:flex"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}
