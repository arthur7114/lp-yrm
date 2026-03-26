import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'Formato', href: '#modelo' },
  { label: 'Módulos', href: '#jornada' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0c1324]/40 backdrop-blur-xl border-b border-white/5 shadow-[0px_20px_40px_rgba(220,225,251,0.02)] transition-all">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center shrink-0"
        >
          <img
            src="/logo.png"
            alt="YRM Strategy Lab"
            className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-95 drop-shadow-[0_0_18px_rgba(184,195,255,0.18)]"
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-[#dcdef1] opacity-70 hover:opacity-100 hover:text-white transition-colors font-headline font-bold tracking-tight text-sm"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#lista-espera"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary/90 text-on-primary px-6 py-2 rounded-lg font-headline font-bold tracking-tight shadow-[0_0_15px_rgba(184,195,255,0.2)] hover:shadow-[0_0_25px_rgba(184,195,255,0.4)] transition-all"
          >
            Quero entrar
          </motion.a>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0c1324] border-b border-white/5"
          >
            <div className="flex flex-col px-8 py-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#dcdef1] font-headline font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#lista-espera"
                className="bg-primary text-on-primary px-6 py-3 rounded-lg font-headline font-bold w-full mt-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Quero entrar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
