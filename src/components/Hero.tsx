"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Mail, Phone, Download, ArrowRight, MapPin } from "lucide-react";
import { LinkedInIcon, GithubIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";
import { useEffect, useRef } from "react";

// ── Lightweight canvas particle system (no external lib) ──────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number;
      r: number; alpha: number; color: string;
    }[] = [];

    const colors = ["#6056f5", "#a78bfa", "#38bdf8", "#ec4899", "#7c7cfc"];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const spawn = () => {
      const count = Math.floor((canvas.width * canvas.height) / 12000);
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: Math.random() * 2 + 1,
          alpha: Math.random() * 0.4 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96,86,245,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    spawn();
    draw();

    const ro = new ResizeObserver(() => { resize(); spawn(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

// ── Animation variants ────────────────────────────────────────
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Hero() {
  const handleContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "rgb(var(--background))" }}
    >
      {/* Custom canvas particle background */}
      <ParticleCanvas />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(96,86,245,0.22), transparent)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgb(var(--background)), transparent)",
          zIndex: 1,
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(96,86,245,0.10)", zIndex: 1, animation: "pulse 5s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(124,58,237,0.10)", zIndex: 1, animation: "pulse 5s ease-in-out infinite 2s" }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16" style={{ zIndex: 2 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="order-2 lg:order-1">

            {/* Status */}
            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                style={{ background: "rgba(16,185,129,0.08)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)" }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "#10b981", animation: "pulse 2s ease-in-out infinite" }} />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Rohit</span>
              <br />
              <span className="gradient-text">Thakur</span>
            </motion.h1>

            {/* Typing */}
            <motion.div
              variants={fadeUp}
              className="text-xl md:text-2xl font-medium mb-6 h-9"
              style={{ color: "rgb(var(--muted))" }}
            >
              <TypeAnimation
                sequence={[
                  "Machine Learning Engineer", 2000,
                  "Data Scientist", 2000,
                  "AI Developer", 2000,
                  "Computer Vision Engineer", 2000,
                  "LLM & RAG Specialist", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: "#7c7cfc", fontWeight: 600 }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "rgb(var(--muted))" }}
            >
              {personalInfo.tagline} Based in{" "}
              <span className="inline-flex items-center gap-1" style={{ color: "rgb(var(--foreground))" }}>
                <MapPin size={14} style={{ color: "#7c7cfc" }} />
                Pune, India
              </span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-resume-download"
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                View Resume
              </motion.a>
              <motion.button
                onClick={handleContact}
                id="hero-contact-btn"
                className="btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Connect
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              {[
                { href: personalInfo.github, icon: GithubIcon, label: "GitHub", id: "hero-github" },
                { href: personalInfo.linkedin, icon: LinkedInIcon, label: "LinkedIn", id: "hero-linkedin" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", id: "hero-email" },
                { href: `tel:${personalInfo.phone}`, icon: Phone, label: "Phone", id: "hero-phone" },
              ].map(({ href, icon: Icon, label, id }) => (
                <motion.a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={id}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl glass"
                  style={{ color: "rgb(var(--muted))" }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <span className="text-sm hidden sm:block ml-1" style={{ color: "rgb(var(--muted))" }}>
                · rohitthakur121212@gmail.com
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: "1px solid rgba(96,86,245,0.25)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full"
                  style={{ background: "#6056f5", boxShadow: "0 0 12px rgba(96,86,245,0.7)" }} />
              </motion.div>
              <motion.div
                className="absolute inset-4 rounded-full"
                style={{ border: "1px solid rgba(124,58,237,0.18)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full"
                  style={{ background: "#7c3aed", boxShadow: "0 0 8px rgba(124,58,237,0.7)" }} />
              </motion.div>

              {/* Avatar with real photo */}
              <motion.div
                className="absolute inset-8 rounded-full overflow-hidden"
                style={{
                  border: "3px solid rgba(96,86,245,0.5)",
                  boxShadow: "0 0 40px rgba(96,86,245,0.3), 0 0 80px rgba(124,58,237,0.15)",
                }}
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/profile.png"
                  alt="Rohit Thakur — ML Engineer & Data Scientist"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 768px) 200px, 280px"
                />
              </motion.div>

              {/* Floating badges */}
              {[
                { label: "PyTorch",   style: { top: "-1rem",    right: "-1rem"  }, delay: 0   },
                { label: "LangChain", style: { bottom: "-1rem", left: "-1.5rem" }, delay: 0.5 },
                { label: "OpenCV",    style: { top: "2rem",     left: "-2rem"   }, delay: 1   },
                { label: "MLflow",    style: { bottom: "2rem",  right: "-2rem"  }, delay: 1.5 },
              ].map(({ label, style, delay }) => (
                <motion.div
                  key={label}
                  className="absolute px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    ...style,
                    background: "rgba(13,13,26,0.88)",
                    border: "1px solid rgba(96,86,245,0.35)",
                    color: "#7c7cfc",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 20px rgba(96,86,245,0.15)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                  transition={{
                    opacity: { delay: delay + 1, duration: 0.5 },
                    scale: { delay: delay + 1, duration: 0.4, type: "spring" },
                    y: { duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay: delay + 1.5 },
                  }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs" style={{ color: "rgb(var(--muted))" }}>Scroll to explore</span>
          <motion.div
            className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: "2px solid rgb(var(--border))" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: "#7c7cfc" }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
