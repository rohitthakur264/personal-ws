"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Trophy } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5 }} style={{ marginBottom: "3rem" }}>
          <p className="section-label">Education</p>
          <h2 className="section-heading">Academic Background</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="edu-grid">

          {/* Degree */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5 }}>
            <div className="card" style={{ borderLeft: "3px solid #6366f1" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(99,102,241,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <GraduationCap size={20} style={{ color: "#6366f1" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: ".5rem", marginBottom: ".375rem" }}>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "rgb(var(--text))" }}>
                      B.Tech — Artificial Intelligence &amp; Machine Learning
                    </h3>
                    <span style={{ fontSize: ".75rem", fontWeight: 700, color: "#6366f1", background: "rgba(99,102,241,.1)", padding: ".2rem .625rem", borderRadius: 9999 }}>CGPA: 8.42</span>
                  </div>
                  <p style={{ fontSize: ".9375rem", fontWeight: 600, color: "#6366f1", marginBottom: ".375rem" }}>Vishwakarma University</p>
                  <p style={{ fontSize: ".8125rem", color: "rgb(var(--muted))", marginBottom: ".75rem" }}>Pune, Maharashtra · Aug 2023 – May 2027</p>
                  <p style={{ fontSize: ".8125rem", color: "rgb(var(--muted))", lineHeight: 1.6 }}>
                    <strong style={{ color: "rgb(var(--text))" }}>Relevant Coursework: </strong>
                    Machine Learning, Deep Learning, Computer Vision, NLP, Statistical Methods, Data Structures &amp; Algorithms, Database Systems
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievement */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5, delay: .1 }}>
            <div className="card" style={{ borderLeft: "3px solid #f59e0b" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(245,158,11,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Trophy size={20} style={{ color: "#f59e0b" }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "rgb(var(--text))", marginBottom: ".25rem" }}>
                    🏆 1st Place — World Water Day Hackathon
                  </h3>
                  <p style={{ fontSize: ".875rem", fontWeight: 600, color: "#f59e0b", marginBottom: ".375rem" }}>WILO × Vishwakarma University</p>
                  <p style={{ fontSize: ".8125rem", color: "rgb(var(--muted))", lineHeight: 1.6 }}>
                    Outperformed 50+ teams with an end-to-end data-driven water sustainability monitoring solution — ingestion, EDA, statistical modeling, and interactive dashboard.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(min-width:900px){.edu-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
