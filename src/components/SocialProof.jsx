import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    text: 'O que mais me chamou atenção foi ver a aplicação prática. Não foi uma aula sobre possibilidades abstratas, foi uma visão real de como usar no dia a dia e transformar isso em algo útil.',
    author: "Participante da aula presencial 'Da ideia ao produto digital'",
    role: 'Empreendedor',
  },
  {
    text: 'Eu já tinha visto muita coisa sobre IA, mas faltava alguém mostrar o caminho de forma organizada. Saí com mais clareza e entendendo melhor como começar do jeito certo.',
    author: 'Líder de Operações',
    role: 'Gestor',
  },
];

export default function SocialProof() {
  return (
    <section className="py-32 bg-[#07091a] relative overflow-hidden" id="prova-social">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
      >
        10
      </span>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-label uppercase tracking-[0.2em] text-xs font-bold block mb-4">
            Depoimentos
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white leading-[1.08]">
            O que já estão dizendo sobre a forma como ensinamos e aplicamos isso na prática
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="relative rounded-[2rem] border border-white/6 bg-[#0d1018] px-10 py-11 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute top-9 right-9 flex h-14 w-14 items-center justify-center rounded-xl border border-[#3c4260] bg-[#161a28] text-[#5c648c]">
                <MessageSquareQuote size={28} strokeWidth={2.2} />
              </div>

              <p className="pr-16 text-[1.06rem] leading-[1.75] text-white italic font-light">
                "{test.text}"
              </p>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-[1.02rem] font-semibold text-[#aebcff]">{test.author}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/45 font-bold">
                  — {test.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
