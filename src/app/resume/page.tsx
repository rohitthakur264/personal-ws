import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Rohit Thakur | ML Engineer · Data Scientist",
  description: "Resume of Rohit Thakur — Machine Learning Engineer, Data Scientist, AI Developer. B.Tech AI & ML, Vishwakarma University. CGPA 8.42.",
};

export default function ResumePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "rgb(var(--background))",
        color: "rgb(var(--foreground))",
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "2rem 1rem",
      }}
    >
      {/* Print button */}
      <div
        className="no-print"
        style={{
          maxWidth: "860px",
          margin: "0 auto 1.5rem",
          display: "flex",
          justifyContent: "flex-end",
          gap: "0.75rem",
        }}
      >
        <button
          onClick={() => window.history.back()}
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "9999px",
            border: "1px solid rgba(96,86,245,0.3)",
            color: "#7c7cfc",
            background: "transparent",
            cursor: "pointer",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          ← Back
        </button>
        <button
          onClick={() => window.print()}
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #5040e8, #7c3aed)",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "0.875rem",
            fontWeight: 600,
          }}
        >
          🖨 Print / Save PDF
        </button>
      </div>

      {/* Resume Content */}
      <div
        id="resume-content"
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          background: "white",
          color: "#111",
          borderRadius: "1rem",
          padding: "3rem 3.5rem",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          lineHeight: 1.55,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", borderBottom: "2px solid #111", paddingBottom: "1rem", marginBottom: "1.25rem" }}>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "0.5rem", fontFamily: "'Space Grotesk', sans-serif" }}>
            ROHIT THAKUR
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.8 }}>
            (+91) 8779441274 &nbsp;|&nbsp; rohitthakur121212@gmail.com &nbsp;|&nbsp;
            <a href="https://linkedin.com/in/rohit-thakur-ml" style={{ color: "#111" }}>linkedin.com/in/rohit-thakur-ml</a> &nbsp;|&nbsp;
            <a href="https://github.com/rohitthakur264" style={{ color: "#111" }}>github.com/rohitthakur264</a> &nbsp;|&nbsp;
            Pune, Maharashtra, India
          </p>
        </div>

        {/* Professional Summary */}
        <Section title="PROFESSIONAL SUMMARY">
          <p style={{ fontSize: "0.875rem", color: "#333" }}>
            Motivated AI &amp; Machine Learning undergraduate with hands-on experience in deep learning, computer vision,
            RAG-based LLM systems, and data-driven model development. Skilled in Python, PyTorch, TensorFlow, LangChain,
            and Scikit-learn, with a strong foundation in statistical analysis, data preprocessing, and model deployment.
            Passionate about applying ML and data science techniques to solve real-world problems. Seeking roles in
            Machine Learning Engineering, Data Science, or AI Engineering.
          </p>
        </Section>

        {/* Education */}
        <Section title="EDUCATION">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <b>Vishwakarma University</b> — Pune, Maharashtra
              <br />
              <span style={{ fontSize: "0.85rem", color: "#333" }}>
                Bachelor of Technology in Artificial Intelligence &amp; Machine Learning
              </span>
              <br />
              <span style={{ fontSize: "0.82rem", color: "#555" }}>
                Relevant Coursework: Machine Learning, Deep Learning, Statistical Methods, Data Structures &amp; Algorithms, Database Systems, Computer Vision, Natural Language Processing
              </span>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "1rem" }}>
              <div style={{ fontSize: "0.85rem" }}>Aug 2023 – May 2027</div>
              <div style={{ fontWeight: 700, color: "#5040e8" }}>CGPA: 8.42 / 10.0</div>
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section title="EXPERIENCE">
          <ExpItem
            role="Artificial Intelligence Intern"
            company="Vishwakarma University (in collaboration with RTN, HQ Southern Command)"
            location="Pune, Maharashtra"
            period="Jul 2024 – Dec 2024"
            bullets={[
              "Developed a real-time drone surveillance pipeline using OpenCV and CNN-based object detection, achieving 25+ FPS on edge hardware.",
              "Engineered and evaluated computer vision navigation models for obstacle detection and path following, reducing manual intervention during test flights by ~40%.",
              "Delivered 3 proof-of-concept AI/ML models in collaboration with defense stakeholders, applying model benchmarking and iterative optimization workflows.",
              "Integrated edge computing solutions for real-time inference on resource-constrained hardware, optimizing model size and latency trade-offs.",
            ]}
          />
          <ExpItem
            role="Technology Job Simulation Intern"
            company="Deloitte – Forage Virtual Internship"
            location="Remote"
            period="Jun 2025"
            bullets={[
              "Resolved 13+ defects in simulated client Python services, improving script runtime by up to 20% through profiling and optimization.",
              "Produced technical documentation, data pipeline architecture notes, and issue logs aligned with Deloitte consulting standards.",
              "Practised agile delivery through mock sprints, code reviews, and stakeholder-style progress updates.",
            ]}
          />
          <ExpItem
            role="Event Team Member & AI/ML Mentor"
            company="Geek for Geek Student Chapter, Vishwakarma University"
            location="Pune, Maharashtra"
            period="Mar 2024 – Mar 2025"
            bullets={[
              "Organised and coordinated technical workshops, coding competitions, and AI/ML seminars for 200+ students.",
              "Mentored junior students in machine learning fundamentals, competitive programming, and software development.",
            ]}
          />
        </Section>

        {/* Projects */}
        <Section title="PROJECTS">
          <ProjItem
            title="RAG-Powered PDF Q&A Chatbot"
            tech="LangChain, FAISS, HuggingFace, Streamlit, MLflow, Docker"
            bullets={[
              "Built an end-to-end RAG pipeline that ingests PDFs, chunks and embeds content into a FAISS vector store, enabling semantic Q&A using HuggingFace LLMs.",
              "Integrated MLflow for tracking retrieval metrics, model configurations, and query performance. Containerized with Docker for reproducible deployment.",
            ]}
          />
          <ProjItem
            title="Multimodal Hate Speech Detection & Audio Censoring"
            tech="PyTorch, XLM-RoBERTa, Gradio, Transformers, Librosa"
            bullets={[
              "Built a multilingual (Hindi & English) hate speech detection system using a custom multi-task transformer fine-tuned on XLM-RoBERTa; engineered a synthetic balanced dataset of 15,000 samples.",
              "Implemented end-to-end audio censoring pipeline; deployed as a full Gradio web app with ablation studies and bias analysis.",
            ]}
          />
          <ProjItem
            title="CNN-Based Diabetic Retinopathy Detection with Explainable AI"
            tech="PyTorch, Grad-CAM, Flask, Scikit-learn"
            bullets={[
              "Designed and trained a CNN-based classifier on 3,000+ retinal fundus images achieving 91% test accuracy across 5 severity grades.",
              "Applied Grad-CAM for clinically-relevant heatmaps; deployed via Flask REST API with LLM-generated diagnostic summaries.",
            ]}
          />
          <ProjItem
            title="World Water Day Hackathon — Water Sustainability Monitoring 🏆 1st Place"
            tech="Python, Pandas, Plotly, Time-Series Analysis"
            bullets={[
              "1st place (50+ competing teams) — Built end-to-end data pipeline: ingestion → EDA → statistical modeling → interactive Plotly dashboard for actionable water insights.",
            ]}
          />
        </Section>

        {/* Technical Skills */}
        <Section title="TECHNICAL SKILLS">
          <table style={{ width: "100%", fontSize: "0.855rem", borderCollapse: "collapse" }}>
            <tbody>
              {[
                ["Programming Languages", "Python, SQL, Java, C/C++, JavaScript"],
                ["ML / Deep Learning", "PyTorch, TensorFlow, Scikit-learn, CNNs, RNNs, Transformers, XAI (Grad-CAM)"],
                ["LLM / GenAI", "LangChain, FAISS, HuggingFace, RAG Pipelines, Agentic AI, Prompt Engineering, XLM-RoBERTa"],
                ["Data Science & Analytics", "Pandas, NumPy, Matplotlib, Seaborn, SciPy, EDA, Feature Engineering, Statistical Modeling, A/B Testing"],
                ["Computer Vision", "OpenCV, Object Detection, Motion Tracking, Image Preprocessing, Real-time Video Analytics"],
                ["MLOps & Cloud", "MLflow, Docker, Git, CI/CD, AWS, Google Cloud Platform, Linux, Flask"],
                ["Databases & Tools", "SQL, Jupyter Notebook, Excel (Advanced), REST APIs"],
              ].map(([label, val]) => (
                <tr key={label}>
                  <td style={{ fontWeight: 600, width: "220px", paddingBottom: "0.3rem", verticalAlign: "top", paddingRight: "0.75rem", color: "#222" }}>{label}</td>
                  <td style={{ color: "#333", paddingBottom: "0.3rem" }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* Certifications */}
        <Section title="CERTIFICATIONS">
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem" }}>
            {[
              "IBM RAG and Agentic AI Specialization — Coursera",
              "IBM Full Stack Software Developer Professional Certificate — Coursera, Oct 2025",
              ".NET Full Stack Developer Professional Certificate — Coursera",
              "Bring AI to Work Workshop — Google Workspace, Jun 2025",
              "HTML & CSS for Web Designers — Udemy, Jan 2025",
            ].map((c) => (
              <li key={c} style={{ marginBottom: "0.25rem", color: "#333" }}>• {c}</li>
            ))}
          </ul>
        </Section>

        {/* Achievements */}
        <Section title="ACHIEVEMENTS & LEADERSHIP">
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem" }}>
            {[
              "Hackathon Winner: 1st place at World Water Day Hackathon (WILO) — data-driven water sustainability solution, outperforming 50+ teams.",
              "Active contributor to open-source computer vision and ML projects on GitHub (github.com/rohitthakur264).",
              "Led AI/ML mentorship sessions and workshops for 200+ students as part of the Geek for Geek Student Chapter.",
            ].map((a) => (
              <li key={a} style={{ marginBottom: "0.3rem", color: "#333" }}>• {a}</li>
            ))}
          </ul>
        </Section>
      </div>
  );
}

// ── Sub-components ────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <h2 style={{
        fontSize: "0.8rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        color: "#111",
        borderBottom: "1.5px solid #ddd",
        paddingBottom: "0.2rem",
        marginBottom: "0.6rem",
        textTransform: "uppercase",
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function ExpItem({ role, company, location, period, bullets }: {
  role: string; company: string; location: string; period: string; bullets: string[];
}) {
  return (
    <div style={{ marginBottom: "0.85rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem" }}>
        <b style={{ fontSize: "0.9rem" }}>{role}</b>
        <span style={{ fontSize: "0.82rem", color: "#444" }}>{period}</span>
      </div>
      <div style={{ fontSize: "0.855rem", color: "#555", marginBottom: "0.3rem" }}>{company} — {location}</div>
      <ul style={{ margin: "0 0 0 1.1rem", padding: 0, fontSize: "0.855rem", color: "#333" }}>
        {bullets.map((b, i) => <li key={i} style={{ marginBottom: "0.2rem" }}>{b}</li>)}
      </ul>
    </div>
  );
}

function ProjItem({ title, tech, bullets }: { title: string; tech: string; bullets: string[] }) {
  return (
    <div style={{ marginBottom: "0.75rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem" }}>
        <b style={{ fontSize: "0.875rem" }}>{title}</b>
        <span style={{ fontSize: "0.8rem", color: "#666", fontStyle: "italic" }}>{tech}</span>
      </div>
      <ul style={{ margin: "0.2rem 0 0 1.1rem", padding: 0, fontSize: "0.845rem", color: "#333" }}>
        {bullets.map((b, i) => <li key={i} style={{ marginBottom: "0.15rem" }}>{b}</li>)}
      </ul>
    </div>
  );
}
