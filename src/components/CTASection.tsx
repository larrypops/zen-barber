import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-40 px-6 sm:px-12 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-fg rounded-[3rem] p-12 md:p-32 text-center relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-12 block">Prêt pour le changement ?</span>
            
            <h2 className="text-[10vw] md:text-[6vw] font-display font-black italic tracking-tighter leading-[0.8] uppercase text-bg mb-20">
              RÉSERVE TON <br />
              <span className="text-accent">NOUVEAU</span> STYLE.
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://wa.me/237680846768"
                target="_blank"
                className="px-12 py-6 bg-[#25D366] text-white font-black uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-4 group shadow-xl shadow-[#25D366]/20"
              >
                WhatsApp Priority 
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.01-.371-.012-.57-.012-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.393-4.417 9.89-9.771 9.9zM12.003 0C5.378 0 0 5.378 0 12.003c0 2.115.547 4.178 1.588 6.002L0 24l6.117-1.605a11.947 11.947 0 005.885 1.554h.005c6.623 0 12.003-5.38 12.003-12.003C24.01 5.378 18.63 0 12.003 0z" />
                </svg>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+237680846768"
                className="px-12 py-6 border border-bg/10 text-bg font-black uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-4 hover:bg-bg hover:text-fg transition-all"
              >
                Appel Direct <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
