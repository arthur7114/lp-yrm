import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#05070e] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[12%] left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[8%] right-[10%] w-80 h-80 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:56px_56px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-8 min-h-screen flex items-center justify-center">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full rounded-[2rem] border border-white/8 bg-white/[0.03] backdrop-blur-xl p-10 md:p-14 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        >
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/12 border border-primary/20">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>

          <p className="text-primary font-label uppercase tracking-[0.24em] text-xs font-bold mb-4">
            Cadastro recebido
          </p>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold leading-[1.02] tracking-tight mb-6">
            Obrigado pelo interesse.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto">
            Seu contato foi registrado. Agora é só aguardar: você será avisado assim que a próxima turma abrir.
          </p>

          <div className="mt-10 pt-8 border-t border-white/8">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.07] transition-colors"
            >
              Voltar para a página inicial
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
