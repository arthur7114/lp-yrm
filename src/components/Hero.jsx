import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Target, ShieldCheck } from 'lucide-react';

const WEBHOOK_URL = 'https://yves-tech-n8n-mkt.zituks.easypanel.host/webhook/lead-inscrito';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Hero() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const formatWhatsapp = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);

    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const isValidWhatsapp = (value) => {
    const digits = value.replace(/\D/g, '');

    if (!(digits.length === 10 || digits.length === 11)) return false;

    const ddd = Number(digits.slice(0, 2));
    if (ddd < 11 || ddd > 99) return false;

    if (digits.length === 11 && digits[2] !== '9') return false;

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const normalizedEmail = form.email.trim().toLowerCase();

    if (!form.name.trim()) {
      setSubmitError('Informe seu nome.');
      return;
    }

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      setSubmitError('Informe um e-mail válido.');
      return;
    }

    if (!isValidWhatsapp(form.whatsapp)) {
      setSubmitError('Informe um WhatsApp válido com DDD.');
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError('');

      const payload = {
        name: form.name.trim(),
        email: normalizedEmail,
        whatsapp: form.whatsapp.replace(/\D/g, ''),
        source: 'lp-mentoria',
        submitted_at: new Date().toISOString(),
        page_url: window.location.href,
      };

      const params = new URLSearchParams(payload);
      const response = await fetch(`${WEBHOOK_URL}?${params.toString()}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Webhook request failed');
      }

      window.location.href = '/obrigado';
    } catch (error) {
      setSubmitError('Não foi possível enviar agora. Tente novamente em instantes.');
      setIsSubmitting(false);
    }
  };

  const bullets = [
    { icon: Zap, label: 'Automação real com IA aplicada ao seu negócio' },
    { icon: Target, label: 'Desenvolvimento com vibe code e ferramentas profissionais' },
    { icon: Users, label: 'Aulas presenciais + online com acompanhamento individual' },
    { icon: ShieldCheck, label: 'Produto entregue ao final do programa' },
  ];

  return (
    <section id="lista-espera" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-8%] w-[38%] h-[36%] bg-primary/10 rounded-full blur-[160px] opacity-35" />
        <div className="absolute bottom-[-10%] right-[-8%] w-[34%] h-[34%] bg-white/5 rounded-full blur-[180px] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,195,255,0.08),transparent_32%),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:100%_100%,56px_56px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_420px] gap-12 xl:gap-16 items-center">
          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(184,195,255,0.8)]" />
              <span className="text-xs font-label uppercase tracking-widest text-primary-fixed-dim">Mentoria YRM Strategy Lab</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-headline text-5xl md:text-6xl lg:text-[5.2rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 mb-8 leading-[0.98]"
            >
              Pare de estudar IA.
              <span className="text-primary"> Comece a construir </span>
              produtos com ela.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-light"
            >
              Uma mentoria híbrida, prática e orientada a resultado em que você entra com uma ideia e sai com um produto digital funcionando.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              className="space-y-3"
            >
              {bullets.map(({ icon: Icon, label }, i) => (
                <li key={i} className="flex items-center gap-3 text-base text-on-surface-variant">
                  <Icon size={16} className="text-primary shrink-0" />
                  <span>{label}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.aside
            id="hero-form"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/8 bg-white/[0.04] backdrop-blur-xl p-8 md:p-9 shadow-[0_30px_80px_rgba(0,0,0,0.34)]"
          >
            <p className="text-primary font-label uppercase tracking-[0.22em] text-xs font-bold mb-4">
              Entre na lista de espera
            </p>
            <h2 className="font-headline text-3xl md:text-[2.15rem] font-bold text-white leading-[1.05] mb-4">
              Garanta seu aviso quando a próxima turma abrir.
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed mb-8">
              Preencha seus dados para receber a abertura da turma em primeira mão.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                value={form.name}
                required
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-on-surface-variant/55 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-200"
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={form.email}
                required
                onChange={(e) => {
                  setSubmitError('');
                  setForm((f) => ({ ...f, email: e.target.value }));
                }}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-on-surface-variant/55 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-200"
              />
              <input
                type="tel"
                placeholder="Seu WhatsApp"
                value={form.whatsapp}
                required
                inputMode="numeric"
                autoComplete="tel"
                onChange={(e) => {
                  setSubmitError('');
                  setForm((f) => ({ ...f, whatsapp: formatWhatsapp(e.target.value) }));
                }}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-on-surface-variant/55 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-200"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                disabled={isSubmitting}
                className="group relative overflow-hidden w-full cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-headline font-semibold text-sm text-on-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #b8c3ff 0%, #8b9eff 50%, #6b7fe4 100%)',
                  boxShadow: '0 0 24px rgba(184,195,255,0.32), 0 4px 18px rgba(0,0,0,0.28)',
                }}
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
                <Zap size={16} className="shrink-0" />
                <span>{isSubmitting ? 'Enviando...' : 'Quero ser avisado'}</span>
              </motion.button>
            </form>

            {submitError ? (
              <p className="mt-4 text-sm text-red-300">{submitError}</p>
            ) : null}

            <p className="mt-4 text-[11px] text-on-surface-variant/55 font-label uppercase tracking-widest">
              Vagas limitadas | Sem spam | Apenas para a próxima turma
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
