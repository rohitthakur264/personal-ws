"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";
import { useEffect, useRef } from "react";

// Subtle canvas particle background (Enhanced visibility for "web" effect)
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const pts: { x: number; y: number; vx: number; vy: number }[] = [];

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      pts.length = 0;
      // Denser particle network (changed divider from 18000 to 10000 for more particles)
      const n = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < n; i++)
        pts.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 140) {
            ctx.beginPath();
            // Increased line opacity from 0.07 to 0.16 and width to 0.8 for a highly visible web
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.16 * (1 - d / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        // Increased dot size from 1.2 to 1.8 and opacity from 0.18 to 0.35
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.35)";
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    init();
    draw();
    const ro = new ResizeObserver(init);
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

const socials = [
  { href: personalInfo.github, icon: GithubIcon, label: "GitHub", id: "hero-github" },
  { href: personalInfo.linkedin, icon: LinkedInIcon, label: "LinkedIn", id: "hero-linkedin" },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", id: "hero-email" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "rgb(var(--bg))",
        padding: "0 1.5rem",
        paddingTop: "5rem",
        overflow: "hidden",
      }}
    >
      <ParticleCanvas />

      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 40% at 60% -10%, rgba(99, 102, 241, 0.08), transparent)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "8rem",
          pointerEvents: "none",
          background: "linear-gradient(to top, rgb(var(--bg)), transparent)",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Text (Left Column / Bottom on Mobile Stack) ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="hero-text"
            style={{ order: 2 }}
          >
            {/* Available badge */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".5rem",
                padding: ".35rem .875rem",
                background: "rgba(16,185,129,.07)",
                border: "1px solid rgba(16,185,129,.18)",
                borderRadius: 9999,
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              <span style={{ fontSize: ".8125rem", fontWeight: 600, color: "#10b981", letterSpacing: ".02em" }}>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                color: "rgb(var(--text))",
                marginBottom: "1rem",
                letterSpacing: "-.02em",
              }}
            >
              Rohit <span className="accent-text">Thakur</span>
            </motion.h1>

            {/* Title / Typewriter */}
            <motion.div
              variants={fadeUp}
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                fontWeight: 600,
                marginBottom: "1.25rem",
                height: "2.2rem",
              }}
            >
              <TypeAnimation
                sequence={[
                  "Machine Learning Engineer",
                  2200,
                  "Data Scientist",
                  2200,
                  "AI Developer",
                  2200,
                  "Computer Vision Engineer",
                  2200,
                  "LLM & RAG Specialist",
                  2200,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                style={{ color: "#6366f1" }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "1.0625rem",
                color: "rgb(var(--muted))",
                lineHeight: 1.75,
                maxWidth: 580,
                marginBottom: "2rem",
              }}
            >
              Building intelligent systems using AI, Machine Learning, and Data Analytics.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", marginBottom: "2rem" }}
            >
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
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: ".625rem" }}
            >
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgb(var(--surface))",
                    border: "1px solid rgb(var(--border))",
                    borderRadius: ".5rem",
                    color: "rgb(var(--muted))",
                    transition: "border-color .2s, color .2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#6366f1";
                    (e.currentTarget as HTMLElement).style.color = "#6366f1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--border))";
                    (e.currentTarget as HTMLElement).style.color = "rgb(var(--muted))";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
              <span
                style={{
                  fontSize: ".8125rem",
                  color: "rgb(var(--muted))",
                  alignSelf: "center",
                  marginLeft: ".25rem",
                }}
                className="email-text"
              >
                {personalInfo.email}
              </span>
            </motion.div>
          </motion.div>

          {/* ── Photo (Right Column / Top on Mobile Stack) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center", order: 1 }}
            className="hero-photo"
          >
            <div style={{ position: "relative", marginBottom: "2.5rem" }}>
              {/* Outer decorative ring (Circle shape to match circular pfp) */}
              <div
                style={{
                  position: "absolute",
                  top: "-0.75rem",
                  bottom: "-0.75rem",
                  left: "-0.75rem",
                  right: "-0.75rem",
                  borderRadius: "50%",
                  border: "1px solid rgba(99, 102, 241, 0.15)",
                  pointerEvents: "none",
                }}
              />

              {/* Photo frame (Perfect Circle shape pfp) */}
              <div
                style={{
                  width: "min(280px, 70vw)",
                  height: "min(280px, 70vw)", // Kept square so border-radius 50% forms a perfect circle
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid rgb(var(--border))",
                  position: "relative",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(99, 102, 241, 0.08)",
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Rohit Thakur — AI & ML Engineer"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="320px"
                />
                {/* Subtle gradient overlay at bottom of the circle */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "5rem",
                    background: "linear-gradient(to top, rgba(99, 102, 241, 0.15), transparent)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Name card (Centered overlay at the bottom of the circle) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "85%",
                  background: "rgb(var(--surface))",
                  border: "1px solid rgb(var(--border))",
                  borderRadius: ".75rem",
                  padding: ".75rem 1rem",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.45), 0 8px 10px -6px rgba(0, 0, 0, 0.45)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: ".9rem", color: "rgb(var(--text))", marginBottom: ".125rem" }}>
                  Rohit Thakur
                </p>
                <p style={{ fontSize: ".75rem", color: "#6366f1", fontWeight: 500, lineHeight: 1.3 }}>
                  AI &amp; ML Engineer <br />
                  B.Tech VU &bull; CGPA 8.42
                </p>
              </div>

              {/* Skill badges — subtle, positioned neatly around the circular frame */}
              {[
                { label: "PyTorch", pos: { top: "1rem", right: "-3.5rem" } },
                { label: "LangChain", pos: { bottom: "4.5rem", right: "-4rem" } },
                { label: "OpenCV", pos: { top: "1rem", left: "-3.5rem" } },
              ].map(({ label, pos }) => (
                <motion.div
                  key={label}
                  className="skill-badge-floating"
                  style={{
                    position: "absolute",
                    padding: ".25rem .625rem",
                    borderRadius: ".5rem",
                    fontSize: ".75rem",
                    fontWeight: 600,
                    background: "rgb(var(--surface))",
                    border: "1px solid rgb(var(--border))",
                    color: "#6366f1",
                    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.07)",
                    pointerEvents: "none",
                    ...pos,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.3, type: "spring" }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ".375rem",
          pointerEvents: "none",
          zIndex: 2,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span style={{ fontSize: ".75rem", color: "rgb(var(--muted))" }}>Scroll down</span>
        <motion.div
          style={{
            width: 1,
            height: 32,
            background: "linear-gradient(to bottom, rgba(99, 102, 241, 0.5), transparent)",
          }}
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <style>{`
        .skill-badge-floating { display: none; }
        @media(min-width: 768px) {
          .skill-badge-floating { display: block !important; }
        }
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
