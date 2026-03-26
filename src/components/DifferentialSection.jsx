import React from 'react';
import { motion } from 'framer-motion';

const diffs = [
  'Já construiu produtos digitais reais',
  'Atua em estratégia empresarial',
  'Domina automação e arquitetura tecnológica',
  'Trabalha com vibe coding e desenvolvimento assistido por IA',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 48, damping: 18 } },
};

export default function DifferentialSection() {
  return (
    <section className="py-32 relative overflow-hidden" id="diferencial">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
      >
        04
      </span>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.span variants={fadeUp} className="text-primary font-label uppercase tracking-[0.2em] text-xs font-bold block mb-4">
              Nosso Diferencial Real
            </motion.span>

            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-8">
              Não somos professores de IA.
              <span className="text-on-surface-variant font-light"> Somos construtores de negócios digitais.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="border-l-2 border-primary/40 pl-6">
              <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                A maioria ensina ferramenta.
                <strong className="text-white font-semibold"> Nós ensinamos aplicação estratégica.</strong>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-4"
          >
            <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant/60 mb-6">
              Aqui você aprende com quem:
            </p>
            {diffs.map((diff, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-5 py-5 border-b border-white/5 last:border-0 group"
              >
                <span className="font-headline font-black text-4xl text-primary/15 shrink-0 w-10 leading-none select-none group-hover:text-primary/35 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-white font-medium text-[15px] leading-snug mt-1 group-hover:text-primary transition-colors duration-300">
                  {diff}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 p-8 rounded-2xl bg-primary/5 border border-primary/10 max-w-3xl"
        >
          <p className="text-white font-headline text-xl font-semibold leading-snug">
            Essa combinação é rara.
            <span className="text-primary"> E é exatamente o que permite sair do zero ao produto.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
