"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

const links = [
  { label: "About",    href: "#about"    },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects"  },
  { label: "Skills",   href: "#skills"   },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActive("#" + e.target.id)),
      { threshold: 0.5, rootMargin: "-64px 0px -40% 0px" }
    );
    links.forEach(({ href }) => { const el = document.querySelector(href); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const goto = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? "rgba(15,23,42,0.92)"
    : "transparent";

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: navBg,
        borderBottom: scrolled ? "1px solid rgb(var(--border))" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "background .3s, border-color .3s",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ display: "flex", alignItems: "center", gap: ".625rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: ".8125rem", color: "#fff" }}>RT</span>
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1rem", color: "rgb(var(--text))" }}>
            Rohit <span style={{ color: "#6366f1" }}>Thakur</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: "none", gap: ".25rem" }} className="desktop-nav">
          {links.map(l => (
            <button key={l.href} onClick={() => goto(l.href)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: ".4rem .875rem", borderRadius: 6,
                fontSize: ".875rem", fontWeight: 500,
                color: active === l.href ? "#6366f1" : "rgb(var(--muted))",
                transition: "color .2s",
              }}
            >{l.label}</button>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <button onClick={toggle} aria-label="Toggle theme"
            style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "1px solid rgb(var(--border))", borderRadius: 8, cursor: "pointer", color: "rgb(var(--muted))" }}>
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" id="nav-resume"
            className="btn-primary" style={{ padding: ".4rem 1rem", fontSize: ".875rem", display: "none" }}
          >
            <Download size={14} /> Resume
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu"
            style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "1px solid rgb(var(--border))", borderRadius: 8, cursor: "pointer", color: "rgb(var(--muted))" }}
            className="mobile-menu-btn"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: "rgb(var(--bg))", borderTop: "1px solid rgb(var(--border))", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: ".25rem" }}>
          {links.map(l => (
            <button key={l.href} onClick={() => goto(l.href)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: ".625rem .75rem", borderRadius: 6, fontSize: ".9375rem", fontWeight: 500, color: active === l.href ? "#6366f1" : "rgb(var(--muted))", textAlign: "left" }}
            >{l.label}</button>
          ))}
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: ".5rem" }}>
            <Download size={14} /> View Resume
          </a>
        </div>
      )}

      <style>{`
        @media(min-width:768px) {
          .desktop-nav { display:flex !important; }
          .mobile-menu-btn { display:none !important; }
          #nav-resume { display:inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
