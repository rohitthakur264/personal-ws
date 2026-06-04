"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socials = [
  { href: personalInfo.github, icon: Github, label: "GitHub", id: "hero-github" },
  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", id: "hero-linkedin" },
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
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
        }}
          className="hero-grid"
        >
          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ order: 2 }}
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
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 500, color: "rgb(var(--muted))", marginBottom: "1.25rem" }}>
              AI &amp; Machine Learning Engineer
            </p>

            {/* Tagline */}
            <p style={{ fontSize: "1rem", color: "rgb(var(--muted))", lineHeight: 1.75, maxWidth: 480, marginBottom: "2rem" }}>
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
              <span style={{ fontSize: ".8125rem", color: "rgb(var(--muted))", alignSelf: "center", marginLeft: ".25rem", display: "none" }} className="email-text">
                {personalInfo.email}
              </span>
            </div>
          </motion.div>

          {/* ── Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{ display: "flex", justifyContent: "center", order: 1 }}
            className="hero-photo"
          >
            <div style={{ position: "relative" }}>
              {/* Photo */}
              <div style={{
                width: "min(280px, 70vw)",
                height: "min(320px, 80vw)",
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgb(var(--border))",
                position: "relative",
              }}>
                <Image
                  src="/profile.png"
                  alt="Rohit Thakur — AI & ML Engineer"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="320px"
                />
              </div>
              {/* Name card */}
              <div style={{
                position: "absolute",
                bottom: "-1.25rem",
                left: "1rem",
                right: "1rem",
                background: "rgb(var(--surface))",
                border: "1px solid rgb(var(--border))",
                borderRadius: ".75rem",
                padding: ".75rem 1rem",
              }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: ".9rem", color: "rgb(var(--text))", marginBottom: ".125rem" }}>Rohit Thakur</p>
                <p style={{ fontSize: ".75rem", color: "#6366f1", fontWeight: 500 }}>AI &amp; ML Engineer · B.Tech VU · CGPA 8.42</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr auto !important; }
          .hero-text { order: 1 !important; }
          .hero-photo { order: 2 !important; justify-content: flex-end !important; }
          .email-text { display: inline !important; }
        }
      `}</style>
    </section>
  );
}
