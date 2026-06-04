"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-6 w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg z-10`}
              >
                <Briefcase size={15} className="text-white" />
              </div>

              {/* Vertical line (except last) */}
              {idx < experience.length - 1 && (
                <div className="absolute left-3.5 top-14 bottom-0 w-0.5 bg-gradient-to-b from-brand-500/40 to-transparent" />
              )}

              {/* Card */}
              <div className="card hover:border-brand-500/20 group">
                {/* Top accent */}
                <div className={`h-0.5 w-full rounded-full bg-gradient-to-r ${exp.color} mb-5 opacity-70`} />

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg mb-0.5">{exp.role}</h3>
                    <p className={`font-semibold text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 flex-shrink-0">
                    {exp.type}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-[rgb(var(--muted))]">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-brand-400" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-brand-400" />
                    {exp.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-[rgb(var(--muted))] leading-relaxed">
                      <CheckCircle2
                        size={15}
                        className="text-brand-400 flex-shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
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
