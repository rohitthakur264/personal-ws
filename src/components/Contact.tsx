"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section" style={{ borderTop: "1px solid rgb(var(--border))" }}>
      <div className="container" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: .4 }} 
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Open to full-time roles, internships, and research collaborations in AI/ML. Let's connect.
          </p>
        </motion.div>

        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: .4 }}
            className="card"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "2rem" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: Mail,         text: personalInfo.email,              href: `mailto:${personalInfo.email}` },
                { icon: Phone,        text: personalInfo.phone,              href: `tel:${personalInfo.phone}` },
                { icon: MapPin,       text: "Pune, Maharashtra, India",      href: null },
                { icon: GithubIcon,   text: "github.com/rohitthakur264",     href: personalInfo.github },
                { icon: LinkedInIcon, text: "linkedin.com/in/rohit-thakur-ml", href: personalInfo.linkedin },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(99,102,241,.08)", border: "1px solid rgba(99,102,241,.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} style={{ color: "#6366f1" }} />
                  </div>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".9375rem", color: "rgb(var(--muted))", textDecoration: "none", transition: "color .2s", fontWeight: 500 }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#6366f1"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgb(var(--muted))"}
                    >{text}</a>
                  ) : (
                    <span style={{ fontSize: ".9375rem", color: "rgb(var(--muted))", fontWeight: 500 }}>{text}</span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgb(var(--border))", paddingTop: "1.5rem" }}>
              <p style={{ fontSize: ".875rem", fontWeight: 600, color: "rgb(var(--text))", marginBottom: ".75rem" }}>Currently seeking</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                {["ML Engineer", "Data Scientist", "AI Developer", "Data Analyst"].map(r => (
                  <span key={r} className="pill">{r}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
