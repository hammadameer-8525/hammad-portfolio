"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Link2, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // No backend service is connected yet. We open a pre-filled mail draft
    // instead of pretending a message was sent — wire up an API route or
    // form service (see README) to make this a true async submit.
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || `Portfolio message from ${form.name}`
    )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
    window.location.href = mailto;
    setTimeout(() => setStatus("success"), 600);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        THE NEXT CONNECTION — 07 / CONTACT
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] md:text-5xl"
      >
        Let&rsquo;s build something{" "}
        <span className="text-gradient">that matters.</span>
      </motion.h2>

      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-4"
        >
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 flex items-center gap-2 text-sm text-text-muted">
            <MapPin size={14} /> {profile.location}
          </p>

          <div className="mt-8 space-y-3">
            <button
              onClick={handleCopy}
              data-cursor="COPY"
              className="flex w-full items-center justify-between rounded-xl border border-border-soft px-4 py-3 text-sm transition-colors hover:border-amber-bright focus-ring"
            >
              <span className="flex items-center gap-2 text-text-muted">
                <Mail size={14} /> {profile.email}
              </span>
              {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="OPEN"
              className="flex w-full items-center justify-between rounded-xl border border-border-soft px-4 py-3 text-sm transition-colors hover:border-amber-bright focus-ring"
            >
              <span className="flex items-center gap-2 text-text-muted">
                <Link2 size={14} /> LinkedIn
              </span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="md:col-span-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border-soft bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-amber-bright"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border-soft bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-amber-bright"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
              Subject
            </label>
            <input
              id="subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="mt-2 w-full rounded-xl border border-border-soft bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-amber-bright"
              placeholder="What's this about?"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full resize-none rounded-xl border border-border-soft bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-amber-bright"
              placeholder="Tell me a little about the project or role..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            data-cursor="SEND"
            className="mt-7 flex items-center gap-2 rounded-full bg-amber-bright px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-widest text-void transition-opacity hover:opacity-90 disabled:opacity-60 focus-ring"
          >
            {status === "loading" ? "Opening mail..." : "Send Message"}
            <ArrowUpRight size={14} />
          </button>
          {status === "success" && (
            <p className="mt-3 text-xs text-emerald">
              Your mail client should be opening now with your message ready to send.
            </p>
          )}
          <p className="mt-3 text-[11px] leading-relaxed text-text-muted">
            This form opens a pre-filled email draft. To collect submissions
            directly, connect a form service (e.g. Formspree) or an API route —
            see the README for setup.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
