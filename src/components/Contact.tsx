"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import {
  Mail, Phone, MapPin,
  Send, CheckCircle2, MessageSquare,
} from "lucide-react";
import { LinkedInIcon, GithubIcon } from "@/components/icons";

const contactInfo = [
  { icon: Mail, label: "Email", value: "rohitthakur121212@gmail.com", href: `mailto:${personalInfo.email}`, id: "contact-email" },
  { icon: Phone, label: "Phone", value: "+91 8779441274", href: `tel:${personalInfo.phone}`, id: "contact-phone" },
  { icon: MapPin, label: "Location", value: "Pune, Maharashtra, India", href: null, id: "contact-location" },
  { icon: LinkedInIcon, label: "LinkedIn", value: "rohit-thakur-ml", href: personalInfo.linkedin, id: "contact-linkedin" },
  { icon: GithubIcon, label: "GitHub", value: "rohitthakur264", href: personalInfo.github, id: "contact-github" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: "rgb(var(--surface))" }}>
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <MessageSquare size={14} />
            Contact
          </span>
          <h2 className="section-title font-display">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Open to full-time roles, internships, freelance projects, and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-semibold text-xl mb-6">
              Get in Touch
            </h3>

            {contactInfo.map(({ icon: Icon, label, value, href, id }) => (
              <motion.div
                key={id}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl glass"
                style={{ border: "1px solid rgb(var(--border))" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(96,86,245,0.1)" }}
                >
                  <Icon size={18} style={{ color: "#7c7cfc" }} />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: "rgb(var(--muted))" }}>{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={id}
                      className="text-sm font-medium link-underline"
                      style={{ color: "rgb(var(--foreground))" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium">{value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability note */}
            <div
              className="p-4 rounded-xl"
              style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}
            >
              <div className="flex items-center gap-2 text-sm font-medium mb-1" style={{ color: "#10b981" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#10b981" }} />
                Available for Opportunities
              </div>
              <p className="text-xs" style={{ color: "rgb(var(--muted))" }}>
                Actively seeking ML Engineer / Data Scientist / AI Developer roles. Response within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }}
                >
                  <CheckCircle2 size={32} style={{ color: "#10b981" }} />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">Message Sent!</h3>
                <p className="text-sm" style={{ color: "rgb(var(--muted))" }}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium mb-1.5" style={{ color: "rgb(var(--muted))" }}>
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "rgb(var(--surface-2))",
                        border: "1px solid rgb(var(--border))",
                        color: "rgb(var(--foreground))",
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email-field" className="block text-xs font-medium mb-1.5" style={{ color: "rgb(var(--muted))" }}>
                      Email Address *
                    </label>
                    <input
                      id="contact-email-field"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "rgb(var(--surface-2))",
                        border: "1px solid rgb(var(--border))",
                        color: "rgb(var(--foreground))",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium mb-1.5" style={{ color: "rgb(var(--muted))" }}>
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Collaboration / Project"
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: "rgb(var(--surface-2))",
                      border: "1px solid rgb(var(--border))",
                      color: "rgb(var(--foreground))",
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium mb-1.5" style={{ color: "rgb(var(--muted))" }}>
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi Rohit, I'd like to discuss a ML Engineer opportunity at..."
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{
                      background: "rgb(var(--surface-2))",
                      border: "1px solid rgb(var(--border))",
                      color: "rgb(var(--foreground))",
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  id="contact-submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center"
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                >
                  {submitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 rounded-full"
                        style={{ border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white" }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
