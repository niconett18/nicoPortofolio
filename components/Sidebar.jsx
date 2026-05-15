'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SiGithub, SiInstagram } from 'react-icons/si';
import './Sidebar.css';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [mobileOpen]);

  return (
    <>
      <button
        type="button"
        className="sidebar-mobile-trigger"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={20} strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.button
            type="button"
            className="sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={`sidebar ${mobileOpen ? 'sidebar--open' : ''}`}
        initial={false}
        animate={{ x: mobileOpen ? 0 : undefined }}
      >
        <motion.div
          className="sidebar-inner"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="sidebar-brand" layout>
            <Link href="/" onClick={() => setMobileOpen(false)} className="sidebar-logo">
              <span className="sidebar-logo-mark">NE</span>
              <span className="sidebar-logo-text">
                Nicholas
                <em>Edmund</em>
              </span>
            </Link>
            <button
              type="button"
              className="sidebar-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </motion.div>

          <nav className="sidebar-nav" onMouseLeave={() => setHovered(null)}>
            {NAV.map((item, i) => {
              const active = isActive(item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    onMouseEnter={() => setHovered(item.href)}
                    className={`sidebar-link ${active ? 'sidebar-link--active' : ''}`}
                  >
                    <span className="sidebar-link-label">{item.label}</span>
                    {active && (
                      <motion.span
                        layoutId="sidebar-active"
                        className="sidebar-link-glow"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {hovered === item.href && !active && (
                      <motion.span
                        layoutId="sidebar-hover"
                        className="sidebar-link-hover-bar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <motion.div
            className="sidebar-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <p className="sidebar-status">
              <span className="sidebar-status-dot" />
              Available for work
            </p>
            <motion.div className="sidebar-socials">
              <a
                href="https://github.com/niconett18"
                target="_blank"
                rel="noopener noreferrer"
                className="sidebar-social"
              >
                <SiGithub size={16} />
              </a>
              <a
                href="https://www.instagram.com/niconet18/"
                target="_blank"
                rel="noopener noreferrer"
                className="sidebar-social"
              >
                <SiInstagram size={16} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="sidebar-rail">
          <motion.div
            className="sidebar-rail-fill"
            animate={{
              height: `${((NAV.findIndex((n) => isActive(n.href)) + 1) / NAV.length) * 100}%`
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>
      </motion.aside>
    </>
  );
}
