"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection("#" + entry.target.id);
        });
      },
      { threshold: 0.4, rootMargin: "-80px 0px -40% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.button
              className="flex items-center gap-2.5 group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs tracking-wider"
                style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
              >
                RT
              </div>
              <span className="font-display font-semibold text-base hidden sm:block" style={{ color: "rgb(var(--foreground))" }}>
                Rohit <span style={{ color: "#4f46e5" }}>Thakur</span>
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    color: activeSection === link.href ? "#4f46e5" : "rgb(var(--muted))",
                    background: activeSection === link.href ? "rgba(79,70,229,0.08)" : "transparent",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggle}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
                style={{ color: "rgb(var(--muted))" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
                id="theme-toggle"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </motion.button>

              {/* Resume */}
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-resume"
                className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
                whileHover={{ scale: 1.02, opacity: 0.92 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={13} />
                Resume
              </motion.a>

              {/* Mobile Menu */}
              <motion.button
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg"
                style={{ color: "rgb(var(--muted))" }}
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <motion.div
          className="md:hidden overflow-hidden glass border-t"
          style={{ borderColor: "rgb(var(--border))" }}
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{ color: activeSection === link.href ? "#4f46e5" : "rgb(var(--muted))" }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white mt-2"
              style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
            >
              <Download size={13} /> View Resume
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
