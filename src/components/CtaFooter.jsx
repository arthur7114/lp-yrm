import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageSquareQuote, ShieldCheck } from 'lucide-react';

export default function CtaFooter() {
  const testimonials = [
    { text: "O que mais me chamou atenção foi ver a aplicação prática. Não foi uma aula sobre possibilidades abstratas, foi uma visão real de como usar no dia a dia e transformar isso em algo útil.", author: "Participante da aula presencial 'Da ideia ao produto digital'", role: "— Empreendedor" },
    { text: "Eu já tinha visto muita coisa sobre IA, mas faltava alguém mostrar o caminho de forma organizada. Saí com mais clareza e entendendo melhor como começar do jeito certo.", author: "Líder de Operações", role: "— Gestor" }
  ];

  const faqs = [
    { q: "Preciso saber programar?", a: "Não necessariamente. Mas ajuda muito se você já tiver familiaridade com ferramentas digitais e disposição para aprender construindo. A mentoria não foi feita para quem está completamente no zero." },
    { q: "Essa mentoria é para iniciantes?", a: "Não para iniciantes absolutos. Ela é mais indicada para quem já entendeu o potencial da IA e quer aplicar isso em um projeto, processo ou solução real." },
    { q: "Vou sair com um projeto pronto?", a: "Depende do escopo e do seu nível de execução. O objetivo é que você avance com clareza, estrutura e acompanhamento, reduzindo erro e acelerando construção." },
    { q: "As aulas ficam gravadas?", a: "Sim, os encontros ficam gravados por tempo determinado para os participantes da turma." },
    { q: "As ferramentas são incluídas?", a: "Não. Eventuais ferramentas e assinaturas necessárias são de responsabilidade do participante." },
    { q: "A mentoria é individual?", a: "Não. Ela acontece em grupo, justamente para ampliar repertório, troca e aprendizado entre os participantes." },
    { q: "Vou aprender só uma ferramenta?", a: "Não. A proposta é te ajudar a pensar e construir melhor usando o conjunto de ferramentas mais útil para seu contexto." }
  ];

  return (
    <>
      {/* SEÇÃO 9 — DEPOIMENTOS */}
      <section className="py-24 bg-[#05070e] relative border-b border-white/5" id="depoimentos">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white leading-tight">O que já estão dizendo sobre a forma como ensinamos e aplicamos isso na prática</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white/[0.03] border border-white/5 p-10 rounded-3xl relative"
              >
                <MessageSquareQuote className="absolute top-8 right-8 text-primary/20 w-16 h-16" />
                <p className="text-white text-lg font-light leading-relaxed italic relative z-10 mb-8">"{test.text}"</p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-primary font-bold text-sm tracking-wide">{test.author}</p>
                  <p className="text-on-surface-variant/60 text-xs mt-1 uppercase font-bold tracking-widest">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 10 — QUEM CONDUZ */}
      <section className="py-32 relative bg-[#0c1324] overflow-hidden border-t border-white/5" id="mentor">
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[length:40px_40px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-primary font-label uppercase tracking-widest text-xs font-bold block mb-4">Acompanhamento Especialista</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight">
              Construa com quem domina <br/><span className="text-primary">negócio e tecnologia</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "Yves Mourão",
                tagline: "Estratégia, Inovação e Liderança Tech",
                bio: "Executivo e empreendedor com mais de 20 anos de carreira e 10 anos em produtos digitais, inovação e liderança de times tech. Atua na interseção entre estratégia, pessoas e tecnologia, aplicando IA, automações e vibe-code para tirar ideias do papel e colocar soluções reais em produção. Fundador da YRM Strategy Lab, tem passagem em multinacionais e atuou como sócio e alta gestão em várias Startups e Scaleups.",
                img: "/src/assets/yves.jpg",
                fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop"
              },
              {
                name: "Arthur Brito",
                tagline: "Automação, IA Aplicada e Processos",
                bio: "Arthur Brito é especialista em automação, IA aplicada e estruturação de processos, com 5 anos de experiência em marketing, tecnologia e crescimento de negócios. Com passagem por plataformas de e-commerce, gestão de obras e comunicação multicanal, atua desenvolvendo soluções que unem visão de negócio, eficiência operacional e escalabilidade.",
                img: "/src/assets/arthur.jpg",
                fallback: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop"
              }
            ].map((mentor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                  <div className="lg:col-span-2 aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/10 relative">
                    <img 
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
                      alt={mentor.name} 
                      src={mentor.img}
                      onError={(e) => { e.target.src = mentor.fallback; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1324]/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{mentor.name}</h3>
                      <p className="text-primary text-sm font-semibold tracking-wide uppercase">{mentor.tagline}</p>
                    </div>
                    <p className="text-on-surface-variant/80 font-light text-[15px] leading-relaxed">
                      {mentor.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 11 — FAQ */}
      <section className="py-24 bg-[#080b14]" id="faq">
        <div className="max-w-4xl mx-auto px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          >
            Questões Frequentes
          </motion.h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.details 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * idx }}
                className="group bg-white/[0.02] rounded-xl border border-white/5 overflow-hidden hover:border-white/10 hover:bg-white/[0.04] transition-all duration-200"
              >
                <summary className="px-6 py-5 flex justify-between items-center cursor-pointer list-none text-white font-semibold text-base select-none hover:text-white/90 transition-colors">
                  {faq.q}
                  <ChevronDown size={18} className="text-on-surface-variant group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed font-light text-sm border-t border-white/5 pt-5">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 12 — CTA FINAL */}
      <section className="py-40 bg-[#05070e] overflow-hidden relative border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
          {/* Noise / grid overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:64px_64px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-white leading-snug">
              Se você quer parar de consumir conteúdo solto e começar a construir com <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white italic pr-1">direção</span>, essa mentoria é para você.
            </h2>
            <p className="text-xl md:text-2xl text-on-surface-variant mb-14 font-light max-w-3xl mx-auto leading-relaxed">
              A próxima turma foi pensada para quem já tem uma demanda real e quer evoluir com acompanhamento, repertório aplicado e troca prática.<br/><br/>
              São 8 encontros ao vivo, em grupo reduzido, com foco em tirar ideias e soluções do papel usando IA, automações e lógica agent-first.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-on-primary px-12 py-5 rounded-full font-headline font-black text-xl hover:shadow-[0_0_40px_rgba(184,195,255,0.4)] transition-all shadow-2xl flex items-center gap-3"
              >
                Quero entrar na próxima turma
              </motion.button>
              
              <div className="flex flex-col items-center gap-2 text-on-surface-variant/80 text-sm font-label uppercase tracking-widest font-bold">
                <span className="text-red-400">Turma com vagas limitadas</span>
                <span>Início em breve · Inscrições por tempo limitado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full border-t border-white/5 bg-[#05070e] z-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-16 max-w-7xl mx-auto gap-8 text-sm tracking-wide text-on-surface-variant/60">
          <div className="text-2xl font-black text-white font-headline tracking-tighter mix-blend-screen opacity-90">YRM<span className="font-light">Lab.</span></div>
          
          <div className="flex flex-wrap justify-center gap-10 font-bold uppercase tracking-widest text-xs">
            {['Direitos', 'Termos e Condições', 'Instagram', 'LinkedIn'].map(link => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
          
          <div className="text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} YRM Strategy. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
