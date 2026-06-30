"use client";

import { motion } from "framer-motion";

const history = [
  {
    role: "Estudante",
    company: "Universidade Cruzeiro do Sul",
    period: "Mar 2026 — Ago 2029",
    description:
      "Bacharelado em Engenharia de Software. Disciplinas cursadas incluem Algoritmos e Estruturas de Dados, Lógica de Programação, Fundamentos de Banco de Dados e Desenvolvimento Web.",
  },
];

export default function WorkHistory() {
  return (
    <section id="experience" className="py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-24 border-t border-muted bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-2">Carreira</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">Formação</h2>
          <div className="w-12 h-[2px] bg-foreground" />
        </motion.div>

        <div className="space-y-0">
          {history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] border-t border-muted py-8 sm:py-10 gap-3 sm:gap-8 md:gap-12 group"
            >
              <div>
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">
                  {item.period}
                </p>
                <p className="font-bold text-xs sm:text-sm uppercase tracking-wide mt-1.5 sm:mt-2 group-hover:text-foreground transition-colors">
                  {item.company}
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2 sm:mb-3">{item.role}</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}

          {/* "Próximo capítulo" call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] border-t border-muted py-8 sm:py-10 gap-3 sm:gap-8 md:gap-12"
          >
            <div>
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">Em aberto</p>
              <p className="font-bold text-xs sm:text-sm uppercase tracking-wide mt-1.5 sm:mt-2 text-gray-500">Sua empresa?</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2 sm:mb-3">Próxima Experiência</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Estou ativamente buscando estágio ou trainee em desenvolvimento de software. Se você vê
                potencial aqui, quero muito conversar.
              </p>
            </div>
          </motion.div>

          {/* Bottom border */}
          <div className="border-t border-muted" />
        </div>
      </div>
    </section>
  );
}
