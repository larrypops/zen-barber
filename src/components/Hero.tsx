import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Scissors } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
        <img src="/images/photo-Samuel-Etoo.jpg" alt="Zen Barber" className="h-full w-full scale-110 object-cover opacity-45" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="mb-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-accent">
              <span className="h-[1px] w-12 bg-accent" />
              L&apos;Excellence du Grooming
            </span>

            <h1 className="mb-10 text-[14vw] font-display text-fg md:text-[8vw] font-black italic uppercase leading-[0.85] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                DEFINIS TON
              </motion.span>{' '}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-fg to-accent bg-clip-text text-transparent"
              >
                IDENTITE
              </motion.span>
              .
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12 max-w-xl text-balance text-lg font-light leading-relaxed text-fg/60 md:text-xl"
            >
              Zen Barber a Yaounde • Dragage. Plus qu&apos;une coupe, une transformation radicale de votre image par l&apos;un des
              barbers les plus influents du Cameroun.
            </motion.p>

            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <Link
                href="/contact"
                className="group flex w-full items-center justify-center gap-4 rounded-2xl bg-fg px-10 py-5 text-xs font-black uppercase tracking-widest text-bg transition-all hover:scale-105 hover:bg-accent active:scale-95 sm:w-auto"
              >
                Reserver ma Session <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
              </Link>

              <Link
                href="/galerie"
                className="group flex w-full items-center justify-center gap-4 rounded-2xl border border-fg/10 px-10 py-5 text-xs font-black uppercase tracking-widest text-fg transition-all hover:bg-fg hover:text-bg sm:w-auto"
              >
                Le Portfolio <Scissors size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-24 flex flex-wrap gap-12 border-t border-fg/5 pt-12"
          >
            <div>
              <span className="block font-display text-3xl font-black italic tracking-tighter">79K+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Followers</span>
            </div>
            <div>
              <span className="block font-display text-3xl font-black italic tracking-tighter">500+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Cuts / Month</span>
            </div>
            <div>
              <span className="block font-display text-3xl font-black italic tracking-tighter">VIP</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Approved</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-4 opacity-20 md:flex"
      >
        <span className="text-[8px] font-black uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-[1px] bg-fg" />
      </motion.div>
    </section>
  );
}
