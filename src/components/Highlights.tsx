import { motion } from 'motion/react';

const highlights = [
  { id: 1, title: 'Elite Grooming', subtitle: 'Artistes & Talents', img: '/images/photo-Samuel-Etoo.jpg' },
  { id: 2, title: 'Precision', subtitle: 'Details & Finitions', img: '/images/photo-Andre-Onana.jpg' },
  { id: 3, title: "L'Art du Style", subtitle: 'Tendances Actuelles', img: '/images/photo-Francis-Nganou.jpg' },
  { id: 4, title: 'Le Studio', subtitle: 'Yaounde Dragage', img: '/images/photo-Murielle-Blanche-Nbienou.jpg' },
];

export default function Highlights() {
  return (
    <section className="bg-fg px-6 py-40 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col items-end justify-between gap-12 md:flex-row">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.5em] text-accent">Visual Archive</span>
            <h2 className="font-display text-5xl font-black italic uppercase leading-[0.8] tracking-tighter text-bg md:text-8xl">
              NOS SIGNATURES VISUELLES.
            </h2>
          </div>
          <p className="max-w-sm text-lg font-light leading-snug text-bg/40">
            Decouvrez l&apos;esthetique Zen Barber a travers une selection de nos creations les plus marquantes.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="group relative h-[600px] overflow-hidden rounded-[2.5rem] bg-bg/5"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fg to-transparent opacity-60" />

              <div className="absolute inset-x-0 bottom-0 p-10">
                <div className="flex flex-col gap-1">
                  <h3 className="mb-2 font-display text-4xl font-black italic uppercase leading-none tracking-tighter text-bg">{item.title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent">{item.subtitle}</p>
                </div>
              </div>

              <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-bg/10 text-[10px] font-bold text-bg/40 transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-fg">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
