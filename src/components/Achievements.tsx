"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievements } from "@/lib/data";
import { Trophy, GitBranch, Users, Shield, Star } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Trophy, GitBranch, Users, Shield, Star,
};

const achievementColors: Record<string, string> = {
  "Trophy":    "linear-gradient(135deg, #f59e0b, #f97316)",
  "GitBranch": "linear-gradient(135deg, #7c3aed, #6056f5)",
  "Users":     "linear-gradient(135deg, #3b82f6, #06b6d4)",
  "Shield":    "linear-gradient(135deg, #10b981, #14b8a6)",
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="section-padding" style={{ background: "rgb(var(--surface))" }}>
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-tag">
            <Trophy size={14} />
            Achievements
          </span>
          <h2 className="section-title font-display">
            Milestones &{" "}
            <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon] || Star;
            const bg = achievementColors[item.icon] || "linear-gradient(135deg, #6056f5, #7c3aed)";
            return (
              <motion.div
                key={item.title}
                className="card text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.03, y: -6 }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4"
                  style={{ background: bg }}
                >
                  <Icon size={26} className="text-white" />
                </div>

                <h3 className="font-display font-semibold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
