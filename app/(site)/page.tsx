'use client';

import { motion } from 'framer-motion';
import TiltedCard from '../../components/TiltedCard';
import { fadeUp, staggerContainer, lineReveal } from '../../lib/animations';

export default function HomePage() {
  return (
    <section className="page-section page-hero">
      <div className="page-grid page-hero-grid">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="page-hero-copy">
          <p className="page-eyebrow">Fullstack Developer</p>
          <div className="overflow-hidden mb-3">
            <motion.h1 variants={lineReveal} className="page-title page-title--primary">
              Nicholas
            </motion.h1>
          </div>
          <motion.div className="overflow-hidden mb-10">
            <motion.h1 variants={lineReveal} className="page-title page-title--muted">
              Edmund
            </motion.h1>
          </motion.div>
          <motion.p variants={fadeUp} className="page-lead">
            Crafting sharp, high-performance web applications with precision engineering and modern
            tooling.
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
          <TiltedCard
            imageSrc="/profile-card.jpg"
            altText="Nicholas Edmund"
            captionText="Nicholas Edmund · Fullstack Developer"
            containerHeight="420px"
            containerWidth="min(100%, 320px)"
            imageHeight="380px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.06}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
