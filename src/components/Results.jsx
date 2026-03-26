import React from 'react';
import { motion } from 'framer-motion';

const outcomes = [
  { n: '01', label: 'Produto funcional', desc: 'Uma solução digital pronta para uso e evolução.' },
  { n: '02', label: 'Arquitetura tecnológica definida', desc: 'Estrutura clara de como seu produto opera.' },
  { n: '03', label: 'Base para monetização', desc: 'Fundação técnica para transformar em receita.' },
  { n: '04', label: 'Capacidade de evoluir sozinho', desc: 'Você sabe o que fez e como continuar.' },
  { n: '05', label: 'Mentalidade de construtor digital', desc: 'Uma nova forma de ver, projetar e executar soluções.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 48, damping: 18 } },
};

export default function Results() {
  return (
    <section className="py-32 relative overflow-hidden" id="resultado">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
      >
        09
      </span>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16 max-w-3xl"
        >
          <motion.span variants={fadeUp} className="text-primary font-label uppercase tracking-[0.2em] text-xs font-bold block mb-4">
            Resultado Esperado
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6">
            Você não sai com conhecimento.
            <span className="text-primary"> Sai com ativo.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-on-surface-variant font-light leading-relaxed">
            Ao final da mentoria você terá:
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-4"
        >
          {outcomes.map(({ n, label, desc }) => (
            <motion.div
              key={n}
              variants={fadeUp}
              className="grid grid-cols-[64px_1fr_auto] md:grid-cols-[80px_1fr_2fr] items-center gap-6 md:gap-10 px-6 md:px-8 py-5 md:py-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.045] hover:border-white/10 transition-all duration-300 group"
            >
              <span className="font-headline font-black text-3xl md:text-4xl text-primary/15 group-hover:text-primary/35 transition-colors duration-300 select-none leading-none">
                {n}
              </span>
              <h3 className="font-headline font-bold text-xl text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                {label}
              </h3>
              <p className="hidden md:block text-on-surface-variant text-sm font-light leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
