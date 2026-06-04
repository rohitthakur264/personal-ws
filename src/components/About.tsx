"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";


const stats = [
  { value: "8.42", label: "CGPA / 10.0" },
  { value: "3+",   label: "Internships"  },
  { value: "4+",   label: "Projects"     },
  { value: "5+",   label: "Certifications" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "start" }} className="about-grid">

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
            <p className="section-label">About</p>
            <h2 className="section-heading">Who I Am</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p className="section-sub">
                I'm Rohit Thakur, a final-year B.Tech student in Artificial Intelligence &amp; Machine Learning at Vishwakarma University, Pune (CGPA 8.42). I build end-to-end AI systems — from data pipelines to production-ready ML models.
              </p>
              <p className="section-sub">
                My work spans computer vision, NLP, RAG-based LLM systems, and data analytics. I've collaborated with defense research teams, contributed to open-source projects, and won hackathons applying data-driven solutions to real-world problems.
              </p>
              <p className="section-sub">
                I'm passionate about the intersection of AI research and practical engineering — turning complex models into reliable, scalable products.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {stats.map((s, i) => (
                <div key={i} className="card" style={{ textAlign: "center", padding: "1.5rem 1rem" }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2rem", fontWeight: 800, color: "#6366f1", lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontSize: ".8125rem", color: "rgb(var(--muted))", marginTop: ".375rem", fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Info list */}
            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: ".625rem" }}>
              {[
                { icon: GraduationCap, text: "B.Tech AI & ML — Vishwakarma University, Pune" },
                { icon: MapPin,        text: "Pune, Maharashtra, India" },
                { icon: Mail,          text: "rohitthakur121212@gmail.com" },
                { icon: GithubIcon,    text: "github.com/rohitthakur264" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", gap: ".75rem", alignItems: "center", fontSize: ".875rem", color: "rgb(var(--muted))" }}>
                  <Icon size={14} style={{ color: "#6366f1", flexShrink: 0 }} />
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
