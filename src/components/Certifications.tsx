"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  { name: "IBM RAG and Agentic AI Specialization", issuer: "Coursera / IBM", year: "2025", color: "#6366f1" },
  { name: "IBM Full Stack Software Developer", issuer: "Coursera / IBM", year: "Oct 2025", color: "#8b5cf6" },
  { name: ".NET Full Stack Developer Professional Certificate", issuer: "Coursera", year: "2025", color: "#0ea5e9" },
  { name: "Bring AI to Work Workshop", issuer: "Google Workspace", year: "Jun 2025", color: "#10b981" },
  { name: "HTML & CSS for Web Designers", issuer: "Udemy", year: "Jan 2025", color: "#f59e0b" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .4 }} style={{ marginBottom: "3rem" }}>
          <p className="section-label">Certifications</p>
          <h2 className="section-heading">Credentials</h2>
          <p className="section-sub">Professional certifications demonstrating continuous learning in AI, cloud, and full-stack development.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: ".875rem" }} className="certs-grid">
          {certs.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .4, delay: i * .08 }}>
              <div className="card" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.125rem 1.25rem" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${c.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Award size={18} style={{ color: c.color }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: ".9375rem", fontWeight: 600, color: "rgb(var(--text))", marginBottom: ".125rem", lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ fontSize: ".8125rem", color: "rgb(var(--muted))" }}>{c.issuer}</p>
                </div>
                <span style={{ fontSize: ".75rem", fontWeight: 600, color: c.color, background: `${c.color}15`, padding: ".2rem .625rem", borderRadius: 9999, whiteSpace: "nowrap" }}>{c.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(min-width:768px){.certs-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
