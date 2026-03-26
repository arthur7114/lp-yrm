import React from 'react';
import { motion } from 'framer-motion';

const footerLinks = [
  { label: 'Política de privacidade', href: '/politica-de-privacidade' },
  { label: 'Instagram', href: 'https://www.instagram.com/yrmstrategylab/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/yrm-strategy-lab/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@YRMStrategyLab' },
];

export default function CtaFooter() {
  return (
    <>
      <section className="py-40 bg-[#05070e] overflow-hidden relative border-t border-white/5" id="inscricao">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-6 right-8 font-headline font-black text-[18vw] leading-none text-white/[0.025] tracking-tight"
        >
          11
        </span>

        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
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
              Se você quer construir algo real com IA, essa é a hora.
            </h2>
            <p className="text-xl md:text-2xl text-on-surface-variant mb-14 font-light max-w-3xl mx-auto leading-relaxed">
              O mercado não está esperando você aprender.
              <br />
              Está premiando quem executa.
            </p>

            <div className="flex flex-col items-center gap-8">
              <motion.a
                href="#lista-espera"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-on-primary px-12 py-5 rounded-full font-headline font-black text-xl hover:shadow-[0_0_40px_rgba(184,195,255,0.4)] transition-all shadow-2xl flex items-center gap-3"
              >
                Quero participar da mentoria
              </motion.a>

              <div className="flex flex-col items-center gap-2 text-on-surface-variant/80 text-sm font-label uppercase tracking-widest font-bold">
                <span className="text-red-400">Turma com vagas limitadas</span>
                <span>Início em breve | inscrições por tempo limitado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative w-full border-t border-white/5 bg-[#05070e] z-10">
        <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col lg:flex-row items-center justify-between gap-8 text-sm text-on-surface-variant/70">
          <a href="/" className="flex items-center justify-center shrink-0">
            <img
              src="/logo.png"
              alt="YRM Strategy Lab"
              className="h-10 w-auto object-contain brightness-0 invert opacity-95 drop-shadow-[0_0_18px_rgba(184,195,255,0.16)]"
            />
          </a>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-bold uppercase tracking-widest text-xs text-center">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-xs uppercase tracking-widest text-center">
            © {new Date().getFullYear()} YRM Strategy Lab. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
