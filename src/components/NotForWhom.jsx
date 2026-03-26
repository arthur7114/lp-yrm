import React from 'react';
import { motion } from 'framer-motion';

const notForWhom = [
  'Quem quer só consumir conteúdo',
  'Quem não tem disciplina de execução',
  'Quem busca solução mágica',
  'Quem não está disposto a construir',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 48, damping: 18 } },
};

export default function NotForWhom() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#07091a]" id="nao-e-para">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
      >
        09
      </span>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-red-400 font-label uppercase tracking-[0.2em] text-xs font-bold block mb-4">
            Para Quem Não É
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="p-8 md:p-10 rounded-2xl border border-red-500/10 bg-red-500/[0.02] max-w-4xl"
        >
          <div className="space-y-4">
            {notForWhom.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                <span className="text-red-400/70 text-base mt-0.5 shrink-0">x</span>
                <p className="text-on-surface-variant/75 font-light text-lg leading-snug">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
