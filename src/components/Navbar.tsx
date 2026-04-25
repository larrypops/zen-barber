'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram, MessageSquare } from 'lucide-react';

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Galerie', path: '/galerie' },
  { name: "L'Histoire", path: '/a-propos' },
  { name: 'Réservation', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`glass flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-500 md:rounded-[2rem] md:px-10 ${
            scrolled ? 'shadow-lg shadow-black/5' : ''
          }`}
        >
          <Link href="/" className="group flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Zen Barber logo"
              className="h-12 w-12 rounded-full border border-fg/10 bg-fg/5 object-cover transition-transform group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl font-black italic uppercase leading-none tracking-tighter">
                ZEN <span className="text-accent">BARBER</span>
              </span>
              <span className="mt-1 text-[8px] font-black uppercase leading-none tracking-[0.4em] opacity-40">
                Grooming House
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-accent ${
                    isActive ? 'text-fg' : 'text-fg/40'
                  }`}
                >
                  {link.name}
                  {isActive && <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href="https://instagram.com/zenbarber"
                target="_blank"
                rel="noreferrer"
                className="text-fg/40 transition-colors hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/237680846768"
                target="_blank"
                rel="noreferrer"
                className="text-fg/40 transition-colors hover:text-accent"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
            <Link
              href="/contact"
              className="hidden rounded-full bg-fg px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-bg transition-all hover:scale-105 hover:bg-accent md:block"
            >
              Réserver
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-fg md:hidden" aria-label="Ouvrir le menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 flex flex-col justify-center p-6 md:hidden"
          >
            <div className="glass flex flex-col items-center gap-8 rounded-[2rem] p-10 shadow-2xl">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-display font-black italic uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex w-full justify-center gap-6 border-t border-fg/10 pt-6">
                <Instagram size={24} className="text-fg/40" />
                <MessageSquare size={24} className="text-fg/40" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
