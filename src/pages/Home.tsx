'use client';

import { motion } from 'motion/react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Highlights from '../components/Highlights';
import VideoGallery from '../components/VideoGallery';
import Services from '../components/Services';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-x-hidden">
      <Hero />
      <div className="relative z-10 bg-[#0a0a0a]">
        <SocialProof />
        <Highlights />
        <VideoGallery />
        <Services />
        <CTASection />
      </div>

      <div className="flex select-none overflow-hidden bg-fg py-12">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="mr-24 flex items-center gap-24">
              <span className="font-display text-4xl font-black italic uppercase tracking-tighter text-bg md:text-7xl">YAOUNDE • DRAGAGE</span>
              <span className="font-display text-4xl font-black italic uppercase tracking-tighter text-bg/10 md:text-7xl">
                PREMIUM GROOMING
              </span>
              <span className="font-display text-4xl font-black italic uppercase tracking-tighter text-accent md:text-7xl">ZEN BARBER</span>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
