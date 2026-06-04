"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const icons = [
  { href: personalInfo.github, Icon: GithubIcon, label: "GitHub" },
  { href: personalInfo.linkedin, Icon: LinkedInIcon, label: "LinkedIn" },
  { href: `mailto:${personalInfo.email}`, Icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgb(var(--border))", padding: "2.5rem 1.5rem", background: "rgb(var(--bg))" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
        <div>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: ".9375rem", color: "rgb(var(--text))", marginBottom: ".25rem" }}>Rohit Thakur</p>
          <p style={{ fontSize: ".8125rem", color: "rgb(var(--muted))" }}>AI &amp; Machine Learning Engineer · Pune, India</p>
        </div>
        <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
          {icons.map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgb(var(--border))", borderRadius: 6, color: "rgb(var(--muted))", transition: "color .15s, border-color .15s", textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgb(var(--text))"; (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--text))"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgb(var(--muted))"; (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--border))"; }}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
        <div style={{ width: "100%", borderTop: "1px solid rgb(var(--border))", paddingTop: "1.25rem", marginTop: ".75rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: ".5rem" }}>
          <p style={{ fontSize: ".75rem", color: "rgb(var(--muted))" }}>
            © {new Date().getFullYear()} Rohit Thakur. All rights reserved.
          </p>
          <p style={{ fontSize: ".75rem", color: "rgb(var(--muted))" }}>
            Crafted with Next.js &amp; CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
