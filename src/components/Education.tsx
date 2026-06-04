"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/lib/data";
import { GraduationCap, MapPin, Calendar, BookOpen, Star } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding bg-[rgb(var(--surface))]">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <GraduationCap size={14} />
            Education
          </span>
          <h2 className="section-title font-display">
            Academic <span className="gradient-text">Foundation</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg shadow-brand-500/30 z-10">
                <GraduationCap size={16} className="text-white" />
              </div>

              {/* Card */}
              <div className="card hover:border-brand-500/30 group">
                {/* Top gradient bar */}
                <div className="h-1 w-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500 mb-5 -mt-2 -mx-0 opacity-80" />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1">
                      {edu.degree}
                    </h3>
                    <p className="font-semibold text-brand-400 text-base">
                      {edu.institution}
                    </p>
                  </div>

                  {/* CGPA Badge */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-brand-500/10 to-purple-500/10 border border-brand-500/20">
                    <Star size={14} className="text-yellow-400" />
                    <div>
                      <div className="text-xs text-[rgb(var(--muted))]">CGPA</div>
                      <div className="font-display font-bold text-lg gradient-text">
                        {edu.cgpa}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-5 text-sm text-[rgb(var(--muted))]">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-brand-400" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-brand-400" />
                    {edu.period}
                  </span>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={14} className="text-[rgb(var(--muted))]" />
                    <span className="text-sm font-medium text-[rgb(var(--muted))]">
                      Relevant Coursework
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[rgb(var(--surface-2))] text-[rgb(var(--muted))] border border-[rgb(var(--border))] hover:border-brand-500/30 hover:text-brand-400 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
