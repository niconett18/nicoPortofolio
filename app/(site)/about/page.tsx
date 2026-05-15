'use client';

import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFramer,
  SiLinux
} from 'react-icons/si';
import { fadeUp, staggerContainer } from '../../../lib/animations';

const stack = [
  {
    label: 'Frontend',
    items: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'Vite', icon: SiVite },
      { name: 'TailwindCSS', icon: SiTailwindcss }
    ]
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Express', icon: SiExpress },
      { name: 'PostgreSQL', icon: SiPostgresql }
    ]
  },
  {
    label: 'Tooling',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Framer Motion', icon: SiFramer },
      { name: 'Linux', icon: SiLinux }
    ]
  }
];

export default function AboutPage() {
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
            02 / About
          </motion.p>
          <motion.h1 variants={fadeUp} className="page-heading">
            About me
          </motion.h1>
          <motion.p variants={fadeUp} className="page-intro">
            Engineering scalable systems at the intersection of robust backend architecture and
            striking frontend execution. Minimalist by design, maximalist in performance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="about-cards"
        >
          <motion.article variants={fadeUp} className="about-card">
            <h3>Focus</h3>
            <p>
              Next.js & React ecosystem, backend architecture, and high-performance user interfaces.
            </p>
          </motion.article>
          <motion.article variants={fadeUp} className="about-card">
            <h3>Education</h3>
            <p>Computer Engineering Student at Universitas Indonesia.</p>
          </motion.article>
        </motion.div>
      </section>

      <section className="page-section page-section--border">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} className="page-eyebrow">
            Stack
          </motion.p>
          <motion.h2 variants={fadeUp} className="page-subheading">
            Tools I work with
          </motion.h2>
          <div className="stack-grid">
            {stack.map((category) => (
              <motion.div key={category.label} variants={fadeUp} className="stack-column">
                <h3>{category.label}</h3>
                <ul>
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <item.icon />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
