"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "RAG-Powered PDF Q&A Chatbot",
    description: "End-to-end Retrieval-Augmented Generation pipeline that ingests PDFs, embeds content into FAISS vector store, and answers queries using HuggingFace LLMs. Tracked with MLflow, containerized with Docker.",
    tech: ["LangChain", "FAISS", "HuggingFace", "Streamlit", "MLflow", "Docker"],
    github: "https://github.com/rohitthakur264",
    color: "#6366f1",
  },
  {
    title: "Multimodal Hate Speech Detection & Audio Censoring",
    description: "Multilingual (Hindi & English) hate speech detection using a fine-tuned XLM-RoBERTa on 15,000 synthetic samples. Includes real-time audio censoring pipeline deployed as a Gradio web app.",
    tech: ["PyTorch", "XLM-RoBERTa", "Gradio", "Transformers", "Librosa"],
    github: "https://github.com/rohitthakur264",
    color: "#8b5cf6",
  },
  {
    title: "CNN-Based Diabetic Retinopathy Detection (XAI)",
    description: "CNN classifier achieving 91% test accuracy across 5 severity grades on 3,000+ retinal fundus images. Integrated Grad-CAM for explainability and deployed via Flask REST API.",
    tech: ["PyTorch", "Grad-CAM", "Flask", "Scikit-learn", "OpenCV"],
    github: "https://github.com/rohitthakur264",
    color: "#0ea5e9",
  },
  {
    title: "Water Sustainability Dashboard 🏆 1st Place",
    description: "Won 1st place among 50+ teams at the World Water Day Hackathon. Built a complete data pipeline — ingestion, EDA, statistical modeling — and an interactive Plotly dashboard for water sustainability insights.",
    tech: ["Python", "Pandas", "Plotly", "Time-Series", "EDA"],
    github: "https://github.com/rohitthakur264",
    color: "#10b981",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5 }} style={{ marginBottom: "3rem" }}>
          <p className="section-label">Projects</p>
          <h2 className="section-heading">Featured Work</h2>
          <p className="section-sub">Selected projects showcasing applied ML, deep learning, and production-ready AI systems.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="projects-grid">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5, delay: i * .08 }}>
              <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Top accent */}
                <div style={{ height: 3, background: p.color, borderRadius: "4px 4px 0 0", margin: "-1.5rem -1.5rem 1.25rem", borderTopLeftRadius: ".875rem", borderTopRightRadius: ".875rem" }} />

                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "rgb(var(--text))", marginBottom: ".625rem", lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: ".875rem", color: "rgb(var(--muted))", lineHeight: 1.7, marginBottom: "1.25rem", flex: 1 }}>{p.description}</p>

                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".375rem", marginBottom: "1.25rem" }}>
                  {p.tech.map(t => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: ".625rem" }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: ".375rem", fontSize: ".8125rem", fontWeight: 500, color: "rgb(var(--muted))", textDecoration: "none", padding: ".375rem .75rem", border: "1px solid rgb(var(--border))", borderRadius: 6, transition: "color .2s, border-color .2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#6366f1"; (e.currentTarget as HTMLElement).style.borderColor = "#6366f1"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgb(var(--muted))"; (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--border))"; }}
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(min-width:768px){.projects-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
