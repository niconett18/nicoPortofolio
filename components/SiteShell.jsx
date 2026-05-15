'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import AuroraBackground from './AuroraBackground';
import Footer from './Footer';
import { pageEnter } from '../lib/animations';

export default function SiteShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="site-shell">
      <AuroraBackground />

      <Sidebar />

      <div className="site-main">
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            className="site-content"
            variants={pageEnter}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}
