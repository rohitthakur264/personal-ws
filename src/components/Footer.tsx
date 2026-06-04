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
    <footer style={{ borderTop: "1px solid rgb(var(--border))", padding: "2rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
        <div>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: ".9375rem", color: "rgb(var(--text))", marginBottom: ".25rem" }}>Rohit Thakur</p>
          <p style={{ fontSize: ".8125rem", color: "rgb(var(--muted))" }}>AI & Machine Learning Engineer · Pune, India</p>
        </div>
        <div style={{ display: "flex", gap: ".75rem", alignItems: "center" }}>
          {icons.map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgb(var(--border))", borderRadius: 8, color: "rgb(var(--muted))", transition: "color .2s, border-color .2s", textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#6366f1"; (e.currentTarget as HTMLElement).style.borderColor = "#6366f1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgb(var(--muted))"; (e.currentTarget as HTMLElement).style.borderColor = "rgb(var(--border))"; }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
        <p style={{ fontSize: ".75rem", color: "rgb(var(--muted))", width: "100%", textAlign: "center" }}>
          © {new Date().getFullYear()} Rohit Thakur. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
