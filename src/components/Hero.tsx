"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const socials = [
  { href: personalInfo.github, icon: GithubIcon, label: "GitHub", id: "hero-github" },
  { href: personalInfo.linkedin, icon: LinkedInIcon, label: "LinkedIn", id: "hero-linkedin" },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", id: "hero-email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "rgb(var(--bg))",
        padding: "0 1.5rem",
        paddingTop: "5rem",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", width: "100%" }}>
        {/* ── Text ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hero-text"
        >
          {/* Available badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", padding: ".35rem .875rem", background: "rgba(16,185,129,.07)", border: "1px solid rgba(16,185,129,.18)", borderRadius: 9999, marginBottom: "1.5rem" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
            <span style={{ fontSize: ".8125rem", fontWeight: 600, color: "#10b981", letterSpacing: ".02em" }}>Available for Opportunities</span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            color: "rgb(var(--text))",
            marginBottom: "1rem",
            letterSpacing: "-.02em",
          }}>
            Rohit{" "}
            <span className="accent-text">Thakur</span>
          </h1>

          {/* Title */}
          <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", fontWeight: 500, color: "rgb(var(--muted))", marginBottom: "1.25rem" }}>
            AI &amp; Machine Learning Engineer
          </p>

          {/* Tagline */}
          <p style={{ fontSize: "1.0625rem", color: "rgb(var(--muted))", lineHeight: 1.75, maxWidth: 580, marginBottom: "2rem" }}>
            Building intelligent systems using AI, Machine Learning, and Data Analytics.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", marginBottom: "2rem" }}>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" id="hero-resume" className="btn-primary">
              <Download size={15} /> View Resume
            </a>
            <button
              id="hero-contact"
              className="btn-ghost"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me <ArrowRight size={15} />
            </button>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: ".625rem" }}>
            {socials.map(({ href, icon: Icon, label, id }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                id={id}
                aria-label={label}
                style={{
                  width: 38, height: 38,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgb(var(--surface))",
                  border: "1px solid rgb(var(--border))",
                  borderRadius: ".5rem",
                  color: "rgb(var(--muted))",
                  transition: "border-color .2s, color .2s",
                  textDecoration: "none",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#6366f1"; (e.currentTarget as HTMLElement).style.color = "#6366f1"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--border))"; (e.currentTarget as HTMLElement).style.color = "rgb(var(--muted))"; }}
              >
                <Icon size={16} />
              </a>
            ))}
            <span style={{ fontSize: ".8125rem", color: "rgb(var(--muted))", alignSelf: "center", marginLeft: ".25rem" }} className="email-text">
              {personalInfo.email}
            </span>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
