"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Linguagens", items: ["JavaScript", "TypeScript", "Python", "Java", "C"] },
  { category: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3"] },
  { category: "Backend", items: ["Node.js", "REST APIs", "SQL", "Git"] },
  { category: "Aprendendo", items: ["Docker", "PostgreSQL", "Testes Automatizados", "Cloud"] },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-24 border-t border-muted bg-background">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

        {/* Left: Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-5 sm:mb-6">Sobre</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-6 sm:mb-8 leading-snug">
            Estudante de Engenharia de Software com vontade de aprender e crescer.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
            Curso Bacharelado em Engenharia de Software na Universidade Cruzeiro do Sul (mar/2026 – ago/2029).
            Ainda no início da minha jornada, busco minha primeira experiência profissional para aplicar e
            expandir o que aprendo na graduação.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Comprometido, comunicativo e com sede de aprender na prática. Estou pronto para contribuir em
            projetos reais, absorver mentoria e crescer junto com uma equipe.
          </p>
        </motion.div>

        {/* Right: Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-5 sm:mb-6">Tecnologias</p>
          <div className="space-y-5 sm:space-y-6">
            {skills.map((group, i) => (
              <div key={i} className="border-t border-muted pt-4">
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-2 sm:mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs sm:text-sm text-foreground px-2 sm:px-3 py-1 border border-muted hover:border-foreground transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
