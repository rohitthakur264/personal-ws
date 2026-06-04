"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "@/lib/data";
import { Lightbulb, Target, Zap, CheckCircle2, User } from "lucide-react";

const stats = [
  { label: "AI/ML Projects", value: "4+" },
  { label: "Internship Roles", value: "3" },
  { label: "Students Mentored", value: "200+" },
  { label: "Hackathon Wins", value: "1st 🏆" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding" style={{ background: "rgb(var(--surface))" }}>
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <User size={14} />
            About Me
          </span>
          <h2 className="section-title font-display">
            Turning Data into{" "}
            <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A passionate AI/ML engineer driven by curiosity and impact.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="card text-center"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "rgb(var(--muted))" }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Summary */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #6056f5, #7c3aed)" }}>
                  <User size={18} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg">Professional Summary</h3>
              </div>
              <p style={{ color: "rgb(var(--muted))" }} className="leading-relaxed">{about.summary}</p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}>
                  <Target size={18} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg">Career Objective</h3>
              </div>
              <p style={{ color: "rgb(var(--muted))" }} className="leading-relaxed">{about.objective}</p>
            </div>
          </motion.div>

          {/* Interests & Strengths */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)" }}>
                  <Lightbulb size={18} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg">Technical Interests</h3>
              </div>
              <ul className="space-y-2">
                {about.interests.map((interest) => (
                  <li key={interest} className="flex items-center gap-2" style={{ color: "rgb(var(--muted))" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)" }} />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #10b981, #14b8a6)" }}>
                  <Zap size={18} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg">Core Strengths</h3>
              </div>
              <ul className="space-y-2">
                {about.strengths.map((strength) => (
                  <li key={strength} className="flex items-center gap-2" style={{ color: "rgb(var(--muted))" }}>
                    <CheckCircle2 size={15} className="flex-shrink-0" style={{ color: "#10b981" }} />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
