"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";

const jobs = [
  {
    role: "Artificial Intelligence Intern",
    company: "Vishwakarma University × RTN, HQ Southern Command",
    location: "Pune, Maharashtra",
    period: "Jul 2024 – Dec 2024",
    type: "Research",
    color: "#6366f1",
    bullets: [
      "Developed a real-time drone surveillance pipeline using OpenCV & CNNs, achieving 25+ FPS on edge hardware.",
      "Engineered computer vision navigation models for obstacle detection, reducing manual intervention by ~40%.",
      "Delivered 3 proof-of-concept AI/ML models with defense stakeholders using benchmarking & iterative optimization.",
      "Integrated edge computing solutions for real-time inference on resource-constrained hardware.",
    ],
  },
  {
    role: "Technology Job Simulation Intern",
    company: "Deloitte – Forage Virtual Internship",
    location: "Remote",
    period: "Jun 2025",
    type: "Consulting",
    color: "#0ea5e9",
    bullets: [
      "Resolved 13+ defects in simulated client Python services, improving runtime by up to 20%.",
      "Produced technical documentation and data pipeline architecture aligned to Deloitte consulting standards.",
      "Practised agile delivery through mock sprints, code reviews, and stakeholder-style progress updates.",
    ],
  },
  {
    role: "Event Team Member & AI/ML Mentor",
    company: "Geek for Geek Student Chapter, Vishwakarma University",
    location: "Pune, Maharashtra",
    period: "Mar 2024 – Mar 2025",
    type: "Leadership",
    color: "#10b981",
    bullets: [
      "Organised AI/ML seminars, coding competitions, and workshops for 200+ students.",
      "Mentored junior students in machine learning fundamentals and competitive programming.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .4 }} style={{ marginBottom: "3rem" }}>
          <p className="section-label">Experience</p>
          <h2 className="section-heading">Professional Journey</h2>
          <p className="section-sub">Real-world AI/ML engineering across defense research, consulting, and academia.</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {jobs.map((job, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .4, delay: i * .08 }}>
              <div className="card" style={{ borderLeft: `3px solid ${job.color}` }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: ".75rem", marginBottom: ".75rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "rgb(var(--text))", marginBottom: ".25rem" }}>{job.role}</h3>
                    <p style={{ fontSize: ".875rem", fontWeight: 600, color: job.color }}>{job.company}</p>
                  </div>
                  <span style={{ padding: ".2rem .75rem", borderRadius: 9999, fontSize: ".75rem", fontWeight: 600, background: `${job.color}15`, color: job.color, border: `1px solid ${job.color}30`, whiteSpace: "nowrap" }}>{job.type}</span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginBottom: "1rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: ".375rem", fontSize: ".8125rem", color: "rgb(var(--muted))" }}>
                    <MapPin size={13} /> {job.location}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: ".375rem", fontSize: ".8125rem", color: "rgb(var(--muted))" }}>
                    <Calendar size={13} /> {job.period}
                  </span>
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: ".625rem", fontSize: ".875rem", color: "rgb(var(--muted))", lineHeight: 1.6 }}>
                      <CheckCircle2 size={14} style={{ color: "#10b981", flexShrink: 0, marginTop: ".2rem" }} />
                      <span>{b}</span>
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
