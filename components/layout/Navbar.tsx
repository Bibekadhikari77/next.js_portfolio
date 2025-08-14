'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMoon, FiSun, FiMenu, FiX, FiHome, FiUser, FiLayers, FiGrid, FiMail } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

// Single-page anchor navigation
const navLinks = [
  { href: '#home', label: 'Home', icon: <FiHome className="text-base" /> },
  { href: '#about', label: 'About', icon: <FiUser className="text-base" /> },
  { href: '#skills', label: 'Skills', icon: <FiLayers className="text-base" /> },
  { href: '#projects', label: 'Projects', icon: <FiGrid className="text-base" /> },
  { href: '#contact', label: 'Contact', icon: <FiMail className="text-base" /> }
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition backdrop-blur border-b ${scrolled ? 'bg-white/80 dark:bg-neutral-900/70 border-neutral-200 dark:border-neutral-800' : 'bg-transparent border-transparent'}`}>
      <nav className="container-base flex items-center justify-between h-16">
  <Link href="/" className="font-bold text-lg gradient-text">Hey!!.dev</Link>
        <div className="hidden md:flex gap-9">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="flex items-center gap-2 text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {l.icon}
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button aria-label="Toggle Dark Mode" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button className="md:hidden p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800" onClick={() => setOpen(o => !o)} aria-label="Toggle Menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden overflow-hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="container-base py-4 flex flex-col gap-4">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center gap-2 py-2 border-b border-neutral-200 dark:border-neutral-800 last:border-none">
                  {l.icon}
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
