"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              className="flex items-center gap-2 group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg shadow-brand-500/30">
                <span className="font-display font-bold text-white text-sm">RT</span>
              </div>
              <span className="font-display font-semibold text-lg hidden sm:block">
                Rohit<span className="gradient-text"> Thakur</span>
              </span>
            </motion.button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeSection === link.href
                      ? "text-brand-400 bg-brand-500/10"
                      : "text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-400"
                      layoutId="nav-dot"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 flex items-center justify-center rounded-xl text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                  id="theme-toggle"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>
              )}

              {/* Resume Button */}
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 hover:bg-brand-500/20 transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="nav-resume-download"
              >
                <Download size={14} />
                Resume
              </motion.a>

              {/* Mobile Menu Toggle */}
              <motion.button
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-[rgb(var(--muted))] hover:bg-white/10"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden glass border-t border-[rgb(var(--border))]/50`}
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-brand-400 bg-brand-500/10"
                    : "text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-brand-400 hover:bg-brand-500/10 transition-colors"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
