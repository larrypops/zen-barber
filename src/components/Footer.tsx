import Link from 'next/link';
import { Instagram, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-fg/5 bg-bg px-6 pb-12 pt-32 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-32 grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8 flex items-center gap-4">
              <img src="/images/logo.png" alt="Zen Barber logo" className="h-14 w-14 rounded-full border border-fg/10 object-cover" />
              <h2 className="font-display text-4xl font-black italic uppercase tracking-tighter text-fg">
                ZEN <span className="text-accent">BARBER</span>
              </h2>
            </div>
            <p className="max-w-sm text-lg font-light leading-snug text-fg/40">
              Le standard du grooming masculin au Cameroun. Precision technique, identite visuelle, excellence.
            </p>
            <div className="mt-12 flex gap-4">
              <a
                href="https://instagram.com/zenbarber"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fg/10 transition-all hover:border-accent hover:bg-accent hover:text-fg"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/237680846768"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fg/10 transition-all hover:border-accent hover:bg-accent hover:text-fg"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          <div>
            <span className="mb-10 block text-[10px] font-bold uppercase tracking-[0.5em] text-fg/20">Navigation</span>
            <ul className="flex flex-col gap-6 text-[10px] font-black uppercase tracking-widest text-fg">
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="transition-colors hover:text-accent">
                  L&apos;Histoire
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="transition-colors hover:text-accent">
                  Archive Visual
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-accent">
                  Booking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="mb-10 block text-[10px] font-bold uppercase tracking-[0.5em] text-fg/20">Contact</span>
            <ul className="flex flex-col gap-8">
              <li>
                <span className="mb-2 block text-[8px] font-bold uppercase tracking-widest text-fg/20">Direct Line</span>
                <p className="font-display text-xl font-black italic uppercase leading-none tracking-tighter text-fg">680 84 67 68</p>
              </li>
              <li>
                <span className="mb-2 block text-[8px] font-bold uppercase tracking-widest text-fg/20">Location</span>
                <p className="font-display text-xl font-black italic uppercase leading-none tracking-tighter text-fg">Yaounde • Dragage</p>
              </li>
              <li>
                <a
                  href="https://wa.me/237680846768"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-accent/20 pb-1 text-[10px] font-black uppercase tracking-widest text-accent transition-all hover:gap-4"
                >
                  SAY HELLO <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-fg/5 pt-12 md:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-fg/20">
            © {new Date().getFullYear()} Zen Barber • Excellence for the few.
          </p>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-fg/20">
            <a href="#" className="transition-colors hover:text-fg/40">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-fg/40">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
