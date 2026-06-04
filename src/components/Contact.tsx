"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate contact form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 12 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.3 }} 
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Open to full-time roles, internships, and research collaborations in AI/ML. Let's connect.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }} className="about-grid">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", height: "100%" }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: ".5rem" }}>
                Contact Details
              </h3>
              
              {[
                { icon: Mail,         text: personalInfo.email,              href: `mailto:${personalInfo.email}` },
                { icon: Phone,        text: personalInfo.phone,              href: `tel:${personalInfo.phone}` },
                { icon: MapPin,       text: "Pune, Maharashtra, India",      href: null },
                { icon: GithubIcon,   text: "github.com/rohitthakur264",     href: personalInfo.github },
                { icon: LinkedInIcon, text: "linkedin.com/in/rohit-thakur-ml", href: personalInfo.linkedin },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} style={{ display: "flex", gap: ".75rem", alignItems: "center" }}>
                  <Icon size={14} style={{ color: "rgb(var(--accent))", flexShrink: 0 }} />
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".875rem", color: "rgb(var(--muted))", textDecoration: "none", transition: "color .15s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgb(var(--text))"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgb(var(--muted))"}
                    >{text}</a>
                  ) : (
                    <span style={{ fontSize: ".875rem", color: "rgb(var(--muted))" }}>{text}</span>
                  )}
                </div>
              ))}

              <div style={{ borderTop: "1px solid rgb(var(--border))", paddingTop: "1.25rem", marginTop: "auto" }}>
                <p style={{ fontSize: ".8125rem", fontWeight: 600, color: "rgb(var(--text))", marginBottom: ".5rem" }}>Current Focus</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".375rem" }}>
                  {["ML Engineer", "Data Scientist", "AI Developer"].map(r => (
                    <span key={r} className="pill" style={{ fontSize: ".7rem", padding: ".15rem .5rem" }}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <div className="card">
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1.25rem" }}>
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label htmlFor="name" style={{ display: "block", fontSize: ".75rem", fontWeight: 600, color: "rgb(var(--muted))", textTransform: "uppercase", marginBottom: ".375rem" }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: ".55rem .75rem", fontSize: ".875rem", background: "transparent", border: "1px solid rgb(var(--border))", borderRadius: "6px", color: "rgb(var(--text))", outline: "none", transition: "border-color .15s" }}
                    onFocus={e => e.currentTarget.style.borderColor = "rgb(var(--accent))"}
                    onBlur={e => e.currentTarget.style.borderColor = "rgb(var(--border))"}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: "block", fontSize: ".75rem", fontWeight: 600, color: "rgb(var(--muted))", textTransform: "uppercase", marginBottom: ".375rem" }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: "100%", padding: ".55rem .75rem", fontSize: ".875rem", background: "transparent", border: "1px solid rgb(var(--border))", borderRadius: "6px", color: "rgb(var(--text))", outline: "none", transition: "border-color .15s" }}
                    onFocus={e => e.currentTarget.style.borderColor = "rgb(var(--accent))"}
                    onBlur={e => e.currentTarget.style.borderColor = "rgb(var(--border))"}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: "block", fontSize: ".75rem", fontWeight: 600, color: "rgb(var(--muted))", textTransform: "uppercase", marginBottom: ".375rem" }}>Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: "100%", padding: ".55rem .75rem", fontSize: ".875rem", background: "transparent", border: "1px solid rgb(var(--border))", borderRadius: "6px", color: "rgb(var(--text))", outline: "none", resize: "none", transition: "border-color .15s" }}
                    onFocus={e => e.currentTarget.style.borderColor = "rgb(var(--accent))"}
                    onBlur={e => e.currentTarget.style.borderColor = "rgb(var(--border))"}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: "center", marginTop: ".25rem" }} disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
