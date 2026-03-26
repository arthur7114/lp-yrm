import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Compass, ListOrdered, MousePointerClick, Puzzle, Timer, Crosshair, Waypoints, Code2, Users, Rocket, XCircle } from 'lucide-react';

export default function Features() {
  const painPoints = [
    { icon: Clock, title: 'Testa muito, não conclui', desc: 'Testa várias ferramentas, mas não consegue transformar isso em solução real.' },
    { icon: Compass, title: 'Perdido no ecossistema', desc: 'Se perde entre prompts, agentes, automações, APIs, integrações e código.' },
    { icon: ListOrdered, title: 'Falta de ordem', desc: 'Não sabe por onde começar nem em que ordem construir a solução.' },
    { icon: MousePointerClick, title: 'Trava na execução', desc: 'Você até tem uma ideia excelente, mas trava na hora de colocar a mão na massa.' },
    { icon: Puzzle, title: 'Conhecimento fragmentado', desc: 'Aprende pedaços soltos na internet, sem conseguir conectar tudo no final.' },
    { icon: Timer, title: 'Sensação de atraso', desc: 'Sente que está sempre correndo atrás da nova IA e nunca consolidando uma forma de trabalhar.' },
  ];

  const targetAudience = [
    { icon: Crosshair, title: 'Tem ideia', desc: 'Você tem uma ideia e quer transformar isso em algo funcional.' },
    { icon: Waypoints, title: 'Quer automatizar', desc: 'Você tem um processo manual e quer automatizar com Inteligência Artificial.' },
    { icon: Code2, title: 'Busca critério', desc: 'Você quer estruturar agentes, fluxos e soluções com mais método e critério.' },
    { icon: Rocket, title: 'Foca em execução', desc: 'Você quer sair do conteúdo solto e entrar em uma execução técnica guiada.' },
    { icon: Users, title: 'Gosta de comunidade', desc: 'Você quer acompanhar como outras pessoas aplicam essas ferramentas na prática.' },
    { title: 'Aprende construindo', desc: 'Você quer aprender colocando a mão na massa, e não só consumindo teoria.' },
  ];

  const notForYou = [
    'Está começando do absoluto zero e ainda quer uma introdução geral ao tema de IA',
    'Procura um curso gravado, em um modelo de vídeo-aulas lineares e fechadas',
    'Não tem nenhuma dor corporativa, demanda ou caso de uso real para trabalhar',
    "Quer apenas 'ver tendências das IAs' sem de fato colocar a mão na massa para criar",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
  };

  return (
    <>
      <section className="py-24 relative" id="dores">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c1324] z-0" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-16 text-center"
          >
            <span className="text-primary font-label uppercase tracking-[0.2em] text-sm font-bold">O Cenário Atual</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-white max-w-4xl mx-auto">
              O problema não é falta de ferramenta.<br />
              <span className="text-primary">É falta de direção aplicada.</span>
            </h2>
            <p className="text-on-surface-variant mt-6 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              Hoje, todo dia aparece uma IA nova, um fluxo novo, um tutorial novo, uma promessa nova. O resultado é claro. Muita gente:
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {painPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.div key={idx} variants={item} className="p-7 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.06] transition-all duration-200 relative overflow-hidden group cursor-default">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full group-hover:bg-primary/20 transition-colors" />
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-5">
                    <Icon className="text-primary/80 w-5 h-5" />
                  </div>
                  <h3 className="font-headline text-lg font-bold mb-2 text-white/90">{point.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm font-light">{point.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary/20 via-tertiary-container/30 to-primary/20">
              <div className="bg-[#0c1324] px-8 py-5 rounded-xl">
                <p className="text-white font-medium text-lg leading-relaxed">
                  A mentoria existe para reduzir esse ruído e te ajudar a avançar com mais clareza, repertório e critério.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 relative bg-[#05070e]" id="para-quem-e">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white max-w-3xl leading-snug">
              Essa mentoria é para quem precisa construir, não apenas entender.
            </h2>
            <p className="text-on-surface-variant mt-6 text-xl max-w-3xl font-light leading-relaxed">
              Desenhada para pessoas que já perceberam que IA pode virar vantagem operacional, produto ou ganho real de produtividade, mas não querem perder meses tentando descobrir tudo sozinhas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {targetAudience.map((aud, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white/[0.03] border border-white/5 rounded-2xl p-7 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-200 cursor-default"
              >
                {aud.icon && (
                  <div className="p-2 rounded-lg bg-white/10 w-fit mb-4">
                    <aud.icon className="text-white/60 w-5 h-5" />
                  </div>
                )}
                <p className="text-white text-base font-medium leading-relaxed">{aud.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#0c1324]/50 border border-red-500/10 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[100px] rounded-full" />

            <h3 className="font-headline text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <XCircle className="text-red-400" />
              Não é para você se:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {notForYou.map((text, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5 shrink-0" />
                  <p className="text-on-surface-variant leading-relaxed font-light">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
