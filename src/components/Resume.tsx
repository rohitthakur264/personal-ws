"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import { Download, FileText, Eye } from "lucide-react";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resume" className="section-padding">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="section-tag">
            <FileText size={14} />
            Resume
          </span>
          <h2 className="section-title font-display">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A comprehensive overview of my qualifications, experience, and achievements.
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card hover:border-brand-500/20 text-center py-12">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-xl shadow-brand-500/25 mx-auto mb-6">
              <FileText size={36} className="text-white" />
            </div>

            <h3 className="font-display font-bold text-2xl mb-2">
              Rohit Thakur — Resume
            </h3>
            <p className="text-[rgb(var(--muted))] mb-2">
              ML Engineer · Data Scientist · AI Developer
            </p>
            <p className="text-sm text-[rgb(var(--muted))] mb-8">
              B.Tech AI & ML · Vishwakarma University · CGPA 8.42
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href={personalInfo.resumeUrl}
                download
                id="resume-section-download"
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download PDF
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="resume-section-view"
                className="btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Eye size={16} />
                View Online
              </motion.a>
            </div>

            {/* Skills summary tags */}
            <div className="mt-8 pt-6 border-t border-[rgb(var(--border))]">
              <p className="text-xs text-[rgb(var(--muted))] mb-3">Key Competencies</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Python", "PyTorch", "LangChain", "RAG", "OpenCV", "MLflow", "Docker", "SQL"].map((skill) => (
                  <span key={skill} className="badge text-xs">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
