'use client';

import { motion } from 'motion/react';
import { Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-bg px-6 pb-20 pt-40 sm:px-12">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.5em] text-accent">Contact & Access</span>
            <h1 className="font-display text-5xl font-black italic uppercase leading-[0.9] tracking-tighter text-fg md:text-8xl">
              TA PROCHAINE <br />
              <span className="text-fg/20">SESSION.</span>
            </h1>
          </div>
          <p className="max-w-sm text-lg font-light leading-snug text-fg/40">
            Un service exclusif pour des clients exigeants. Réserve ta place dans l&apos;agenda de l&apos;excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="group rounded-[2.5rem] border border-fg/5 bg-fg/5 p-12 transition-all duration-500 hover:border-accent">
              <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <MapPin size={24} />
              </div>
              <span className="mb-4 block text-[10px] font-black uppercase tracking-widest text-fg/20">Localisation</span>
              <h3 className="mb-4 font-display text-3xl font-black italic uppercase leading-none tracking-tighter text-fg">
                Yaoundé <br /> Dragage
              </h3>
              <p className="text-xs font-medium uppercase tracking-tight text-fg/40">À côté du club Camtel</p>
            </div>

            <div className="group rounded-[2.5rem] border border-fg/5 bg-fg/5 p-12 transition-all duration-500 hover:border-accent">
              <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Clock size={24} />
              </div>
              <span className="mb-4 block text-[10px] font-black uppercase tracking-widest text-fg/20">Horaires</span>
              <h3 className="mb-4 font-display text-3xl font-black italic uppercase leading-none tracking-tighter text-fg">09H — 20H</h3>
              <p className="text-xs font-medium uppercase tracking-tight text-fg/40">Lundi — Samedi</p>
              <div className="mt-6 border-t border-fg/5 pt-6">
                <span className="text-[8px] font-black uppercase tracking-widest text-accent italic">Dimanche : Sur RDV</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <a
              href="https://wa.me/237680846768"
              target="_blank"
              rel="noreferrer"
              className="group relative flex-1 overflow-hidden rounded-[2.5rem] bg-[#25D366] p-12 shadow-2xl shadow-[#25D366]/20"
            >
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#25D366] shadow-xl">
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.01-.371-.012-.57-.012-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.393-4.417 9.89-9.771 9.9zM12.003 0C5.378 0 0 5.378 0 12.003c0 2.115.547 4.178 1.588 6.002L0 24l6.117-1.605a11.947 11.947 0 005.885 1.554h.005c6.623 0 12.003-5.38 12.003-12.003C24.01 5.378 18.63 0 12.003 0z" />
                  </svg>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white/40 opacity-0 transition-all group-hover:scale-110 group-hover:opacity-100">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="relative z-10 pt-12">
                <span className="mb-4 block text-[10px] font-black uppercase tracking-widest text-white/60 italic">Canal Prioritaire</span>
                <h3 className="font-display text-5xl font-black italic uppercase leading-none tracking-tighter text-white md:text-7xl">
                  WHATSAPP
                </h3>
              </div>
            </a>

            <a
              href="tel:+237680846768"
              className="group flex items-center justify-between rounded-[2.5rem] bg-accent p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/40"
            >
              <div>
                <span className="mb-4 block text-[10px] font-black uppercase tracking-widest text-fg/40">Direct Line</span>
                <h3 className="font-display text-4xl font-black italic uppercase leading-none tracking-tighter text-fg">APPELER MAINTENANT</h3>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-fg/10 text-fg">
                <Phone size={32} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
