"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar(){
  const [open,setOpen]=useState(false); const [active,setActive]=useState("#home"); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{document.body.classList.toggle("menu-open",open);return()=>document.body.classList.remove("menu-open")},[open]);
  useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};addEventListener("keydown",close);return()=>removeEventListener("keydown",close)},[]);
  useEffect(()=>{const update=()=>{let current=navLinks[0].href;for(const link of navLinks){const section=document.querySelector(link.href);if(section&&section.getBoundingClientRect().top<=180)current=link.href}setActive(current);setScrolled(scrollY>28)};update();addEventListener("scroll",update,{passive:true});return()=>removeEventListener("scroll",update)},[]);
  return <header className={`site-header ${scrolled?"is-scrolled":""}`}><div className="nav-shell"><a className="brand focus-ring" href="#home" aria-label="Hammad Ameer, back to top"><b>HA</b><span><strong>HAMMAD AMEER</strong><small>Software Engineer</small></span></a><nav className="desktop-nav" aria-label="Primary navigation">{navLinks.map(l=><a key={l.href} href={l.href} className={active===l.href?"active":""}>{l.label}</a>)}</nav><a className="nav-cta magnetic" href="#contact">Let&apos;s connect <ArrowUpRight/></a><button className="menu-button focus-ring" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?"Close menu":"Open menu"}>{open?<X/>:<Menu/>}</button></div><div className={`mobile-panel ${open?"is-open":""}`} id="mobile-navigation"><nav aria-label="Mobile navigation">{navLinks.map(l=><a key={l.href} href={l.href} className={active===l.href?"active":""} onClick={()=>setOpen(false)}><span>{l.number}.</span>{l.label}</a>)}</nav><a className="mobile-connect" href="#contact" onClick={()=>setOpen(false)}>Let&apos;s connect <ArrowUpRight/></a></div></header>
}
