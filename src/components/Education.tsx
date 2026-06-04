"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 12 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.3 }} 
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">Education</p>
          <h2 className="section-heading">Academic Background</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="edu-grid">

          {/* Academic Degree Card */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.3 }}
          >
            <div className="card">
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: ".5rem", marginBottom: ".5rem" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "rgb(var(--text))" }}>
                  B.Tech — Artificial Intelligence &amp; Machine Learning
                </h3>
                <span style={{ fontSize: ".75rem", fontWeight: 600, color: "rgb(var(--accent))", background: "rgba(99, 102, 241, 0.08)", border: "1px solid rgba(99, 102, 241, 0.15)", padding: ".2rem .5rem", borderRadius: "4px" }}>
                  CGPA: 8.42
                </span>
              </div>
              <p style={{ fontSize: ".875rem", fontWeight: 500, color: "rgb(var(--accent))", marginBottom: ".375rem" }}>
                Vishwakarma University
              </p>
              <p style={{ fontSize: ".75rem", color: "rgb(var(--muted))", marginBottom: "1rem" }}>
                Pune, Maharashtra · Aug 2023 – May 2027
              </p>
              <p style={{ fontSize: ".8125rem", color: "rgb(var(--muted))", lineHeight: 1.5 }}>
                <strong style={{ color: "rgb(var(--text))" }}>Relevant Coursework: </strong>
                Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Statistical Methods, Data Structures &amp; Algorithms, Database Management Systems.
              </p>
            </div>
          </motion.div>

          {/* Hackathon Achievement Card */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <div className="card">
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: ".5rem", marginBottom: ".5rem" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "rgb(var(--text))" }}>
                  1st Place — World Water Day Hackathon
                </h3>
                <span style={{ fontSize: ".75rem", fontWeight: 600, color: "#f59e0b", background: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.15)", padding: ".2rem .5rem", borderRadius: "4px" }}>
                  Winner
                </span>
              </div>
              <p style={{ fontSize: ".875rem", fontWeight: 500, color: "#f59e0b", marginBottom: ".375rem" }}>
                WILO × Vishwakarma University
              </p>
              <p style={{ fontSize: ".75rem", color: "rgb(var(--muted))", marginBottom: "1rem" }}>
                Pune, Maharashtra · March 2025
              </p>
              <p style={{ fontSize: ".8125rem", color: "rgb(var(--muted))", lineHeight: 1.5 }}>
                Outperformed 50+ competing teams with an end-to-end data-driven water sustainability monitoring system. Constructed streaming data ingestion pipelines, statistical analysis plots, and designed an interactive dashboard.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
