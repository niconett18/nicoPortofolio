'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, lineReveal } from '../../lib/animations';

const ProfileTiltedCard = dynamic(() => import('../../components/ProfileTiltedCard'), {
  ssr: false,
  loading: () => <div className="profile-card-placeholder" aria-hidden="true" />
});

export default function HomePage() {
  return (
    <section className="page-section page-hero">
      <motion.div className="page-hero-grid">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="page-hero-copy">
          <motion.p variants={fadeUp} className="page-eyebrow">
            01 / Fullstack Developer
          </motion.p>
          <div className="overflow-hidden mb-1">
            <motion.h1 variants={lineReveal} className="page-title page-title--primary">
              Nicholas
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1 variants={lineReveal} className="page-title page-title--muted">
              Edmund.
            </motion.h1>
          </div>
          <motion.p variants={fadeUp} className="page-lead">
            Computer Engineering student at Universitas Indonesia, building sharp, high-performance web
            applications with precision engineering and modern tooling.
          </motion.p>
          <motion.div variants={fadeUp} className="page-hero-actions">
            <a href="/projects" className="page-btn page-btn--primary">
              View projects
            </a>
            <a href="/contact" className="page-btn page-btn--ghost">
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="page-hero-visual"
        >
          <ProfileTiltedCard />
        </motion.div>
      </motion.div>
    </section>
  );
}
