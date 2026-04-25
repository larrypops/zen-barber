import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

function Counter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="overflow-hidden bg-[#e9dbc7] px-6 py-40 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.5em] text-accent">Notre Impact</span>
            <h2 className="mb-10 font-display text-4xl font-black italic uppercase leading-tight tracking-tighter md:text-6xl">
              L&apos;INFLUENCE DU <br />{' '}
              <span className="text-accent underline decoration-fg/10 underline-offset-8">GROOMING</span> AU CAMEROUN.
            </h2>
            <p className="max-w-lg text-xl font-light leading-snug text-fg/40">
              Une reputation forgee par la rigueur et une vision artistique du style masculin. Zen Barber est le choix de ceux qui ne
              laissent rien au hasard.
            </p>

            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[
                  { name: "Samuel Eto'o", img: '/images/photo-Samuel-Etoo.jpg' },
                  { name: 'Andre Onana', img: '/images/photo-Andre-Onana.jpg' },
                  { name: 'Francis Ngannou', img: '/images/photo-Francis-Nganou.jpg' },
                  { name: 'Murielle Blanche Nbienou', img: '/images/photo-Murielle-Blanche-Nbienou.jpg' },
                ].map((vip) => (
                  <div key={vip.name} className="h-14 w-14 overflow-hidden rounded-full border-4 border-[#f7ecdb] bg-fg/5 ring-1 ring-fg/5">
                    <img src={vip.img} alt={vip.name} className="h-full w-full object-cover grayscale" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent italic">VIP Approved</span>
                <span className="text-xs font-bold tracking-tight text-fg/40">Plus de 500+ clients satisfaits par mois</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[3rem] border border-fg/5 bg-fg/5 p-px">
            <div className="flex flex-col justify-center bg-[#f7ecdb] p-12">
              <span className="font-display text-5xl font-black italic tracking-tighter text-fg md:text-7xl">
                +<Counter value={79} duration={2} />K
              </span>
              <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.4em] text-fg/30">Abonnes</span>
            </div>
            <div className="flex flex-col justify-center bg-[#f7ecdb] p-12">
              <span className="font-display text-5xl font-black italic tracking-tighter text-fg md:text-7xl">100%</span>
              <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.4em] text-fg/30">Qualite</span>
            </div>
            <div className="col-span-2 flex flex-col justify-center bg-[#f7ecdb] p-12">
              <div className="flex items-center gap-6">
                <span className="font-display text-5xl font-black italic tracking-tighter text-accent md:text-7xl">YAO</span>
                <div className="h-[1px] flex-grow bg-fg/5" />
                <span className="text-right text-[10px] font-black uppercase tracking-widest text-fg/40">Base a Dragage, Yaounde</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
