"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || `Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(message)}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const input = {
    width: "100%", padding: ".65rem .875rem",
    background: "rgb(var(--surface2))",
    border: "1px solid rgb(var(--border))",
    borderRadius: ".5rem",
    color: "rgb(var(--text))",
    fontSize: ".9375rem",
    outline: "none",
    fontFamily: "Inter, system-ui, sans-serif",
  } as React.CSSProperties;

  return (
    <section id="contact" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5 }} style={{ marginBottom: "3rem" }}>
          <p className="section-label">Contact</p>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-sub">Open to full-time roles, internships, and research collaborations in AI/ML. Let's connect.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }} className="contact-grid">

          {/* Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { icon: Mail,    text: personalInfo.email,                         href: `mailto:${personalInfo.email}` },
                { icon: Phone,   text: personalInfo.phone,                         href: `tel:${personalInfo.phone}` },
                { icon: MapPin,  text: "Pune, Maharashtra, India",                 href: null },
                { icon: Github,  text: "github.com/rohitthakur264",                href: personalInfo.github },
                { icon: Linkedin,text: "linkedin.com/in/rohit-thakur-ml",          href: personalInfo.linkedin },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} style={{ display: "flex", gap: ".875rem", alignItems: "center" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(99,102,241,.08)", border: "1px solid rgba(99,102,241,.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={15} style={{ color: "#6366f1" }} />
                  </div>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".9rem", color: "rgb(var(--muted))", textDecoration: "none", transition: "color .2s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#6366f1"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgb(var(--muted))"}
                    >{text}</a>
                  ) : (
                    <span style={{ fontSize: ".9rem", color: "rgb(var(--muted))" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="card" style={{ padding: "1.25rem" }}>
              <p style={{ fontSize: ".875rem", fontWeight: 600, color: "rgb(var(--text))", marginBottom: ".5rem" }}>Currently seeking</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".375rem" }}>
                {["ML Engineer", "Data Scientist", "AI Developer", "Data Analyst"].map(r => (
                  <span key={r} className="pill">{r}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5, delay: .1 }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: ".8125rem", fontWeight: 500, color: "rgb(var(--muted))", marginBottom: ".375rem" }}>Name</label>
                  <input name="name" required placeholder="Your name" style={input} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: ".8125rem", fontWeight: 500, color: "rgb(var(--muted))", marginBottom: ".375rem" }}>Email</label>
                  <input name="email" type="email" required placeholder="your@email.com" style={input} />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: ".8125rem", fontWeight: 500, color: "rgb(var(--muted))", marginBottom: ".375rem" }}>Subject</label>
                <input name="subject" placeholder="Opportunity / Collaboration" style={input} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: ".8125rem", fontWeight: 500, color: "rgb(var(--muted))", marginBottom: ".375rem" }}>Message</label>
                <textarea name="message" required rows={5} placeholder="Tell me about the role or project..." style={{ ...input, resize: "vertical" }} />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                {sent ? "✓ Opening email client..." : <><Send size={15} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media(min-width:768px){.contact-grid{grid-template-columns:1fr 1.4fr !important;}}
        input::placeholder, textarea::placeholder { color: rgb(var(--muted)); opacity: .6; }
        input:focus, textarea:focus { border-color: rgba(99,102,241,.6) !important; box-shadow: 0 0 0 3px rgba(99,102,241,.1); }
      `}</style>
    </section>
  );
}
