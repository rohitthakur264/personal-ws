"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "RAG-Powered PDF Q&A Chatbot",
    description: "Built an end-to-end Retrieval-Augmented Generation (RAG) pipeline that ingests documents, embeds text into a FAISS vector database, and queries HuggingFace LLMs. Integrated MLflow for runtime metrics tracking and containerized with Docker.",
    tech: ["LangChain", "FAISS", "HuggingFace", "Streamlit", "MLflow", "Docker"],
    github: "https://github.com/rohitthakur264/RAG",
    live: null,
  },
  {
    title: "Hate Speech Detection & Audio Censoring",
    description: "Engineered a multimodal multilingual classifier using a fine-tuned XLM-RoBERTa model trained on 15,000 synthetic samples. Developed a real-time audio analysis and bleeping pipeline using Librosa, deploying as a Gradio web application.",
    tech: ["PyTorch", "XLM-RoBERTa", "Gradio", "Transformers", "Librosa"],
    github: "https://github.com/rohitthakur264/Hate_speech",
    live: null,
  },
  {
    title: "Diabetic Retinopathy Classification (XAI)",
    description: "Developed a convolutional neural network (CNN) classifier that achieves 91% test accuracy across five severity grades using 3,000+ retinal fundus images. Integrated Grad-CAM for explainability and served via a Flask API.",
    tech: ["PyTorch", "Grad-CAM", "Flask", "Scikit-learn", "OpenCV"],
    github: "https://github.com/rohitthakur264",
    live: null,
  },
  {
    title: "Water Sustainability Dashboard 🏆 1st Place",
    description: "Won 1st place among 50+ teams at the World Water Day Hackathon. Built a complete streaming data ingestion pipeline, performed comprehensive EDA and statistical modeling, and deployed a live dashboard for water tracking.",
    tech: ["Python", "Pandas", "Plotly", "Time-Series", "Data Pipelines"],
    github: "https://github.com/rohitthakur264",
    live: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 12 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.3 }} 
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-heading">Featured Work</h2>
          <p className="section-sub">A selection of engineering projects focused on machine learning pipeline design, NLP, computer vision, and analytics.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="projects-grid">
          {projects.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 12 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ flex: 1 }}>
                  <h3 
                    style={{ 
                      fontFamily: "'Space Grotesk', sans-serif", 
                      fontWeight: 700, 
                      fontSize: "1.0625rem", 
                      color: "rgb(var(--text))", 
                      marginBottom: ".5rem", 
                      lineHeight: 1.3 
                    }}
                  >
                    {p.title}
                  </h3>
                  <p 
                    style={{ 
                      fontSize: ".875rem", 
                      color: "rgb(var(--muted))", 
                      lineHeight: 1.6 
                    }}
                  >
                    {p.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".375rem" }}>
                  {p.tech.map(t => (
                    <span key={t} className="pill" style={{ fontSize: ".7rem", padding: ".15rem .5rem" }}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: ".625rem", paddingTop: ".25rem" }}>
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: ".375rem", 
                      fontSize: ".75rem", 
                      padding: ".375rem .75rem",
                      borderRadius: "4px"
                    }}
                  >
                    <GithubIcon size={12} /> GitHub
                  </a>
                  {p.live && (
                    <a 
                      href={p.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ 
                        display: "inline-flex", 
                        alignItems: "center", 
                        gap: ".375rem", 
                        fontSize: ".75rem", 
                        padding: ".375rem .75rem",
                        borderRadius: "4px"
                      }}
                    >
                      <ExternalLink size={12} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
