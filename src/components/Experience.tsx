"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";

const jobs = [
  {
    role: "Artificial Intelligence Intern",
    company: "Vishwakarma University × RTN, HQ Southern Command",
    location: "Pune, Maharashtra",
    period: "Jul 2024 – Dec 2024",
    type: "Research",
    bullets: [
      "Developed a real-time drone surveillance computer vision pipeline using OpenCV and CNN models, achieving 25+ FPS on edge hardware.",
      "Engineered navigation models for obstacle detection, reducing manual remote intervention by ~40%.",
      "Delivered 3 proof-of-concept AI/ML models to defense stakeholders following iterative benchmarking and latency optimization.",
    ],
  },
  {
    role: "Technology Job Simulation Intern",
    company: "Deloitte – Forage Virtual Simulation",
    location: "Remote",
    period: "Jun 2025",
    type: "Consulting",
    bullets: [
      "Resolved 13+ defects in simulated client Python services, improving service execution runtime by up to 20%.",
      "Produced technical documentation and system architecture designs aligned to Deloitte consulting standards.",
      "Completed sprint tasks, code reviews, and mock client presentations in a simulated agile project structure.",
    ],
  },
  {
    role: "Student Mentor & Tech Lead",
    company: "GeeksforGeeks Student Chapter, Vishwakarma University",
    location: "Pune, Maharashtra",
    period: "Mar 2024 – Mar 2025",
    type: "Leadership",
    bullets: [
      "Organized technical seminars, coding challenges, and ML workshops for 200+ student attendees.",
      "Mentored junior students in programming fundamentals, competitive data structures, and machine learning basics.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 12 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.3 }} 
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-heading">Professional Journey</h2>
          <p className="section-sub">Internships and leadership roles in research, consulting simulations, and student communities.</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", position: "relative" }}>
          {/* Vertical timeline line */}
          <div 
            style={{ 
              position: "absolute", 
              left: "8px", 
              top: "8px", 
              bottom: "8px", 
              width: "1px", 
              background: "rgb(var(--border))" 
            }} 
          />

          {jobs.map((job, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 12 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.3, delay: i * 0.05 }}
              style={{ display: "flex", gap: "1.5rem", position: "relative" }}
            >
              {/* Timeline circle node */}
              <div 
                style={{ 
                  width: "17px", 
                  height: "17px", 
                  borderRadius: "50%", 
                  background: "rgb(var(--bg))", 
                  border: "2px solid rgb(var(--border))", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "3px",
                  zIndex: 2 
                }} 
              />

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: ".5rem", marginBottom: ".5rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "rgb(var(--text))" }}>
                      {job.role}
                    </h3>
                    <p style={{ fontSize: ".875rem", fontWeight: 500, color: "rgb(var(--accent))", marginTop: ".125rem" }}>
                      {job.company}
                    </p>
                  </div>
                  <span style={{ fontSize: ".75rem", padding: ".15rem .5rem", borderRadius: "4px", background: "rgb(var(--surface2))", color: "rgb(var(--text))", border: "1px solid rgb(var(--border))" }}>
                    {job.type}
                  </span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: ".25rem", fontSize: ".75rem", color: "rgb(var(--muted))" }}>
                    <MapPin size={12} /> {job.location}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: ".25rem", fontSize: ".75rem", color: "rgb(var(--muted))" }}>
                    <Calendar size={12} /> {job.period}
                  </span>
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: ".5rem", paddingLeft: "1.25rem", listStyleType: "disc" }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: ".875rem", color: "rgb(var(--muted))", lineHeight: 1.5 }}>
                      <span style={{ color: "rgb(var(--text))" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
