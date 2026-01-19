import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Target } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expertise Reconnue",
    description: "Depuis 2011, nous accompagnons vos projets géotechniques en Tunisie.",
  },
  {
    icon: Users,
    title: "Équipe Qualifiée",
    description: "Ingénieurs et techniciens hautement qualifiés et certifiés.",
  },
  {
    icon: Target,
    title: "Précision Garantie",
    description: "Équipements de pointe pour des résultats fiables et précis.",
  },
];

const highlights = [
  "Études géotechniques complètes",
  "Forages et sondages de reconnaissance",
  "Essais in-situ et en laboratoire",
  "Rapports techniques détaillés",
  "Conseil et assistance technique",
  "Respect des normes internationales",
];

export function AboutSection() {
  return (
    <section id="apropos" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              À Propos de Nous
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Votre Partenaire en{" "}
              <span className="text-gradient">Géotechnique</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              <strong className="text-foreground">EGG</strong> - Entreprises
              Géologiques et Géotechniques est une société tunisienne spécialisée
              dans les études de sol, les forages et les travaux spéciaux. Depuis
              <strong className="text-primary"> 2011</strong>, nous avons accompagné des centaines de projets de
              construction et d'infrastructure à travers le pays.
            </p>

            {/* Highlights List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => {
                const element = document.querySelector("#contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-glow"
            >
              Demander un Devis
              <svg
                width="20"
                height="20"
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
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
                whileHover={{ x: 10 }}
                className="group flex gap-6 p-6 rounded-2xl bg-background/50 border border-border/30 transition-all duration-300 hover:border-primary/30 hover:shadow-glow cursor-pointer"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-terracotta-gradient shadow-glow"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">
                    2011
                  </div>
                  <div className="text-sm text-primary-foreground/80">Depuis</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">
                    500+
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    Projets
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">
                    100%
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
