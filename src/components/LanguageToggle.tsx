import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 p-1 rounded-full bg-secondary/50 border border-border/40",
        className
      )}
      role="group"
      aria-label="Language selector"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLang("fr")}
        aria-label="Français"
        aria-pressed={lang === "fr"}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center text-base leading-none transition-all",
          lang === "fr"
            ? "bg-primary/20 ring-2 ring-primary shadow-sm"
            : "opacity-60 hover:opacity-100"
        )}
      >
        <span aria-hidden>🇫🇷</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLang("en")}
        aria-label="English"
        aria-pressed={lang === "en"}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center text-base leading-none transition-all",
          lang === "en"
            ? "bg-primary/20 ring-2 ring-primary shadow-sm"
            : "opacity-60 hover:opacity-100"
        )}
      >
        <span aria-hidden className="text-xs font-bold">EN</span>
      </motion.button>
    </div>
  );
}