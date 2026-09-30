"use client";

import { useEffect } from "react";

export default function MotionSystem() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(min-width: 769px) and (pointer: fine)");
    root.classList.add("motion-ready");
    const targets = document.querySelectorAll<HTMLElement>(
      ".section-heading,.about-copy,.about-facts>div,.featured-row,.archive-clean,.archive-list article,.tech-orbit,.capability-card,.credential-card,.contact-main,.contact-form,.contact-links>a,.contact-links>button"
    );
    targets.forEach((element) => element.classList.add("motion-reveal"));
    let observer: IntersectionObserver | undefined;
    if (reduced.matches) targets.forEach((element) => element.classList.add("is-visible"));
    else {
      observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (entry.target.classList.contains("cyber-globe")) entry.target.classList.add("is-active");
        observer?.unobserve(entry.target);
      }), { rootMargin: "0px 0px -10%", threshold: 0.08 });
      targets.forEach((element) => {
        // Hash navigation can place a target just above the fixed header before
        // the observer is created. Reveal anything already reached by the user.
        if (element.getBoundingClientRect().top < innerHeight) element.classList.add("is-visible");
        else observer?.observe(element);
      });
    }

    const hero = document.querySelector<HTMLElement>(".hero");
    const stage = document.querySelector<HTMLElement>(".portrait-stage");
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0, pointerFrame = 0;
    const renderPointer = () => {
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;
      stage?.style.setProperty("--planet-x", `${(-currentX * 5).toFixed(2)}px`);
      stage?.style.setProperty("--planet-y", `${(-currentY * 4).toFixed(2)}px`);
      stage?.style.setProperty("--ring-x", `${(-currentX * 8).toFixed(2)}px`);
      stage?.style.setProperty("--ring-y", `${(-currentY * 6).toFixed(2)}px`);
      stage?.style.setProperty("--portrait-x", `${(currentX * 6).toFixed(2)}px`);
      stage?.style.setProperty("--portrait-y", `${(currentY * 4).toFixed(2)}px`);
      stage?.style.setProperty("--portrait-rx", `${(-currentY * 2).toFixed(2)}deg`);
      stage?.style.setProperty("--portrait-ry", `${(-2 + currentX * 3).toFixed(2)}deg`);
      stage?.style.setProperty("--front-x", `${(currentX * 10).toFixed(2)}px`);
      stage?.style.setProperty("--front-y", `${(currentY * 7).toFixed(2)}px`);
      if (Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > 0.01) pointerFrame = requestAnimationFrame(renderPointer);
      else pointerFrame = 0;
    };
    const requestPointerFrame = () => { if (!pointerFrame) pointerFrame = requestAnimationFrame(renderPointer); };
    const onPointerMove = (event: PointerEvent) => {
      if (!stage || !desktop.matches || reduced.matches) return;
      const rect = stage.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      targetY = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
      requestPointerFrame();
    };
    const resetPointer = () => { targetX = targetY = 0; requestPointerFrame(); };
    stage?.addEventListener("pointermove", onPointerMove);
    stage?.addEventListener("pointerleave", resetPointer);

    const depthTargets = document.querySelectorAll<HTMLElement>(
      ".featured-row,.archive-list article,.capability-card,.credential-card,.hero-stats>div,.contact-links>a,.contact-links>button"
    );
    const depthCleanups: Array<() => void> = [];
    depthTargets.forEach((element) => {
      element.classList.add("depth-surface");
      let frame = 0, nextX = .5, nextY = .5;
      const render = () => {
        frame = 0;
        const featured = element.classList.contains("featured-row");
        element.style.setProperty("--depth-rx", `${((.5 - nextY) * (featured ? 8 : 4)).toFixed(2)}deg`);
        element.style.setProperty("--depth-ry", `${((nextX - .5) * (featured ? 10 : 6)).toFixed(2)}deg`);
        element.style.setProperty("--light-x", `${(nextX * 100).toFixed(1)}%`);
        element.style.setProperty("--light-y", `${(nextY * 100).toFixed(1)}%`);
        element.style.setProperty("--media-x", `${((.5 - nextX) * 6).toFixed(2)}px`);
        element.style.setProperty("--media-y", `${((.5 - nextY) * 4).toFixed(2)}px`);
        element.style.setProperty("--shadow-x", `${((nextX - .5) * -12).toFixed(1)}px`);
        element.style.setProperty("--shadow-y", `${(14 + nextY * 8).toFixed(1)}px`);
      };
      const move = (event: PointerEvent) => {
        if (!desktop.matches || reduced.matches) return;
        const rect = element.getBoundingClientRect();
        nextX = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        nextY = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
        if (!frame) frame = requestAnimationFrame(render);
        element.classList.add("is-interacting");
      };
      const leave = () => {
        cancelAnimationFrame(frame); frame = 0; nextX = nextY = .5;
        element.style.setProperty("--depth-rx", "0deg");element.style.setProperty("--depth-ry", "0deg");
        element.style.setProperty("--media-x", "0px");element.style.setProperty("--media-y", "0px");
        element.classList.remove("is-interacting");
      };
      element.addEventListener("pointermove", move);element.addEventListener("pointerleave", leave);
      depthCleanups.push(() => { cancelAnimationFrame(frame); element.removeEventListener("pointermove", move);element.removeEventListener("pointerleave", leave); });
    });

    const magneticTargets = document.querySelectorAll<HTMLElement>(".magnetic,.project-actions a");
    const magneticCleanups: Array<() => void> = [];
    magneticTargets.forEach((element) => {
      const move = (event: PointerEvent) => {
        if (!desktop.matches || reduced.matches) return;
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - .5) * 8;
        const y = ((event.clientY - rect.top) / rect.height - .5) * 8;
        element.style.setProperty("--mag-x", `${x.toFixed(2)}px`);
        element.style.setProperty("--mag-y", `${y.toFixed(2)}px`);
      };
      const leave = () => { element.style.setProperty("--mag-x", "0px"); element.style.setProperty("--mag-y", "0px"); };
      element.addEventListener("pointermove", move); element.addEventListener("pointerleave", leave);
      magneticCleanups.push(() => { element.removeEventListener("pointermove", move); element.removeEventListener("pointerleave", leave); });
    });

    const techOrbit = document.querySelector<HTMLElement>(".tech-orbit");
    let techFrame = 0, techTargetX = 0, techTargetY = 0, techX = 0, techY = 0;
    const renderTech = () => {
      techX += (techTargetX - techX) * .12; techY += (techTargetY - techY) * .12;
      techOrbit?.style.setProperty("--tech-core-x", `${(techX * 4).toFixed(2)}px`); techOrbit?.style.setProperty("--tech-core-y", `${(techY * 4).toFixed(2)}px`);
      techOrbit?.style.setProperty("--tech-inner-x", `${(techX * 6).toFixed(2)}px`); techOrbit?.style.setProperty("--tech-inner-y", `${(techY * 5).toFixed(2)}px`);
      techOrbit?.style.setProperty("--tech-outer-x", `${(techX * 10).toFixed(2)}px`); techOrbit?.style.setProperty("--tech-outer-y", `${(techY * 8).toFixed(2)}px`);
      techOrbit?.style.setProperty("--tech-ring-x", `${(-techX * 5).toFixed(2)}px`); techOrbit?.style.setProperty("--tech-ring-y", `${(-techY * 4).toFixed(2)}px`);
      if (Math.abs(techTargetX-techX)+Math.abs(techTargetY-techY)>.01) techFrame=requestAnimationFrame(renderTech); else techFrame=0;
    };
    const moveTech = (event:PointerEvent) => { if(!techOrbit||!desktop.matches||reduced.matches)return; const rect=techOrbit.getBoundingClientRect();techTargetX=Math.max(-1,Math.min(1,(event.clientX-rect.left)/rect.width*2-1));techTargetY=Math.max(-1,Math.min(1,(event.clientY-rect.top)/rect.height*2-1));if(!techFrame)techFrame=requestAnimationFrame(renderTech); };
    const leaveTech = () => {techTargetX=techTargetY=0;if(!techFrame)techFrame=requestAnimationFrame(renderTech);};
    techOrbit?.addEventListener("pointermove",moveTech);techOrbit?.addEventListener("pointerleave",leaveTech);

    let scrollFrame = 0;
    const renderScroll = () => {
      scrollFrame = 0;
      if (!hero || reduced.matches) return;
      const progress = Math.max(0, Math.min(1, scrollY / Math.max(hero.offsetHeight, 1)));
      hero.style.setProperty("--copy-scroll", `${(-progress * 52).toFixed(2)}px`);
      hero.style.setProperty("--atmosphere-scroll", `${(progress * 10).toFixed(2)}px`);
      hero.style.setProperty("--portrait-scroll", `${(-progress * 22).toFixed(2)}px`);
    };
    const onScroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(renderScroll); };
    renderScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      root.classList.remove("motion-ready"); observer?.disconnect();
      stage?.removeEventListener("pointermove", onPointerMove); stage?.removeEventListener("pointerleave", resetPointer);
      depthCleanups.forEach((cleanup) => cleanup());
      magneticCleanups.forEach((cleanup) => cleanup());
      techOrbit?.removeEventListener("pointermove",moveTech);techOrbit?.removeEventListener("pointerleave",leaveTech);cancelAnimationFrame(techFrame);
      removeEventListener("scroll", onScroll); cancelAnimationFrame(pointerFrame); cancelAnimationFrame(scrollFrame);
    };
  }, []);
  return null;
}
