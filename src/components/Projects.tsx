"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";
import { ExternalLink, Bot, ShieldAlert, Eye, Droplets, FolderKanban } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const iconMap: Record<string, React.ElementType> = {
  Bot, ShieldAlert, Eye, Droplets,
};

const ALL_TAGS = ["All", "Machine Learning", "Data Science", "Data Analytics", "AI"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="section-padding bg-[rgb(var(--surface))]">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <FolderKanban size={14} />
            Projects
          </span>
          <h2 className="section-title font-display">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            AI/ML systems built from research to production deployment.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {ALL_TAGS.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              id={`filter-${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === tag
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30"
                  : "glass text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] hover:border-brand-500/30"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => {
              const Icon = iconMap[project.icon] || Bot;
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="card hover:border-brand-500/30 group flex flex-col overflow-hidden"
                >
                  {/* Project Header / Banner */}
                  <div
                    className={`relative h-36 rounded-xl mb-5 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.1%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>
                    {/* Tags */}
                    <div className="absolute top-3 right-3 flex flex-wrap gap-1 justify-end">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-xs font-medium bg-black/30 text-white/90 backdrop-blur"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[rgb(var(--muted))] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgb(var(--surface-2))] text-[rgb(var(--muted))] border border-[rgb(var(--border))]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-6">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-xs text-[rgb(var(--muted))]">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0 mt-1.5" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="mt-auto flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`project-${project.id}-github`}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium glass border border-[rgb(var(--border))] hover:border-brand-500/40 hover:text-brand-400 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <GithubIcon size={14} />
                        GitHub
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`project-${project.id}-demo`}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 hover:bg-brand-500/20 transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
