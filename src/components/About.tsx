"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const stats = [
  { value: "8.42", label: "CGPA / 10.0" },
  { value: "3+",   label: "Internships"  },
  { value: "4+",   label: "Selected Projects" },
  { value: "5+",   label: "Certifications" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3.5rem", alignItems: "start" }} className="about-grid">

          {/* Left: Content Story */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.3 }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-heading">My Background</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p className="section-sub" style={{ fontSize: ".9375rem" }}>
                I am a final-year B.Tech student in Artificial Intelligence &amp; Machine Learning at Vishwakarma University, Pune. I am interested in building end-to-end intelligence systems—from streaming data pipelines to training and deploying optimized neural networks in production.
              </p>
              <p className="section-sub" style={{ fontSize: ".9375rem" }}>
                My journey includes collaborating with defence research teams to develop drone surveillance models that run at 25+ FPS on resource-constrained edge hardware. I have also completed simulated software engineering pipelines with Deloitte and led tech student seminars to mentor juniors in machine learning.
              </p>
              <p className="section-sub" style={{ fontSize: ".9375rem" }}>
                I focus on writing readable, testable code and structuring pipelines that scale. I believe the best AI systems are built on clean data engineering and thorough validation.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats & Key Info */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.3, delay: 0.08 }}
          >
            {/* Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".875rem" }}>
              {stats.map((s, i) => (
                <div key={i} className="card" style={{ padding: "1.25rem", borderLeft: "2px solid rgb(var(--accent))", borderRadius: "6px" }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "rgb(var(--text))", lineHeight: 1.1 }}>{s.value}</p>
                  <p style={{ fontSize: ".75rem", color: "rgb(var(--muted))", marginTop: ".25rem", fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Info list */}
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: ".75rem" }}>
              {[
                { icon: GraduationCap, text: "B.Tech AI & ML — Vishwakarma University, Pune" },
                { icon: MapPin,        text: "Pune, Maharashtra, India" },
                { icon: Mail,          text: "rohitthakur121212@gmail.com" },
                { icon: GithubIcon,    text: "github.com/rohitthakur264" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", gap: ".75rem", alignItems: "center", fontSize: ".875rem", color: "rgb(var(--muted))" }}>
                  <Icon size={14} style={{ color: "rgb(var(--accent))", flexShrink: 0 }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
