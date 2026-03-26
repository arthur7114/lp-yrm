import React from 'react';
import { motion } from 'framer-motion';

const forWhom = [
  'Empresários que querem digitalizar processos',
  'Profissionais que desejam criar produtos',
  'Pessoas com ideias de SaaS ou automação',
  'Consultores que querem escalar serviços',
  'Intraempreendedores',
];

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

export default function ForWhom() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden" id="para-quem">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
      >
        08
      </span>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.015] bg-[length:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl"
        >
          <span className="text-primary font-label uppercase tracking-[0.2em] text-xs font-bold block mb-4">
            Qualificação
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white leading-[1.1]">
            Para quem é, e para quem não é.
          </h2>
          <p className="text-on-surface-variant mt-6 text-lg max-w-3xl font-light leading-relaxed">
            Essa mentoria funciona melhor quando existe contexto real, disposição para executar e intenção clara de construir algo útil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="p-8 md:p-10 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <p className="text-xs font-label uppercase tracking-widest text-emerald-400/80 font-bold">
                Para quem é
              </p>
            </div>

            <div className="space-y-4">
              {forWhom.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                  <span className="text-emerald-400 text-base mt-0.5 shrink-0">+</span>
                  <p className="text-white/85 font-light text-lg leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="p-8 md:p-10 rounded-2xl border border-red-500/10 bg-red-500/[0.02] hover:bg-red-500/[0.035] transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <p className="text-xs font-label uppercase tracking-widest text-red-400/80 font-bold">
                Para quem não é
              </p>
            </div>

            <div className="space-y-4 relative z-10">
              {notForWhom.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                  <span className="text-red-400/70 text-base mt-0.5 shrink-0">x</span>
                  <p className="text-on-surface-variant/75 font-light text-lg leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
