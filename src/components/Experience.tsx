"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfólio Pessoal",
    description:
      "Este próprio site — desenvolvido com Next.js, TypeScript e Framer Motion. Foco em design limpo, performance e código organizado.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    year: "2026",
  },
  {
    title: "To-Do App Full Stack",
    description:
      "Aplicação de gerenciamento de tarefas com autenticação, CRUD completo e persistência em banco de dados. Projeto de estudo em Node.js e React.",
    tech: ["React", "Node.js", "SQLite", "REST API"],
    year: "2026",
  },
  {
    title: "Calculadora em Python",
    description:
      "Primeiro projeto de programação — calculadora com interface em terminal, cobrindo lógica condicional, funções e tratamento de erros.",
    tech: ["Python"],
    year: "2025",
  },
];

export default function Experience() {
  return (
    <section id="work" className="py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-24 border-t border-muted bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            Projetos
          </h2>
          <div className="w-12 h-1 bg-foreground" />
        </motion.div>

        {/* 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-muted bg-background hover:bg-muted/30 active:bg-muted/50 transition-colors p-6 sm:p-8 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex justify-between items-start mb-4 sm:mb-6 gap-2">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-gray-500 shrink-0">{project.year}</span>
                </div>
                <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] sm:text-xs uppercase tracking-wider bg-muted text-foreground px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
