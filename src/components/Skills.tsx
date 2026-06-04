"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, skillBadges } from "@/lib/data";
import {
  Code2, Brain, Sparkles, BarChart3, Eye, Cloud, Cpu
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code2, Brain, Sparkles, BarChart3, Eye, Cloud, Cpu,
};

function ProgressBar({ level, color, delay }: { level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="h-2 rounded-full overflow-hidden" style={{ background: "rgb(var(--border))" }}>
      <motion.div
        className="h-full rounded-full relative overflow-hidden"
        style={{ background: `linear-gradient(90deg, ${color})` }}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="absolute inset-0 progress-shimmer" />
      </motion.div>
    </div>
  );
}

const categoryGradients: Record<string, { from: string; to: string; bar: string }> = {
  "Programming":           { from: "#7c3aed", to: "#6056f5", bar: "var(--tw-gradient-stops)" },
  "ML / Deep Learning":    { from: "#3b82f6", to: "#06b6d4", bar: "var(--tw-gradient-stops)" },
  "LLM / GenAI":           { from: "#ec4899", to: "#f43f5e", bar: "var(--tw-gradient-stops)" },
  "Data Science & Analytics": { from: "#10b981", to: "#14b8a6", bar: "var(--tw-gradient-stops)" },
  "Computer Vision":       { from: "#f97316", to: "#f59e0b", bar: "var(--tw-gradient-stops)" },
  "MLOps & Cloud":         { from: "#0ea5e9", to: "#3b82f6", bar: "var(--tw-gradient-stops)" },
};

const categoryBarColors: Record<string, string> = {
  "Programming":           "#7c3aed, #6056f5",
  "ML / Deep Learning":    "#3b82f6, #06b6d4",
  "LLM / GenAI":           "#ec4899, #f43f5e",
  "Data Science & Analytics": "#10b981, #14b8a6",
  "Computer Vision":       "#f97316, #f59e0b",
  "MLOps & Cloud":         "#0ea5e9, #3b82f6",
};

const categoryIconBg: Record<string, string> = {
  "Programming":           "linear-gradient(135deg, #7c3aed, #6056f5)",
  "ML / Deep Learning":    "linear-gradient(135deg, #3b82f6, #06b6d4)",
  "LLM / GenAI":           "linear-gradient(135deg, #ec4899, #f43f5e)",
  "Data Science & Analytics": "linear-gradient(135deg, #10b981, #14b8a6)",
  "Computer Vision":       "linear-gradient(135deg, #f97316, #f59e0b)",
  "MLOps & Cloud":         "linear-gradient(135deg, #0ea5e9, #3b82f6)",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <Cpu size={14} />
            Technical Skills
          </span>
          <h2 className="section-title font-display">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Technologies I use to build, train, and deploy intelligent systems.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((category, catIdx) => {
            const Icon = iconMap[category.icon] || Code2;
            const iconBg = categoryIconBg[category.category] || "linear-gradient(135deg, #6056f5, #7c3aed)";
            const barColor = categoryBarColors[category.category] || "#6056f5, #7c3aed";

            return (
              <motion.div
                key={category.category}
                className="card"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ background: iconBg }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-base">
                    {category.category}
                  </h3>
                </div>

                {/* Skill Items */}
                <div className="space-y-4">
                  {category.items.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-xs font-mono" style={{ color: "#7c7cfc" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <ProgressBar
                        level={skill.level}
                        color={barColor}
                        delay={catIdx * 0.1 + skillIdx * 0.08}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Badge Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="font-display font-semibold text-center text-lg mb-6" style={{ color: "rgb(var(--muted))" }}>
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillBadges.map((badge, i) => (
              <motion.span
                key={badge}
                className="badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.7 + i * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{ cursor: "default" }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
