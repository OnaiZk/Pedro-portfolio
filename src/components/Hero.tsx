"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-svh flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-24 pt-28 pb-16">
      <div className="max-w-5xl w-full mx-auto">

        {/* Layout: coluna no mobile, linha no md+ */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16">

          {/* ── Texto ── */}
          <div className="flex-1 min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-5 sm:mb-6"
            >
              Buscando primeira oportunidade &mdash; Estudante de Engenharia de Software
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[15vw] sm:text-7xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tighter leading-[0.9] mb-7 sm:mb-8"
            >
              PEDRO
              <br />
              <span className="text-gray-500">AUGUSTO.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="max-w-xl text-base sm:text-lg font-medium text-gray-400 leading-relaxed mb-10 sm:mb-12"
            >
              Apaixonado por tecnologia e em constante aprendizado. Curso Engenharia de Software
              na Universidade Cruzeiro do Sul e busco minha primeira experiência para transformar
              código em impacto real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                id="hero-view-projects"
                href="#work"
                className="inline-flex items-center justify-center px-7 py-4 bg-foreground text-background font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-gray-800 active:scale-[0.98] transition-all text-center"
              >
                Ver Projetos
              </a>
              <a
                id="hero-contact"
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-4 border border-muted font-bold text-xs sm:text-sm uppercase tracking-widest hover:border-foreground active:scale-[0.98] transition-all text-center"
              >
                Entrar em Contato
              </a>
            </motion.div>
          </div>

          {/* ── Foto ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 flex justify-center md:justify-end"
          >
            {/* Moldura com detalhe geométrico */}
            <div className="relative">
              {/* Borda deslocada decorativa */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-muted pointer-events-none" />

              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden">
                <Image
                  src="/pedro.jpg"
                  alt="Pedro Augusto — Estudante de Engenharia de Software"
                  fill
                  priority
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
