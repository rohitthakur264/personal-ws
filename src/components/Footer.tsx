"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { LinkedInIcon, GithubIcon } from "@/components/icons";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--background))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                <span className="font-display font-bold text-white text-sm">RT</span>
              </div>
              <span className="font-display font-semibold text-lg">Rohit Thakur</span>
            </div>
            <p className="text-sm text-[rgb(var(--muted))] leading-relaxed max-w-xs">
              ML Engineer · Data Scientist · AI Developer. Passionate about building intelligent systems that create real-world impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-[rgb(var(--foreground))]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm text-[rgb(var(--muted))] hover:text-brand-400 transition-colors link-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-[rgb(var(--foreground))]">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {[
                { href: personalInfo.github, icon: GithubIcon, label: "GitHub", id: "footer-github" },
                { href: personalInfo.linkedin, icon: LinkedInIcon, label: "LinkedIn", id: "footer-linkedin" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", id: "footer-email" },
              ].map(({ href, icon: Icon, label, id }) => (
                <motion.a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={id}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl glass text-[rgb(var(--muted))] hover:text-brand-400 hover:border-brand-500/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-[rgb(var(--muted))]">
              {personalInfo.email}
            </p>
            <p className="text-xs text-[rgb(var(--muted))] mt-1">
              {personalInfo.location}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[rgb(var(--border))]">
          <p className="text-xs text-[rgb(var(--muted))] flex items-center gap-1">
            © {new Date().getFullYear()} Rohit Thakur. Built with{" "}
            <Heart size={11} className="text-rose-400 fill-rose-400" />
            using Next.js & Framer Motion.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            id="back-to-top"
            aria-label="Back to top"
            className="w-9 h-9 flex items-center justify-center rounded-xl glass text-[rgb(var(--muted))] hover:text-brand-400 hover:border-brand-500/30 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
