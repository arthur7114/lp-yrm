import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  {
    id: 1,
    title: 'Fundamentos de automação e IA',
    desc: 'Nivelamento dos conceitos de automação, RPA e IA aplicada ao negócio.',
    objective: 'Base sólida para decidir com mais critério ao longo da mentoria.',
  },
  {
    id: 2,
    title: 'Identificando oportunidades reais',
    desc: 'Mapeamento de gargalos, processos repetitivos e prioridades por impacto x esforço.',
    objective: 'Escolher o projeto prioritário que será desenvolvido na mentoria.',
  },
  {
    id: 3,
    title: 'APIs, webhooks, RPA e IA',
    desc: 'Visão prática de n8n, Make, Power Automate, Python e outras opções de execução.',
    objective: 'Desenhar a arquitetura do projeto sem tecnicismo desnecessário.',
  },
  {
    id: 4,
    title: 'Implementando o primeiro workflow',
    desc: 'Construção do primeiro fluxo com testes, ajustes e dúvidas aplicadas ao projeto.',
    objective: 'Sair do módulo com um workflow funcional.',
  },
  {
    id: 5,
    title: 'Assistentes e agentes de IA',
    desc: 'Estruturação de assistentes para atendimento, qualificação, suporte e operação.',
    objective: 'Aplicar IA de forma útil no dia a dia da empresa.',
  },
  {
    id: 6,
    title: 'Monitoramento e manutenção',
    desc: 'Acompanhamento de workflows em produção, ajustes por dados e estabilidade operacional.',
    objective: 'Garantir confiabilidade e evolução contínua do que foi construído.',
  },
  {
    id: 7,
    title: 'Governança e boas práticas',
    desc: 'Documentação, segurança, privacidade, compliance e organização para escalar com segurança.',
    objective: 'Estruturar o projeto para ser sustentável dentro da operação.',
  },
  {
    id: 8,
    title: 'Plano de ação construtor',
    desc: 'Fechamento com apresentação da solução, próximos passos e prioridades de evolução.',
    objective: 'Concluir a mentoria com um plano de ação concreto.',
  },
];

export default function Journey() {
  return (
    <section className="py-32 relative bg-[#05070e]" id="jornada">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
      >
        07
      </span>

      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-primary font-label uppercase tracking-widest text-sm mb-4 font-bold">
            Módulos da Mentoria
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold max-w-4xl text-white leading-tight">
            Uma trilha prática para sair da oportunidade identificada e chegar a uma operação mais automatizada.
          </h2>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/80 before:via-white/10 before:to-transparent">
          {modules.map((module) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/50 bg-[#05070e] text-primary font-bold text-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_20px_rgba(184,195,255,0.2)]">
                {module.id}
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white/[0.02] border border-white/5 shadow-2xl hover:border-white/10 transition-colors backdrop-blur-sm">
                <h4 className="font-headline font-bold text-2xl mb-3 text-white">{module.title}</h4>
                <p className="text-on-surface-variant text-base font-light leading-relaxed mb-4">{module.desc}</p>
                <p className="text-sm text-primary/90 font-medium leading-relaxed">{module.objective}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
