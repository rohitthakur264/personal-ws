"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const groups = [
  {
    category: "Machine Learning & AI",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning", "XAI / Grad-CAM"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "LangChain", "HuggingFace", "Gradio", "Streamlit"],
  },
  {
    category: "Data Science & Analytics",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "Power BI", "EDA", "A/B Testing"],
  },
  {
    category: "MLOps & Cloud",
    skills: ["MLflow", "Docker", "Git", "AWS", "Google Cloud", "Flask", "REST APIs", "CI/CD", "Linux"],
  },
  {
    category: "Languages",
    skills: ["Python", "SQL", "JavaScript", "Java", "C/C++"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5 }} style={{ marginBottom: "3rem" }}>
          <p className="section-label">Skills</p>
          <h2 className="section-heading">Technical Expertise</h2>
          <p className="section-sub">Core technologies and tools I use to build, train, and deploy AI systems.</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {groups.map((g, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .45, delay: i * .08 }}>
              <p style={{ fontSize: ".8125rem", fontWeight: 600, color: "rgb(var(--muted))", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: ".875rem" }}>{g.category}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                {g.skills.map(s => <span key={s} className="pill">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
