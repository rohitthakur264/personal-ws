"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications } from "@/lib/data";
import { Award, Calendar, Building2, BadgeCheck } from "lucide-react";

const certColors: Record<string, string> = {
  "IBM RAG and Agentic AI Specialization": "linear-gradient(135deg, #3b82f6, #6366f1)",
  "IBM Full Stack Software Developer Professional Certificate": "linear-gradient(135deg, #7c3aed, #6056f5)",
  ".NET Full Stack Developer Professional Certificate": "linear-gradient(135deg, #ec4899, #f43f5e)",
  "Bring AI to Work Workshop": "linear-gradient(135deg, #10b981, #14b8a6)",
  "HTML & CSS for Web Designers": "linear-gradient(135deg, #f97316, #f59e0b)",
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section-padding">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <BadgeCheck size={14} />
            Certifications
          </span>
          <h2 className="section-title font-display">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Industry-recognised certifications validating expertise across AI, cloud, and full-stack development.
          </p>
        </motion.div>

        {/* Certs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => {
            const bg = certColors[cert.name] || "linear-gradient(135deg, #6056f5, #7c3aed)";
            return (
              <motion.div
                key={cert.name}
                className="card relative overflow-hidden"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: bg }} />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg mb-4"
                  style={{ background: bg }}
                >
                  <Award size={22} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-base leading-snug mb-2">
                  {cert.name}
                </h3>

                <div className="flex items-center gap-1.5 text-sm mb-1" style={{ color: "rgb(var(--muted))" }}>
                  <Building2 size={13} style={{ color: "#7c7cfc" }} className="flex-shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                <div className="flex items-center gap-1.5 text-sm" style={{ color: "rgb(var(--muted))" }}>
                  <Calendar size={13} style={{ color: "#7c7cfc" }} className="flex-shrink-0" />
                  <span>{cert.date}</span>
                </div>

                {/* Verified badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-medium" style={{ color: "#10b981" }}>
                  <BadgeCheck size={14} />
                  Verified
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
