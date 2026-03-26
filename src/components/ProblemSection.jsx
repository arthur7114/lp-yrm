import React from 'react';
import { motion } from 'framer-motion';

const painPoints = [
  'Ideias que nunca saem do papel',
  'Projetos que travam na parte técnica',
  'Dependência de desenvolvedores',
  'Perda de timing de mercado',
  'Frustração com excesso de teoria',
];

const missing = [
  {
    num: '01',
    label: 'Visão de negócio',
    desc: 'Sem clareza de problema e proposta de valor, nenhuma ferramenta resolve.',
  },
  {
    num: '02',
    label: 'Arquitetura de produto digital',
    desc: 'Saber usar IA é diferente de saber estruturar uma solução que funciona.',
  },
  {
    num: '03',
    label: 'Capacidade de execução técnica',
    desc: 'Execução guiada elimina o loop de aprender sem avançar.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 48, damping: 18 } },
};

export default function ProblemSection() {
  return (
    <>
      <section className="py-28 relative overflow-hidden" id="realidade">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
        >
          01
        </span>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-4xl mb-12"
          >
            <motion.span variants={fadeUp} className="text-primary font-label uppercase tracking-[0.2em] text-xs font-bold block mb-4">
              A Realidade Que Ninguém Te Conta
            </motion.span>

            <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl lg:text-[4rem] tracking-tight text-white leading-[1.02] mb-6 max-w-5xl">
              <span className="block font-extrabold text-white">A maioria das pessoas está estudando IA.</span>
              <span className="mt-2 block font-light text-white/72">Pouquíssimas estão construindo negócios com ela.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-on-surface-variant font-light leading-relaxed max-w-3xl">
              Hoje existe uma epidemia de conteúdo sobre inteligência artificial. Cursos, vídeos e promessas por todos os lados. Mas, no fim do dia, quase ninguém tem algo real construído.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 xl:gap-10 items-start">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="min-h-[104px] px-5 py-5 rounded-2xl bg-white/[0.025] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-200 flex flex-col justify-between"
                >
                  <span className="text-red-400 font-mono text-sm block mb-4 tracking-widest">×</span>
                  <p className="text-white/90 font-medium text-[1.02rem] leading-snug">{point}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-9 rounded-[2rem] border border-primary/10 bg-gradient-to-br from-[#161b2b] to-[#101420] shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
            >
              <p className="text-xs font-label uppercase tracking-[0.2em] text-primary/80 mb-8">
                O resultado é previsível
              </p>
              <p className="text-[1.8rem] md:text-[2.1rem] font-headline font-bold text-white leading-[1.08] mb-6">
                Muito conteúdo consumido.
                <span className="text-primary"> Quase nenhuma entrega concreta.</span>
              </p>
              <p className="text-on-surface-variant font-light text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Quando falta direção de execução, a IA vira só repertório interessante. Não vira produto, não vira automação, não vira ganho operacional.
              </p>
              <div className="border-l-2 border-primary/50 pl-5">
                <p className="text-lg md:text-[1.15rem] font-headline font-semibold text-white leading-snug">
                  Você não precisa de mais conhecimento.
                  <span className="text-primary"> Você precisa de execução guiada.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-surface relative overflow-hidden" id="problema-execucao">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
        >
          02
        </span>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <p className="text-primary font-label uppercase tracking-[0.2em] text-xs font-bold block mb-4">
              O Problema Não É IA. É Execução
            </p>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6">
              IA sem aplicação prática é só
              <span className="text-on-surface-variant font-light"> entretenimento intelectual.</span>
            </h2>
            <div className="space-y-5 text-lg text-on-surface-variant font-light leading-relaxed">
              <p>O mercado criou uma falsa sensação de avanço.</p>
              <p>Você aprende prompts. Entende conceitos. Testa ferramentas. Mas não constrói nada relevante.</p>
            </div>
          </motion.div>

          <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant/60 mb-8">
            Isso acontece porque faltam três coisas:
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {missing.map(({ num, label, desc }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className="relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 overflow-hidden group"
              >
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 right-4 font-headline font-black text-[5rem] leading-none text-white/[0.04] select-none"
                >
                  {num}
                </span>
                <h3 className="font-headline text-xl font-bold text-white mb-3 relative z-10">{label}</h3>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed relative z-10">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-base font-medium text-white/70 text-center"
          >
            É exatamente aqui que a mentoria entra.
          </motion.p>
        </div>
      </section>
    </>
  );
}
