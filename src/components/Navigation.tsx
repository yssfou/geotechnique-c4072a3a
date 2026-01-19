import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À Propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection("#accueil")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3"
        >
          <span className="text-3xl font-bold text-gradient tracking-tight">
            EGG
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollToSection("#contact")}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-glow"
        >
          Nous Contacter
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium"
              >
                Nous Contacter
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
