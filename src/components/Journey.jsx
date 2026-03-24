import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Layers, LayoutGrid, TerminalSquare, Compass } from 'lucide-react';

export default function Journey() {
  const benefits = [
    "Entender como pensar soluções em uma lógica agent-first",
    "Aprender a estruturar melhor prompts, contexto, fluxo e objetivo",
    "Configurar e organizar melhor o ambiente de construção",
    "Ganhar repertório prático sobre ferramentas que estamos usando no dia a dia",
    "Desenvolver seu projeto com acompanhamento",
    "Evitar erros comuns que custam tempo e energia",
    "Trocar experiência com outras pessoas que também estão construindo",
    "Sair com mais clareza sobre como aplicar IA no seu contexto real"
  ];

  const toolsAndThemes = [
    "Criação de prompts com intenção", "Pensamento agent-first", "Organização de contexto",
    "Ambiente de construção", "Automações com n8n", "Uso de MCP", "Construção com apoio de IA (Cursor/VS Code)",
    "Prototipação de soluções", "Lógica de MVP", "Validação prática de ideias"
  ];

  const blocks = [
    { title: "Formato", desc: "Encontros online e ao vivo, em grupo reduzido.", icon: LayoutGrid },
    { title: "Dinâmica", desc: "Tema da semana + orientação prática + espaço para destravar projetos.", icon: Layers },
    { title: "Foco", desc: "Menos teoria abstrata. Mais aplicação, clareza e construção.", icon: Compass },
    { title: "Lógica", desc: "Acompanhamento de quem está usando isso de verdade no dia a dia.", icon: TerminalSquare },
  ];

  const steps = [
    { id: 1, title: "Clareza de problema, solução e escopo", desc: "Como escolher melhor o que construir, definir um problema real e evitar começar pelo lado errado." },
    { id: 2, title: "Prompts com intenção", desc: "Como estruturar prompts e instruções de forma útil para construção, e não apenas para respostas bonitas." },
    { id: 3, title: "Ambiente de construção e stack", desc: "Como organizar ferramentas, contexto, arquivos e fluxo de trabalho para acelerar execução." },
    { id: 4, title: "Pensamento agent-first", desc: "Como modelar tarefas, decisões, contexto e comportamento de agentes." },
    { id: 5, title: "Automação e integrações", desc: "Como transformar etapas manuais em fluxos com automação e IA." },
    { id: 6, title: "Construção assistida por IA", desc: "Como usar IA no desenvolvimento, prototipação e refinamento técnico da solução." },
    { id: 7, title: "Refinamento do projeto", desc: "Ajustes, destravamentos, melhoria do que foi construído e priorização do que realmente importa." },
    { id: 8, title: "Próximos passos e evolução", desc: "Como consolidar a solução, definir próximos ciclos e continuar evoluindo." },
  ];

  const differentials = [
    { num: "01", title: "Construção sobre projeto real", desc: "Você não entra para estudar exemplos genéricos. Você entra para evoluir algo que faz sentido para o seu momento." },
    { num: "02", title: "Repertório aplicado", desc: "Nós não ensinamos a partir de teoria distante. Mostramos o que estamos testando, usando e refinando na prática." },
    { num: "03", title: "Aprendizado pelo processo", desc: "Você aprende com o seu caso e também com o de outras pessoas da turma." },
    { num: "04", title: "Sem promessas irreais", desc: "A proposta não é vender atalhos mágicos. É encurtar caminho, evitar erro e acelerar execução com direção." },
  ];

  return (
    <>
      {/* SEÇÃO 4 — TRANSFORMAÇÃO / BENEFÍCIOS */}
      <section className="py-24 relative overflow-hidden bg-[#0c1324]" id="transformacao">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="asymmetric-grid gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight">
                O objetivo é simples:<br/>te ajudar a sair do improviso e <span className="text-primary italic">construir com consistência.</span>
              </h2>
              
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                <p className="text-xl text-white italic font-light">"Você não precisa de mais conteúdo solto. Precisa de critério, direção e prática acompanhada."</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <CheckCircle2 className="text-primary mt-1 shrink-0 w-5 h-5" />
                  <p className="text-on-surface-variant font-light leading-relaxed text-sm md:text-base">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — COMO FUNCIONA */}
      <section className="py-32 relative" id="como-funciona">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-bold text-white mb-6">Uma mentoria em grupo, ao vivo,<br/>focada em avanço real</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Serão 8 encontros ao vivo em grupo, com aproximadamente 1 hora de duração cada.<br/>Cada encontro terá um tema central, um momento de aplicação (projetos dos participantes) e troca prática em grupo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blocks.map((block, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="p-8 rounded-3xl bg-[#05070e] border border-white/5 hover:border-white/10 transition-colors shadow-xl group"
              >
                <block.icon className="text-primary w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-headline text-xl font-bold mb-3 text-white">{block.title}</h3>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">{block.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — O QUE VOCÊ VAI TRABALHAR AQUI */}
      <section className="py-24 bg-[#080b14] relative border-t border-b border-white/5" id="ferramentas">
        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <div className="mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-snug">A operação de construção com IA</h2>
            <p className="text-on-surface-variant text-xl font-light leading-relaxed">
              A mentoria não é limitada a uma única ferramenta. Pensamos no ecossistema certo para construir melhor.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {toolsAndThemes.map((t, idx) => (
              <motion.span 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * idx }}
                className="px-5 py-3 bg-white/[0.03] rounded-full text-sm font-light border border-white/10 text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white hover:border-white/20"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — ESTRUTURA DOS 8 ENCONTROS */}
      <section className="py-32 relative bg-[#05070e]" id="estrutura">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-primary font-label uppercase tracking-widest text-sm mb-4 font-bold outline-primary/20">A Jornada YRM</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold max-w-3xl text-white leading-tight">Uma trilha para tirar sua solução da ideia e levar para execução</h2>
            <p className="mt-6 text-on-surface-variant/60 text-sm font-light italic max-w-xl mx-auto">
              Os temas funcionam como trilha condutora da mentoria, mas os encontros também se adaptam aos projetos e desafios reais dos participantes.
            </p>
          </div>
          
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/80 before:via-white/10 before:to-transparent">
            {steps.map((step) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Number Circle */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/50 bg-[#05070e] text-primary font-bold text-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_20px_rgba(184,195,255,0.2)]">
                  {step.id}
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white/[0.02] border border-white/5 shadow-2xl hover:border-white/10 transition-colors backdrop-blur-sm">
                  <h4 className="font-headline font-bold text-2xl mb-3 text-white">Encontro {step.id} — {step.title}</h4>
                  <p className="text-on-surface-variant text-base font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 — DIFERENCIAL */}
      <section className="py-24 bg-[#080b14] border-t border-white/5" id="diferencial">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white tracking-tight">Por que essa mentoria funciona diferente</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentials.map((diff, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="flex gap-6 p-8 rounded-3xl bg-white/[0.03] border border-white/5 group"
              >
                <div className="text-4xl font-headline font-black text-white/5 group-hover:text-primary/20 transition-colors">
                  {diff.num}
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-white mb-3">{diff.title}</h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">{diff.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
