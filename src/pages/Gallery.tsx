'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowUpRight } from 'lucide-react';

const categories = ['Tout', 'Coupes Modernes', 'VIP', 'Avant / Apres', 'Salon'];

type MediaItem = {
  id: number;
  type: 'image' | 'video';
  category: string;
  src: string;
  poster?: string;
  title: string;
};

const mediaItems: MediaItem[] = [
  { id: 1, type: 'image', category: 'Coupes Modernes', src: '/images/photo-Samuel-Etoo.jpg', title: 'Fade Precision' },
  { id: 2, type: 'image', category: 'VIP', src: '/images/photo-Francis-Nganou.jpg', title: 'Artist Session' },
  {
    id: 3,
    type: 'video',
    category: 'Avant / Apres',
    src: '/images/video-1.mp4',
    poster: '/images/photo-Samuel-Etoo-2.jpg',
    title: 'Transformation',
  },
  { id: 4, type: 'image', category: 'Salon', src: '/images/photo-Murielle-Blanche-Nbienou.jpg', title: 'Zen Interior' },
  { id: 5, type: 'image', category: 'Coupes Modernes', src: '/images/photo-Andre-Onana.jpg', title: 'Taper Fade' },
  {
    id: 6,
    type: 'video',
    category: 'Coupes Modernes',
    src: '/images/video-2.mp4',
    poster: '/images/photo-Andre-Onana.jpg',
    title: 'Close-up Detail',
  },
  { id: 7, type: 'image', category: 'VIP', src: '/images/photo-Samuel-Etoo-2.jpg', title: 'Premium Session' },
  {
    id: 8,
    type: 'video',
    category: 'Avant / Apres',
    src: '/images/video-3.mp4',
    poster: '/images/photo-Francis-Nganou.jpg',
    title: 'Fresh Look',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const filteredItems = activeCategory === 'Tout' ? mediaItems : mediaItems.filter((item) => item.category === activeCategory);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-bg px-6 pb-20 pt-40 sm:px-12">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.5em] text-accent">Visual Archive</span>
            <h1 className="font-display text-5xl font-black italic uppercase leading-[0.9] tracking-tighter text-fg md:text-8xl">
              L&apos;ART DU <br />
              <span className="text-fg/20">MEDIA.</span>
            </h1>
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl border px-6 py-3 text-[8px] font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat
                      ? 'border-fg bg-fg text-bg shadow-xl'
                      : 'border-fg/5 bg-transparent text-fg/40 hover:border-fg/20 hover:text-fg'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] cursor-crosshair overflow-hidden rounded-[2.5rem] border border-fg/5 bg-fg/5 shadow-sm transition-all duration-500 hover:shadow-2xl"
              >
                {item.type === 'video' ? (
                  <video controls playsInline preload="metadata" poster={item.poster} className="h-full w-full object-cover">
                    <source src={item.src} type="video/mp4" />
                    Votre navigateur ne prend pas en charge cette video.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                )}

                <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-bg/20 opacity-0 transition-all group-hover:bg-bg group-hover:text-fg group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>

                <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-fg via-fg/40 to-transparent p-10 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="mb-2 block text-[8px] font-black uppercase tracking-[0.2em] text-accent">{item.category}</span>
                  <h3 className="font-display text-2xl font-black italic uppercase leading-none tracking-tighter text-bg">{item.title}</h3>
                  {item.type === 'video' && (
                    <div className="mt-6 flex items-center gap-3 text-[8px] font-black uppercase tracking-widest text-bg/60">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                        <Play size={10} fill="currentColor" />
                      </div>
                      Watch reel
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.main>
  );
}
