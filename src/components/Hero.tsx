"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        background: "rgb(var(--bg))",
        padding: "0 1.5rem",
        paddingTop: "6.5rem",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Photo (Right Column / Top on Mobile Stack) ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "center", order: 1 }}
            className="hero-photo"
          >
            <div
              style={{
                width: "min(240px, 60vw)",
                height: "min(240px, 60vw)",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid rgb(var(--border))",
                position: "relative",
                boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 8px -1px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Image
                src="/profile.png"
                alt="Rohit Thakur"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="240px"
              />
            </div>
          </motion.div>

          {/* ── Text (Left Column / Bottom on Mobile Stack) ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
            className="hero-text"
            style={{ order: 2 }}
          >
            {/* Role label */}
            <p
              style={{
                fontSize: ".8125rem",
                fontWeight: 600,
                color: "rgb(var(--accent))",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                marginBottom: ".75rem",
              }}
            >
              AI &amp; Machine Learning Engineer
            </p>

            {/* Name */}
            <h1
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "rgb(var(--text))",
                marginBottom: "1.25rem",
                letterSpacing: "-.02em",
              }}
            >
              Rohit Thakur
            </h1>

            {/* Intro Copy (First Person, authentic, results-focused) */}
            <p
              style={{
                fontSize: "1.0625rem",
                color: "rgb(var(--muted))",
                lineHeight: 1.65,
                maxWidth: 600,
                marginBottom: "2.25rem",
              }}
            >
              I am an AI and Machine Learning Engineer specializing in computer vision, retrieval-augmented generation (RAG) systems, and MLOps. Currently completing my final year in AI &amp; ML at Vishwakarma University in Pune, I focus on building robust, data-driven pipelines and deploying edge-optimized models to solve real-world problems.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects <ArrowRight size={14} />
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Download size={14} /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr auto !important; }
          .hero-text { order: 1 !important; }
          .hero-photo { order: 2 !important; justify-content: flex-end !important; }
        }
      `}</style>
    </section>
  );
}
