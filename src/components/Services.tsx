import { motion } from 'motion/react';
import { Scissors, Car, Flame, Star, Check } from 'lucide-react';

const services = [
  {
    title: 'L\'Expérience Salon',
    desc: 'L\'art du grooming traditionnel revisité avec modernité et précision chirurgicale.',
    location: 'Yaoundé – Dragage',
    features: ['Coupes Signature', 'Dégradé de Précision', 'Traçage Barbe'],
    price: 'À partir de 5 000 FCFA',
    icon: <Scissors className="w-6 h-6" />,
    popular: true
  },
  {
    title: 'Service VIP Domicile',
    desc: 'Le luxe absolu du barbier privé qui se déplace à votre rencontre, où que vous soyez.',
    location: 'Cameroun Wide',
    features: ['Déplacement Privé', 'Discrétion Totale', 'Matériel Premium'],
    price: 'À partir de 30 000 FCFA',
    icon: <Car className="w-6 h-6" />,
    popular: false
  },
  {
    title: 'Grooming Intégral',
    desc: 'Un protocole complet incluant soin du visage, massage et restructuration capillaire.',
    location: 'Sur Rendez-vous',
    features: ['Soin Facial Purifiant', 'Vapeur & Serviette Chaude', 'Huiles Essentielles'],
    price: 'Sur Devis',
    icon: <Flame className="w-6 h-6" />,
    popular: false
  }
];

export default function Services() {
  return (
    <section className="py-40 px-6 sm:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Nos Menus</span>
            <h2 className="text-5xl md:text-7xl font-display font-black italic tracking-tighter uppercase leading-[0.9]">
              CHOISIS TON <br />
              <span className="text-fg/20">NOUVEAU</span> STANDING.
            </h2>
          </div>
          <p className="text-fg/40 max-w-sm text-lg font-light leading-snug">
            Chaque service est une promesse d'excellence. Nous ne suivons pas les tendances, nous les créons.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] } }
              }}
              className={`group relative p-12 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between ${
                service.popular ? 'bg-fg text-bg border-fg shadow-2xl shadow-black/20' : 'bg-transparent text-fg border-fg/10 hover:border-accent'
              }`}
            >
              {service.popular && (
                <div className="absolute top-8 right-8 flex items-center gap-2 px-4 py-1.5 bg-accent text-[8px] font-black uppercase tracking-widest rounded-full">
                  <Star size={10} fill="currentColor" /> Most Popular
                </div>
              )}

              <div>
                <div className={`mb-12 h-14 w-14 rounded-2xl flex items-center justify-center ${
                  service.popular ? 'bg-accent text-fg' : 'bg-fg/5 text-accent'
                }`}>
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-display font-black uppercase italic tracking-tighter mb-6">{service.title}</h3>
                <p className={`text-sm leading-relaxed mb-10 ${service.popular ? 'text-bg/60' : 'text-fg/40'}`}>
                  {service.desc}
                </p>

                <ul className="space-y-4 mb-12">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center ${
                        service.popular ? 'bg-bg/10' : 'bg-fg/5'
                      }`}>
                        <Check size={10} className={service.popular ? 'text-accent' : 'text-accent'} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`pt-10 mt-auto border-t ${service.popular ? 'border-bg/10' : 'border-fg/10'}`}>
                <span className={`text-[10px] uppercase font-black tracking-widest block mb-2 ${service.popular ? 'text-bg/40' : 'text-fg/20'}`}>
                  Investissement
                </span>
                <p className="text-2xl font-display font-black italic tracking-tighter uppercase text-accent">
                  {service.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
