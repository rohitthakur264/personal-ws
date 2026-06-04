"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Mail, MapPin, ArrowRight, Download } from "lucide-react";
import { LinkedInIcon, GithubIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";
import { useEffect, useRef } from "react";

// Subtle canvas particle background
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
      const n = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < n; i++)
        pts.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79,70,229,${0.07 * (1 - d / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(79,70,229,0.18)";
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    init(); draw();
    const ro = new ResizeObserver(init);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "rgb(var(--background))" }}>
      <ParticleCanvas />

      {/* Soft top gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 40% at 60% -10%, rgba(79,70,229,0.08), transparent)", zIndex: 1 }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, rgb(var(--background)), transparent)", zIndex: 1 }} />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16" style={{ zIndex: 2 }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Content ── */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="order-2 lg:order-1">

            {/* Status pill */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-7 tracking-wide" style={{ background: "rgba(16,185,129,0.07)", color: "#059669", border: "1px solid rgba(16,185,129,0.18)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#059669" }} />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={fadeUp} className="font-display font-bold leading-[1.1] mb-5" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "rgb(var(--foreground))" }}>
              Rohit <span className="gradient-text">Thakur</span>
            </motion.h1>

            {/* Title */}
            <motion.div variants={fadeUp} className="text-lg font-semibold mb-5 h-7" style={{ color: "rgb(var(--muted))" }}>
              <TypeAnimation
                sequence={["Machine Learning Engineer", 2200, "Data Scientist", 2200, "AI Developer", 2200, "Computer Vision Engineer", 2200, "LLM & RAG Specialist", 2200]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                style={{ color: "#4f46e5" }}
              />
            </motion.div>

            {/* Bio */}
            <motion.p variants={fadeUp} className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: "rgb(var(--muted))" }}>
              {personalInfo.tagline}{" "}
              <span className="inline-flex items-center gap-1 font-medium" style={{ color: "rgb(var(--foreground))" }}>
                <MapPin size={13} style={{ color: "#4f46e5" }} /> Pune, India
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" id="hero-resume" className="btn-primary">
                <Download size={15} /> View Resume
              </a>
              <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} id="hero-contact" className="btn-outline">
                Contact Me <ArrowRight size={15} />
              </button>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5">
              {[
                { href: personalInfo.github, Icon: GithubIcon, label: "GitHub", id: "hero-github" },
                { href: personalInfo.linkedin, Icon: LinkedInIcon, label: "LinkedIn", id: "hero-linkedin" },
                { href: `mailto:${personalInfo.email}`, Icon: Mail, label: "Email", id: "hero-email" },
              ].map(({ href, Icon, label, id }) => (
                <motion.a key={id} href={href} target="_blank" rel="noopener noreferrer" id={id} aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{ border: "1px solid rgb(var(--border))", color: "rgb(var(--muted))", background: "rgb(var(--surface))" }}
                  whileHover={{ scale: 1.08, borderColor: "#4f46e5", color: "#4f46e5" }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
              <span className="text-sm hidden sm:block ml-1" style={{ color: "rgb(var(--muted))" }}>rohitthakur121212@gmail.com</span>
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-2xl" style={{ border: "1px solid rgba(79,70,229,0.15)" }} />

              {/* Photo frame */}
              <div
                className="relative w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgb(var(--border))",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(79,70,229,0.08)",
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Rohit Thakur — ML Engineer & Data Scientist"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 768px) 256px, 320px"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, rgba(79,70,229,0.15), transparent)" }} />
              </div>

              {/* Name card below photo */}
              <div
                className="absolute -bottom-4 left-4 right-4 px-4 py-2.5 rounded-xl"
                style={{
                  background: "rgb(var(--surface))",
                  border: "1px solid rgb(var(--border))",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <p className="font-display font-bold text-sm" style={{ color: "rgb(var(--foreground))" }}>Rohit Thakur</p>
                <p className="text-xs" style={{ color: "#4f46e5" }}>AI & ML Engineer · B.Tech VU · CGPA 8.42</p>
              </div>

              {/* Skill badges — subtle, positioned neatly */}
              {[
                { label: "PyTorch", pos: { top: "1rem", right: "-3.5rem" } },
                { label: "LangChain", pos: { bottom: "5rem", right: "-4rem" } },
                { label: "OpenCV", pos: { top: "1rem", left: "-3.5rem" } },
              ].map(({ label, pos }) => (
                <motion.div
                  key={label}
                  className="absolute px-2.5 py-1 rounded-lg text-xs font-semibold hidden md:flex items-center"
                  style={{
                    ...pos,
                    background: "rgb(var(--surface))",
                    border: "1px solid rgb(var(--border))",
                    color: "#4f46e5",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.4, type: "spring" }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <span className="text-xs" style={{ color: "rgb(var(--muted))" }}>Scroll down</span>
          <motion.div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(79,70,229,0.5), transparent)" }} animate={{ scaleY: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.div>
      </div>
    </section>
  );
}
