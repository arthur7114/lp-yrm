import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, ShieldCheck, Target } from 'lucide-react';
import Spline from '@splinetool/react-spline';

class SplineErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

export default function Hero() {
  const handleSplineLoad = (splineApp) => {
    try {
      // Remove the Spline WebGL scene background
      splineApp.setBackground({ r: 0, g: 0, b: 0, a: 0 });
    } catch (e) { /* silent */ }

    // Also target the canvas DOM element directly — most reliable approach
    const canvas = document.querySelector('#spline-hero canvas');
    if (canvas) {
      canvas.style.background = 'transparent';
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">

      {/* ── Spline — lateral direita, usa mask-image para desaparecer nas bordas ── */}
      <div
        id="spline-hero"
        className="absolute right-0 top-0 bottom-0 w-[65%] z-0 pointer-events-none"
        style={{
          overflow: 'hidden',
          // Mask fades the left edge smoothly so no hard container border shows
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 35%, black 55%)',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 35%, black 55%)',
        }}
      >
        <SplineErrorBoundary>
          <Spline
            scene="https://prod.spline.design/eCIdH1ScJjqkl2qd/scene.splinecode"
            onLoad={handleSplineLoad}
            style={{ width: '100%', height: '100%', display: 'block' }}
          />
        </SplineErrorBoundary>
      </div>

      {/* ── Background ambient glow apenas ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[160px] opacity-30 animate-pulse" />
      </div>

      {/* ── Content — left column ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-40">
        <div className="max-w-xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(184,195,255,0.8)]" />
            <span className="text-xs font-label uppercase tracking-widest text-primary-fixed-dim">Mentoria YRM Strategy Lab</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 mb-6 leading-[1.2]"
          >
            Tire sua solução com IA do papel.
          </motion.h1>

          {/* Sub-headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-white max-w-xl mb-5 font-medium leading-snug"
          >
            Com acompanhamento prático, ao vivo e aplicado ao seu projeto.
          </motion.h2>

          {/* Body  */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed font-light"
          >
            Uma mentoria em grupo para líderes, autônomos e pequenos empresários
            que já têm uma dor real — e querem construir com IA, automações e lógica
            agent-first com direção de quem já faz isso na prática.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            {/* PRIMARY CTA — Animated gradient + shimmer shimmer on hover */}
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.975 }}
              className="group relative overflow-hidden cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-headline font-semibold text-sm text-on-primary whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070e]"
              style={{
                background: 'linear-gradient(135deg, #b8c3ff 0%, #8b9eff 50%, #6b7fe4 100%)',
                boxShadow: '0 0 20px rgba(184,195,255,0.3), 0 4px 15px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(184,195,255,0.55), 0 8px 25px rgba(0,0,0,0.4)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(184,195,255,0.3), 0 4px 15px rgba(0,0,0,0.3)'}
            >
              {/* Shimmer overlay */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
              <Zap size={18} className="shrink-0" />
              <span>Quero entrar para a próxima turma</span>
            </motion.button>

            {/* SECONDARY CTA — Glass border, arrow reveals on hover */}
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.975 }}
              className="group cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-headline font-semibold text-sm text-on-surface whitespace-nowrap border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070e]"
            >
              <span>Ver como a mentoria funciona</span>
              {/* Arrow slides in from left on hover */}
              <svg
                className="shrink-0 w-5 h-5 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Microcopy pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-label uppercase tracking-wider text-on-surface-variant/70"
          >
            <span className="flex items-center gap-2"><Target size={14} className="text-primary" /> 8 encontros ao vivo</span>
            <span className="flex items-center gap-2"><Users size={14} className="text-primary" /> acompanhamento em grupo</span>
            <span className="flex items-center gap-2"><Zap size={14} className="text-primary" /> foco em projeto real</span>
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-primary" /> vagas limitadas</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
