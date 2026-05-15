'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { projects, type Project } from '../../../lib/projects';
import { fadeUp, staggerContainer, modalContentStagger } from '../../../lib/animations';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="page-stack">
      <section className="page-section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="page-header-block"
        >
          <motion.p variants={fadeUp} className="page-eyebrow">
            03 / Projects
          </motion.p>
          <motion.h1 variants={fadeUp} className="page-heading">
            Selected work
          </motion.h1>
          <motion.p variants={fadeUp} className="page-intro">
            A curated set of shipped products with measurable impact, prioritized for clarity and
            speed across devices.
          </motion.p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.button
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              onClick={() => setSelectedProject(project)}
              className="project-card"
            >
              <div className="project-card-image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="project-card-overlay" />
              </div>
              <div className="project-card-body">
                <p className="project-card-role">{project.role}</p>
                <div className="project-card-title-row">
                  <h3>{project.name}</h3>
                  <span className="project-card-icon">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <p className="project-card-desc">{project.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.96, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 24 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                variants={modalContentStagger}
                initial="hidden"
                animate="visible"
                className="project-modal-header"
              >
                <motion.h3 variants={fadeUp}>{selectedProject.name}</motion.h3>
                <motion.button
                  type="button"
                  variants={fadeUp}
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                >
                  <X size={20} />
                </motion.button>
              </motion.div>

              <motion.div
                variants={modalContentStagger}
                initial="hidden"
                animate="visible"
                className="project-modal-content"
              >
                <motion.div variants={fadeUp} className="project-modal-copy">
                  <h4>About the project</h4>
                  <p>{selectedProject.desc}</p>
                  <div className="project-modal-meta">
                    <span>Role</span>
                    <p>{selectedProject.role}</p>
                  </div>
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="page-btn page-btn--primary"
                  >
                    View live site
                    <ExternalLink size={16} />
                  </a>
                </motion.div>
                <motion.div variants={fadeUp} className="project-modal-image">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
