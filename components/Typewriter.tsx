"use client";

import { useEffect, useState } from "react";

const roles = ["Software Engineer", "Full-Stack Developer", "SaaS Builder", "Mobile App Developer", "AI Enthusiast", "Problem Solver"];

export default function Typewriter() {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let role = 0, letter = roles[0].length, deleting = true, timer = 0;
    const tick = () => {
      const phrase = roles[role];
      if (deleting) {
        letter -= 1; setText(phrase.slice(0, letter));
        if (letter === 0) { deleting = false; role = (role + 1) % roles.length; timer = window.setTimeout(tick, 320); }
        else timer = window.setTimeout(tick, 38);
      } else {
        letter += 1; setText(roles[role].slice(0, letter));
        if (letter === roles[role].length) { deleting = true; timer = window.setTimeout(tick, 1450); }
        else timer = window.setTimeout(tick, 65);
      }
    };
    timer = window.setTimeout(tick, 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return <p className="hero-role"><span className="sr-only">Software Engineer</span><span aria-hidden="true">{text}<b>|</b></span></p>;
}
