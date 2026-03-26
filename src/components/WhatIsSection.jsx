import React from 'react';
import { motion } from 'framer-motion';

const notList = [
  'Esta não é uma mentoria motivacional.',
  'Não é um curso gravado.',
  'Não é conteúdo genérico.',
];

const yesPoints = [
  { n: '1', text: 'Transformar ideia em produto digital' },
  { n: '2', text: 'Construir automações reais com IA' },
  { n: '3', text: 'Criar soluções vendáveis' },
  { n: '4', text: 'Reduzir dependência técnica' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 48, damping: 18 } },
};

export default function WhatIsSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#07091a]" id="mentoria">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
      >
        03
      </span>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl mb-20"
        >
          <motion.span variants={fadeUp} className="text-primary font-label uppercase tracking-[0.2em] text-xs font-bold block mb-4">
            O Que É A Mentoria
          </motion.span>

          <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-8">
            Uma jornada prática de
            <span className="text-primary"> construção de produto </span>
            com IA.
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-label uppercase tracking-widest text-red-400/70 mb-6">Não é</p>
            <div className="space-y-4">
              {notList.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-red-500/50 font-mono text-sm mt-0.5 shrink-0">x</span>
                  <p className="text-on-surface-variant font-light text-lg">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-label uppercase tracking-widest text-primary/70 mb-6">É um ambiente estruturado para</p>
            <div className="space-y-5">
              {yesPoints.map(({ n, text }) => (
                <div key={n} className="flex items-baseline gap-5 group">
                  <span className="font-headline font-black text-3xl text-primary/20 w-8 shrink-0 group-hover:text-primary/50 transition-colors duration-300 select-none">
                    {n}
                  </span>
                  <p className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="font-headline text-2xl md:text-3xl font-extrabold text-white">
            Você aprende
            <span className="text-primary italic"> fazendo.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
