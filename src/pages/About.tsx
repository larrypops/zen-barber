'use client';

import { motion } from 'motion/react';
import { Target, Crown, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-bg px-6 pb-20 pt-40 sm:px-12">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-32 grid grid-cols-1 items-start gap-24 lg:grid-cols-2">
          <div className="sticky top-40">
            <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.5em] text-accent">L&apos;Heritage Zen Barber</span>
            <h1 className="mb-12 font-display text-5xl font-black italic uppercase leading-[0.9] tracking-tighter text-fg md:text-8xl">
              BATIR UNE <br />
              <span className="text-fg/20">IDENTITE.</span>
            </h1>
            <p className="mb-16 max-w-lg text-balance text-xl font-light leading-relaxed text-fg/40">
              Plus qu&apos;un salon, Zen Barber est une institution du grooming a Yaounde. Nous ne coupons pas seulement des cheveux,
              nous construisons des signatures visuelles pour l&apos;elite du Cameroun.
            </p>

            <div className="flex flex-col gap-6">
              <div className="group rounded-[2.5rem] border border-fg/5 bg-fg/5 p-12 transition-all duration-500 hover:border-accent">
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Target size={24} />
                </div>
                <h3 className="mb-4 font-display text-2xl font-black italic uppercase tracking-tighter text-fg">Notre Mission</h3>
                <p className="text-sm font-medium leading-relaxed text-fg/40">
                  Elever les standards du grooming africain par la precision technique et l&apos;innovation constante.
                </p>
              </div>
              <div className="group rounded-[2.5rem] border border-fg/5 bg-fg/5 p-12 transition-all duration-500 hover:border-accent">
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Crown size={24} />
                </div>
                <h3 className="mb-4 font-display text-2xl font-black italic uppercase tracking-tighter text-fg">Notre Vision</h3>
                <p className="text-sm font-medium leading-relaxed text-fg/40">
                  Chaque trait, chaque degrade est une signature. Nous definissons le style de demain, aujourd&apos;hui.
                </p>
              </div>
            </div>
          </div>

          <div className="relative pt-12 lg:pt-0">
            <div className="group rounded-[3rem] border border-fg/5 bg-fg/5 p-4">
              <div className="relative h-[700px] overflow-hidden rounded-[2.5rem]">
                <img
                  src="/images/photo-Samuel-Etoo-2.jpg"
                  alt="Expertise Zen Barber"
                  className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fg via-transparent to-transparent opacity-40" />

                <div className="absolute bottom-12 left-12 flex flex-col gap-1">
                  <span className="font-display text-[6vw] font-black italic leading-none tracking-tighter text-bg">EST.</span>
                  <span className="font-display text-[6vw] font-black italic leading-none tracking-tighter text-accent">2014</span>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="group aspect-square rounded-[2rem] bg-fg p-12 shadow-black/20 transition-all hover:shadow-2xl sm:aspect-auto sm:h-48">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Abonnes</span>
                <span className="font-display text-5xl font-black italic tracking-tighter text-bg">79K+</span>
              </div>
              <div className="aspect-square rounded-[2rem] border border-fg/5 p-12 transition-all hover:border-accent sm:aspect-auto sm:h-48">
                <span className="text-[10px] font-black uppercase tracking-widest text-fg/20">Base</span>
                <span className="font-display text-5xl font-black italic tracking-tighter text-fg">YDE</span>
              </div>
            </div>

            <div className="group mt-12 flex cursor-pointer items-center justify-between rounded-[2rem] bg-accent p-12 shadow-accent/20 transition-all hover:shadow-2xl">
              <h4 className="font-display text-xl font-black italic uppercase tracking-tighter text-fg">Pret pour le changement ?</h4>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fg text-accent transition-transform group-hover:translate-x-2">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
