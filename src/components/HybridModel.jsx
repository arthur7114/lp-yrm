import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, MapPin } from 'lucide-react';

const deliverables = [
  'Encontros presenciais focados em execução',
  'Aulas online estruturadas',
  'Acompanhamento individual do projeto',
  'Correções práticas em tempo real',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 48, damping: 18 } },
};

export default function HybridModel() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden" id="modelo">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
      >
        05
      </span>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="text-primary font-label uppercase tracking-[0.2em] text-xs font-bold block mb-4">
            Modelo Híbrido
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl font-extrabold text-white leading-[1.1] max-w-3xl">
            Online para escalar conhecimento.
            <span className="text-primary"> Presencial para acelerar execução.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-[2fr_1px_3fr] gap-0 mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="p-8 md:p-10 rounded-xl md:rounded-r-none md:rounded-l-xl border border-white/5 bg-white/[0.02] group hover:bg-white/[0.04] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <Monitor size={20} className="text-primary" />
              </div>
              <span className="font-headline font-black text-lg text-white tracking-tight">Online</span>
            </div>
            <p className="text-on-surface-variant text-sm font-light leading-relaxed">
              Aulas online estruturadas para organizar contexto, repertório e as decisões que sustentam a construção.
            </p>
          </motion.div>

          <div className="hidden md:block bg-white/5 self-stretch mx-0" />

          <motion.div
            variants={fadeUp}
            className="p-8 md:p-10 rounded-xl md:rounded-l-none md:rounded-r-xl border border-primary/10 bg-primary/[0.03] group hover:bg-primary/[0.06] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary/15">
                <MapPin size={20} className="text-primary" />
              </div>
              <span className="font-headline font-black text-lg text-white tracking-tight">Presencial</span>
              <span className="ml-auto text-[10px] font-label uppercase tracking-widest text-primary/70 border border-primary/20 px-2 py-0.5 rounded-full">
                Grande diferencial
              </span>
            </div>
            <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-4">
              Mentorias 100% online geram abandono. Mentorias 100% presenciais geram limitação.
              O modelo híbrido resolve isso.
            </p>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              É onde as dúvidas viram código, as ideias viram fluxo e o projeto avança com acompanhamento real.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {deliverables.map((d, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-start gap-3 px-5 py-4 rounded-lg bg-white/[0.025] border border-white/5 hover:border-white/10 transition-all duration-200"
            >
              <span className="text-primary text-sm mt-0.5 shrink-0">+</span>
              <p className="text-on-surface-variant text-sm font-light leading-snug">{d}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center text-white/70 text-base"
        >
          Isso reduz drasticamente a chance de desistência.
        </motion.p>
      </div>
    </section>
  );
}
