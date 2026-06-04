"use client";

export default function ResumeClient() {
  return (
    <div style={{ minHeight: "100vh", background: "rgb(var(--background))", color: "rgb(var(--foreground))", fontFamily: "Inter, system-ui, sans-serif", padding: "2rem 1rem" }}>

      {/* Action bar */}
      <div className="no-print" style={{ maxWidth: "860px", margin: "0 auto 1.5rem", display: "flex", justifyContent: "flex-end", gap: "0.75rem" }}>
        <button
          onClick={() => window.history.back()}
          style={{ padding: "0.5rem 1.25rem", borderRadius: "0.5rem", border: "1px solid rgb(var(--border))", color: "rgb(var(--muted))", background: "rgb(var(--surface))", cursor: "pointer", fontSize: "0.875rem", fontWeight: 500 }}
        >
          ← Back
        </button>
        <button
          onClick={() => window.print()}
          style={{ padding: "0.5rem 1.25rem", borderRadius: "0.5rem", background: "#4f46e5", color: "white", border: "none", cursor: "pointer", fontSize: "0.875rem", fontWeight: 600 }}
        >
          🖨 Print / Save PDF
        </button>
      </div>

      {/* Resume paper */}
      <div id="resume-content" style={{ maxWidth: "860px", margin: "0 auto", background: "white", color: "#111", borderRadius: "0.75rem", padding: "3rem 3.5rem", boxShadow: "0 4px 30px rgba(0,0,0,0.10)", lineHeight: 1.55 }}>

        {/* Header */}
        <div style={{ textAlign: "center", borderBottom: "2px solid #111", paddingBottom: "1rem", marginBottom: "1.25rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "0.5rem", fontFamily: "'Space Grotesk', sans-serif" }}>ROHIT THAKUR</h1>
          <p style={{ fontSize: "0.82rem", color: "#444", lineHeight: 1.8 }}>
            (+91) 8779441274 &nbsp;|&nbsp; rohitthakur121212@gmail.com &nbsp;|&nbsp;
            <a href="https://linkedin.com/in/rohit-thakur-ml" style={{ color: "#4f46e5" }}>linkedin.com/in/rohit-thakur-ml</a> &nbsp;|&nbsp;
            <a href="https://github.com/rohitthakur264" style={{ color: "#4f46e5" }}>github.com/rohitthakur264</a> &nbsp;|&nbsp;
            Pune, Maharashtra, India
          </p>
        </div>

        <Section title="PROFESSIONAL SUMMARY">
          <p style={{ fontSize: "0.875rem", color: "#333" }}>
            Motivated AI &amp; Machine Learning undergraduate with hands-on experience in deep learning, computer vision,
            RAG-based LLM systems, and data-driven model development. Skilled in Python, PyTorch, TensorFlow, LangChain,
            and Scikit-learn. Seeking roles in Machine Learning Engineering, Data Science, or AI Engineering.
          </p>
        </Section>

        <Section title="EDUCATION">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <b>Vishwakarma University</b> — Pune, Maharashtra<br />
              <span style={{ fontSize: "0.85rem", color: "#333" }}>B.Tech in Artificial Intelligence &amp; Machine Learning</span><br />
              <span style={{ fontSize: "0.8rem", color: "#555" }}>ML, Deep Learning, Statistical Methods, DSA, CV, NLP, Database Systems</span>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "1rem" }}>
              <div style={{ fontSize: "0.82rem" }}>Aug 2023 – May 2027</div>
              <div style={{ fontWeight: 700, color: "#4f46e5" }}>CGPA: 8.42 / 10.0</div>
            </div>
          </div>
        </Section>

        <Section title="EXPERIENCE">
          <ExpItem role="Artificial Intelligence Intern" company="Vishwakarma University × RTN, HQ Southern Command" location="Pune" period="Jul 2024 – Dec 2024"
            bullets={["Developed real-time drone surveillance pipeline using OpenCV + CNN, achieving 25+ FPS on edge hardware.", "Engineered computer vision navigation models for obstacle detection, reducing manual intervention by ~40%.", "Delivered 3 proof-of-concept AI/ML models; applied model benchmarking and iterative optimization.", "Integrated edge computing solutions for real-time inference on resource-constrained hardware."]} />
          <ExpItem role="Technology Job Simulation Intern" company="Deloitte – Forage Virtual Internship" location="Remote" period="Jun 2025"
            bullets={["Resolved 13+ defects in simulated client Python services, improving runtime by up to 20%.", "Produced technical documentation, data pipeline notes, and issue logs to Deloitte consulting standards.", "Practised agile delivery through mock sprints, code reviews, and stakeholder-style updates."]} />
          <ExpItem role="Event Team Member & AI/ML Mentor" company="Geek for Geek Student Chapter, Vishwakarma University" location="Pune" period="Mar 2024 – Mar 2025"
            bullets={["Organised AI/ML seminars, coding competitions, and workshops for 200+ students.", "Mentored juniors in machine learning fundamentals, competitive programming, and software development."]} />
        </Section>

        <Section title="PROJECTS">
          <ProjItem title="RAG-Powered PDF Q&A Chatbot" tech="LangChain, FAISS, HuggingFace, Streamlit, MLflow, Docker"
            bullets={["Built end-to-end RAG pipeline with FAISS vector store for semantic Q&A using HuggingFace LLMs.", "MLflow for tracking; containerized with Docker for reproducible deployment."]} />
          <ProjItem title="Multimodal Hate Speech Detection & Audio Censoring" tech="PyTorch, XLM-RoBERTa, Gradio, Transformers, Librosa"
            bullets={["Multilingual (Hindi & English) system; fine-tuned XLM-RoBERTa on 15,000 synthetic balanced samples.", "End-to-end audio censoring pipeline deployed as Gradio web app with ablation studies."]} />
          <ProjItem title="CNN-Based Diabetic Retinopathy Detection (XAI)" tech="PyTorch, Grad-CAM, Flask, Scikit-learn"
            bullets={["91% test accuracy across 5 severity grades on 3,000+ retinal fundus images.", "Grad-CAM heatmaps + Flask REST API + LLM-generated diagnostic summaries."]} />
          <ProjItem title="World Water Day Hackathon — Water Sustainability Monitoring 🏆 1st Place" tech="Python, Pandas, Plotly"
            bullets={["1st place among 50+ teams — data pipeline: ingestion → EDA → statistical modeling → Plotly dashboard."]} />
        </Section>

        <Section title="TECHNICAL SKILLS">
          <table style={{ width: "100%", fontSize: "0.845rem", borderCollapse: "collapse" }}>
            <tbody>
              {[
                ["Programming", "Python, SQL, Java, C/C++, JavaScript"],
                ["ML / Deep Learning", "PyTorch, TensorFlow, Scikit-learn, CNNs, RNNs, Transformers, Grad-CAM"],
                ["LLM / GenAI", "LangChain, FAISS, HuggingFace, RAG Pipelines, Agentic AI, Prompt Engineering"],
                ["Data Science", "Pandas, NumPy, Matplotlib, Seaborn, EDA, Feature Engineering, A/B Testing"],
                ["Computer Vision", "OpenCV, Object Detection, Motion Tracking, Real-time Video Analytics"],
                ["MLOps & Cloud", "MLflow, Docker, Git, CI/CD, AWS, GCP, Linux, Flask"],
              ].map(([label, val]) => (
                <tr key={label}>
                  <td style={{ fontWeight: 600, width: "180px", paddingBottom: "0.25rem", verticalAlign: "top", paddingRight: "0.75rem", color: "#222" }}>{label}</td>
                  <td style={{ color: "#333", paddingBottom: "0.25rem" }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="CERTIFICATIONS">
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.855rem" }}>
            {["IBM RAG and Agentic AI Specialization — Coursera", "IBM Full Stack Software Developer Professional Certificate — Coursera, Oct 2025", ".NET Full Stack Developer Professional Certificate — Coursera", "Bring AI to Work Workshop — Google Workspace, Jun 2025", "HTML & CSS for Web Designers — Udemy, Jan 2025"].map(c => (
              <li key={c} style={{ marginBottom: "0.2rem", color: "#333" }}>• {c}</li>
            ))}
          </ul>
        </Section>

        <Section title="ACHIEVEMENTS & LEADERSHIP">
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.855rem" }}>
            {["🏆 1st Place — World Water Day Hackathon (WILO), outperforming 50+ teams with a data-driven water sustainability solution.", "Active open-source contributor on GitHub (github.com/rohitthakur264) — CV & ML projects.", "Led AI/ML mentorship & workshops for 200+ students as part of the Geek for Geek Student Chapter."].map(a => (
              <li key={a} style={{ marginBottom: "0.25rem", color: "#333" }}>• {a}</li>
            ))}
          </ul>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <h2 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#111", borderBottom: "1.5px solid #ddd", paddingBottom: "0.2rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>{title}</h2>
      {children}
    </div>
  );
}

function ExpItem({ role, company, location, period, bullets }: { role: string; company: string; location: string; period: string; bullets: string[] }) {
  return (
    <div style={{ marginBottom: "0.75rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.2rem" }}>
        <b style={{ fontSize: "0.875rem" }}>{role}</b>
        <span style={{ fontSize: "0.8rem", color: "#555" }}>{period}</span>
      </div>
      <div style={{ fontSize: "0.83rem", color: "#555", marginBottom: "0.25rem" }}>{company} — {location}</div>
      <ul style={{ margin: "0 0 0 1rem", padding: 0, fontSize: "0.845rem", color: "#333" }}>
        {bullets.map((b, i) => <li key={i} style={{ marginBottom: "0.15rem" }}>{b}</li>)}
      </ul>
    </div>
  );
}

function ProjItem({ title, tech, bullets }: { title: string; tech: string; bullets: string[] }) {
  return (
    <div style={{ marginBottom: "0.65rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.2rem" }}>
        <b style={{ fontSize: "0.855rem" }}>{title}</b>
        <span style={{ fontSize: "0.78rem", color: "#666", fontStyle: "italic" }}>{tech}</span>
      </div>
      <ul style={{ margin: "0.15rem 0 0 1rem", padding: 0, fontSize: "0.835rem", color: "#333" }}>
        {bullets.map((b, i) => <li key={i} style={{ marginBottom: "0.12rem" }}>{b}</li>)}
      </ul>
    </div>
  );
}
