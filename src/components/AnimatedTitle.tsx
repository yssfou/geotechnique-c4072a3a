import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  label?: string;
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function AnimatedTitle({
  label,
  title,
  highlightedWord,
  subtitle,
  className,
  centered = true,
}: AnimatedTitleProps) {
  // Split title to highlight specific word
  const renderTitle = () => {
    if (!highlightedWord) {
      return <span className="text-foreground">{title}</span>;
    }

    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="text-gradient">{highlightedWord}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, staggerChildren: 0.15 }}
      className={cn(
        "mb-16",
        centered && "text-center",
        className
      )}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="inline-block text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4"
        >
          {label}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 50, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 1.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 leading-tight"
      >
        {renderTitle()}
      </motion.h2>

      {centered && (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full origin-left"
        />
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className={cn(
            "text-muted-foreground text-lg md:text-xl leading-relaxed",
            centered && "max-w-3xl mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
