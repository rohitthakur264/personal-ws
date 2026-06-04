"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { MapPin, Calendar, CheckCircle2, Briefcase } from "lucide-react";

const roleColors: Record<string, { dot: string; bar: string; badge: string }> = {
  "Artificial Intelligence Intern": {
    dot: "linear-gradient(135deg, #7c3aed, #6056f5)",
    bar: "linear-gradient(90deg, #7c3aed, #6056f5)",
    badge: "rgba(124,58,237,0.12)",
  },
  "Technology Job Simulation Intern": {
    dot: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
    bar: "linear-gradient(90deg, #0ea5e9, #06b6d4)",
    badge: "rgba(14,165,233,0.12)",
  },
  "Event Team Member & AI/ML Mentor": {
    dot: "linear-gradient(135deg, #10b981, #14b8a6)",
    bar: "linear-gradient(90deg, #10b981, #14b8a6)",
    badge: "rgba(16,185,129,0.12)",
  },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <Briefcase size={14} />
            Experience
          </span>
          <h2 className="section-title font-display">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real-world experience building AI systems across defense, consulting, and academia.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experience.map((exp, idx) => {
            const colors = roleColors[exp.role] || {
              dot: "linear-gradient(135deg, #6056f5, #7c3aed)",
              bar: "linear-gradient(90deg, #6056f5, #7c3aed)",
              badge: "rgba(96,86,245,0.12)",
            };

            return (
              <motion.div
                key={idx}
                className="relative flex gap-6 pb-10 last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                {/* Left: timeline column */}
                <div className="flex flex-col items-center flex-shrink-0 w-10">
                  {/* Numbered dot */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0 shadow-lg relative z-10"
                    style={{ background: colors.dot }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  {/* Vertical connector */}
                  {idx < experience.length - 1 && (
                    <div
                      className="flex-1 w-px mt-2"
                      style={{ background: "linear-gradient(to bottom, rgba(96,86,245,0.3), transparent)", minHeight: "3rem" }}
                    />
                  )}
                </div>

                {/* Right: card */}
                <div
                  className="flex-1 card mb-2"
                  style={{ marginTop: "0.35rem" }}
                >
                  {/* Top accent bar */}
                  <div
                    className="h-0.5 rounded-full mb-4 -mt-2"
                    style={{ background: colors.bar, opacity: 0.7 }}
                  />

                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-lg leading-tight mb-1">
                        {exp.role}
                      </h3>
                      <p
                        className="font-semibold text-sm"
                        style={{ background: colors.bar, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                      >
                        {exp.company}
                      </p>
                    </div>

                    {/* Type badge */}
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 flex items-center gap-1.5"
                      style={{
                        background: colors.badge,
                        color: "#7c7cfc",
                        border: "1px solid rgba(96,86,245,0.2)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: colors.dot }}
                      />
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta: location + date */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm" style={{ color: "rgb(var(--muted))" }}>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} style={{ color: "#7c7cfc" }} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} style={{ color: "#7c7cfc" }} />
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm leading-relaxed"
                        style={{ color: "rgb(var(--muted))" }}
                      >
                        <CheckCircle2
                          size={15}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: "#10b981" }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
