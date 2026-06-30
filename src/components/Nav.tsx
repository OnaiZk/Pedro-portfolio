"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#work" },
  { name: "Carreira", href: "#experience" },
  { name: "Contato", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-6 py-4 transition-colors duration-300",
          scrolled || menuOpen
            ? "bg-background/95 backdrop-blur-md border-b border-muted"
            : "bg-transparent"
        )}
      >
        <a href="#" className="text-lg sm:text-xl font-bold tracking-tighter uppercase z-10">
          Pedro Augusto
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-foreground hover:text-accent relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          id="nav-menu-toggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="md:hidden z-10 flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={cn(
              "block w-6 h-[1.5px] bg-foreground transition-all duration-300 origin-center",
              menuOpen && "rotate-45 translate-y-[7.5px]"
            )}
          />
          <span
            className={cn(
              "block w-6 h-[1.5px] bg-foreground transition-all duration-300",
              menuOpen && "opacity-0 scale-x-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-[1.5px] bg-foreground transition-all duration-300 origin-center",
              menuOpen && "-rotate-45 -translate-y-[7.5px]"
            )}
          />
        </button>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center items-center gap-10 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter text-foreground hover:text-gray-500 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
