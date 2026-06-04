"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const groups = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "JavaScript", "Java", "C/C++"],
  },
  {
    category: "Data Science & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "Reinforcement Learning", "RAG Systems", "PyTorch", "TensorFlow", "Scikit-learn"],
  },
  {
    category: "Tools & Technologies",
    skills: ["MLOps", "MLflow", "Docker", "Git", "AWS", "Google Cloud", "Linux", "OpenCV", "LangChain", "Streamlit", "Gradio"],
  },
  {
    category: "Databases & Analytics",
    skills: ["SQL", "Power BI", "EDA", "Flask", "REST APIs"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 12 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.3 }} 
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-heading">Technical Expertise</h2>
          <p className="section-sub">A curated list of languages, libraries, and infrastructures I work with to build and deploy systems.</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {groups.map((g, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 12 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <h3 
                style={{ 
                  fontSize: ".75rem", 
                  fontWeight: 600, 
                  color: "rgb(var(--muted))", 
                  letterSpacing: ".08em", 
                  textTransform: "uppercase", 
                  marginBottom: ".75rem" 
                }}
              >
                {g.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                {g.skills.map(s => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
