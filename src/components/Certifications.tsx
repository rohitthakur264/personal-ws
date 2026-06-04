"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certs = [
  { name: "RAG and Agentic AI Specialization", issuer: "IBM / Coursera", year: "2025" },
  { name: "Full Stack Software Developer Professional Certificate", issuer: "IBM / Coursera", year: "2025" },
  { name: ".NET Full Stack Developer Professional Certificate", issuer: "Coursera", year: "2025" },
  { name: "Bring AI to Work Workshop", issuer: "Google Workspace", year: "2025" },
  { name: "HTML & CSS for Web Designers", issuer: "Udemy", year: "2025" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 12 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.3 }} 
          style={{ marginBottom: "3rem" }}
        >
          <p className="section-label">Certifications</p>
          <h2 className="section-heading">Credentials</h2>
          <p className="section-sub">Verified certifications demonstrating continuous learning in artificial intelligence, full-stack architectures, and web standards.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: ".875rem" }} className="certs-grid">
          {certs.map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 12 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div 
                className="card" 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between", 
                  gap: "1rem", 
                  padding: "1rem 1.25rem" 
                }}
              >
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{ fontSize: ".875rem", fontWeight: 600, color: "rgb(var(--text))", marginBottom: ".125rem", lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ fontSize: ".75rem", color: "rgb(var(--muted))" }}>{c.issuer}</p>
                </div>
                <span 
                  style={{ 
                    fontSize: ".75rem", 
                    fontWeight: 600, 
                    color: "rgb(var(--text))", 
                    background: "rgb(var(--surface2))", 
                    padding: ".2rem .5rem", 
                    borderRadius: "4px", 
                    whiteSpace: "nowrap",
                    border: "1px solid rgb(var(--border))"
                  }}
                >
                  {c.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(min-width:768px){.certs-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
