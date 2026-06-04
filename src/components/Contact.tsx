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
          initial={{ opacity: 0, y: 12 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.3 }} 
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Open to full-time roles, internships, and research collaborations in AI/ML. Let's connect.
          </p>
        </motion.div>

        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          {/* Centered Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.3 }}
          >
            <div className="card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", padding: "2rem" }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.0625rem", marginBottom: ".5rem" }}>
                Contact Details
              </h3>
              
              {[
                { icon: Mail,         text: personalInfo.email,              href: `mailto:${personalInfo.email}?subject=Inquiry%20-%20AI%2FML%20Portfolio` },
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

              <div style={{ borderTop: "1px solid rgb(var(--border))", paddingTop: "1.25rem", marginTop: "1rem" }}>
                <p style={{ fontSize: ".8125rem", fontWeight: 600, color: "rgb(var(--text))", marginBottom: ".5rem" }}>Current Focus</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".375rem" }}>
                  {["ML Engineer", "Data Scientist", "AI Developer"].map(r => (
                    <span key={r} className="pill" style={{ fontSize: ".7rem", padding: ".15rem .5rem" }}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
