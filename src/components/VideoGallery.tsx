import { motion } from 'motion/react';

const videos = [
  {
    id: 1,
    label: 'Transformation',
    duration: '0:15',
    src: '/images/video-1.mp4',
    poster: '/images/video-1-poster.jpg',
  },
  {
    id: 2,
    label: 'Fade Detail',
    duration: '0:22',
    src: '/images/video-2.mp4',
    poster: '/images/video-2-poster.jpg',
  },
  {
    id: 3,
    label: 'VIP Session',
    duration: '0:30',
    src: '/images/video-3.mp4',
    poster: '/images/video-3-poster.jpg',
  },
];

export default function VideoGallery() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-32 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-display text-4xl font-black italic uppercase tracking-tighter md:text-6xl">Regarde le resultat</h2>
          <p className="mx-auto max-w-xl font-light text-white/40">
            Vois la precision du travail et la qualite des finitions a travers nos transformations reelles filmees directement au salon.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((vid, i) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[9/16] overflow-hidden rounded-3xl border border-white/10 bg-black"
            >
              <video
                controls
                playsInline
                preload="metadata"
                poster={vid.poster}
                className="h-full w-full object-cover"
              >
                <source src={vid.src} type="video/mp4" />
                Votre navigateur ne prend pas en charge cette video.
              </video>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-black italic uppercase tracking-tight text-white">{vid.label}</span>
                  <span className="text-[10px] font-bold text-white/60">{vid.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://instagram.com/zenbarber"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-4 border-b border-white/20 pb-2 text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:text-white/60"
          >
            Voir tout sur Instagram <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
