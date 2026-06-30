"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.5-3.8 4.9 4.9 0 0 0 .1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a4.9 4.9 0 0 0 .1 3.8A5.2 5.2 0 0 0 3 11.8c0 5.77 3.34 6.79 6.5 7.17a4.8 4.8 0 0 0-1 3.03V22" />
      <path d="M9 20c-5 1.5-5-2.5-7-3" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-24 bg-foreground text-background border-t border-muted"
    >
      <div className="max-w-5xl mx-auto">
        {/* Top: heading + icons — stack on mobile, row on md+ */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-4 sm:mb-6 text-background">
              Vamos Construir.
            </h2>
            <p className="max-w-md text-background/70 font-medium text-sm sm:text-base md:text-lg leading-relaxed">
              Atualmente estou aberto a novas oportunidades. Se você tiver alguma dúvida ou apenas quiser
              dizer olá, farei o possível para responder o mais breve possível.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 sm:gap-6 shrink-0"
          >
            <a
              id="contact-github"
              href="#"
              aria-label="GitHub"
              className="p-3 sm:p-4 border border-background/20 text-background hover:bg-background hover:text-foreground active:scale-95 transition-all group"
            >
              <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              id="contact-linkedin"
              href="#"
              aria-label="LinkedIn"
              className="p-3 sm:p-4 border border-background/20 text-background hover:bg-background hover:text-foreground active:scale-95 transition-all group"
            >
              <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              id="contact-email"
              href="mailto:contact@example.com"
              aria-label="E-mail"
              className="p-3 sm:p-4 border border-background/20 text-background hover:bg-background hover:text-foreground active:scale-95 transition-all group"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 sm:mt-20 md:mt-24 pt-6 sm:pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-background/50 font-mono text-[10px] sm:text-xs uppercase tracking-wider">
          <span>© {new Date().getFullYear()} Pedro Augusto</span>
          <span>Status do Sistema: Online</span>
        </div>
      </div>
    </section>
  );
}
