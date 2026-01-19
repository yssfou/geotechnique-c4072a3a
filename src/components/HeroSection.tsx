import React from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-drilling.jpg";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Geotechnical drilling site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-secondary/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Experts en Géotechnique depuis 1990
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Entreprises</span>
            <br />
            <span className="text-gradient">Géologiques &</span>
            <br />
            <span className="text-foreground">Géotechniques</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Spécialistes en sondages géotechniques, forages d'eau, études
            environnementales et travaux spéciaux. Votre partenaire de confiance
            en Tunisie.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => scrollToSection("#services")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-glow"
            >
              Découvrir nos Services
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-border/50 bg-secondary/30 backdrop-blur-sm text-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-secondary/50"
            >
              Contactez-nous
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "30+", label: "Années d'Expérience" },
              { value: "500+", label: "Projets Réalisés" },
              { value: "100%", label: "Clients Satisfaits" },
              { value: "24/7", label: "Support Disponible" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
