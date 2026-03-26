import React from 'react';
import { motion } from 'framer-motion';

const CDN = 'https://cdn.simpleicons.org';

const AntigravityIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9" aria-label="Antigravity">
    <path d="M32 10L46 38H18L32 10Z" fill="currentColor" fillOpacity="0.85" />
    <circle cx="32" cy="50" r="7" fill="currentColor" />
  </svg>
);

const ApiWebhookIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9" aria-label="APIs e webhooks">
    <path d="M16 32H48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M38 22L48 32L38 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="20" r="4" fill="currentColor" />
    <circle cx="18" cy="44" r="4" fill="currentColor" />
    <path d="M22 20H30C38 20 42 24 42 32C42 40 38 44 30 44H22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const tools = [
  {
    name: 'Claude',
    color: '#d97757',
    desc: 'raciocínio e copiloto',
    imgDim: `${CDN}/anthropic/ffffff`,
    imgColored: `${CDN}/anthropic/d97757`,
  },
  {
    name: 'Antigravity',
    color: '#b8c3ff',
    desc: 'orquestração aplicada',
    CustomIcon: AntigravityIcon,
  },
  {
    name: 'Supabase',
    color: '#3ecf8e',
    desc: 'backend e dados',
    imgDim: `${CDN}/supabase/ffffff`,
    imgColored: `${CDN}/supabase/3ecf8e`,
  },
  {
    name: 'ChatGPT',
    color: '#00a67e',
    desc: 'modelos e apoio',
    imgDim: `${CDN}/openai/ffffff`,
    imgColored: `${CDN}/openai/00a67e`,
  },
  {
    name: 'n8n',
    color: '#ea4b71',
    desc: 'automações e fluxos',
    imgDim: `${CDN}/n8n/ffffff`,
    imgColored: `${CDN}/n8n/ea4b71`,
  },
  {
    name: 'APIs e webhooks',
    color: '#f97316',
    desc: 'integração real',
    CustomIcon: ApiWebhookIcon,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 48, damping: 18 } },
};

export default function ToolsSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#07091a]" id="ferramentas">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
      >
        06
      </span>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16 max-w-3xl"
        >
          <motion.span variants={fadeUp} className="text-primary font-label uppercase tracking-[0.2em] text-xs font-bold block mb-4">
            Ferramentas Utilizadas
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-headline text-4xl md:text-5xl font-extrabold text-white leading-[1.1]">
            Você não aprende teoria.
            <span className="text-primary"> Aprende stack profissional.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-on-surface-variant font-light leading-relaxed">
            Durante a mentoria você irá trabalhar com ferramentas utilizadas no mercado real.
            Não simulações. Não playgrounds. Workflows reais sendo construídos.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
        >
          {tools.map(({ name, color, desc, CustomIcon, imgDim, imgColored }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                {CustomIcon ? (
                  <div className="opacity-30 group-hover:opacity-100 transition-all duration-300" style={{ color }}>
                    <CustomIcon />
                  </div>
                ) : (
                  <>
                    <img
                      src={imgDim}
                      alt={name}
                      className="w-9 h-9 object-contain absolute inset-0 m-auto opacity-25 group-hover:opacity-0 transition-opacity duration-300"
                      loading="lazy"
                    />
                    <img
                      src={imgColored}
                      alt=""
                      aria-hidden="true"
                      className="w-9 h-9 object-contain absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </>
                )}
              </div>
              <p className="font-headline font-bold text-sm text-white/50 group-hover:text-white transition-colors duration-300 text-center leading-tight">
                {name}
              </p>
              <p className="text-on-surface-variant/40 group-hover:text-on-surface-variant/70 text-[10px] font-label uppercase tracking-wider text-center transition-colors duration-300">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-on-surface-variant text-base font-light max-w-3xl"
        >
          Além das ferramentas, você vê a lógica por trás dos fluxos, integrações e webhooks que sustentam a operação.
        </motion.p>
      </div>
    </section>
  );
}
