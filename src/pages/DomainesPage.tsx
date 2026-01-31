import React from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Pickaxe, Droplets, Leaf, HardHat, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const domaines = [
  {
    icon: Pickaxe,
    title: "Géotechnique",
    description: "Études de sol approfondies incluant sondages carottés, essais pressiométriques, pénétrométriques et analyse de la capacité portante des sols pour vos projets de construction.",
    details: [
      "Sondages carottés et destructifs",
      "Essais pressiométriques Ménard",
      "Essais au pénétromètre statique/dynamique",
      "Études de fondations",
      "Reconnaissance géologique",
    ],
  },
  {
    icon: Droplets,
    title: "Hydrogéologie",
    description: "Recherche et exploitation des ressources en eau souterraine. Études hydrogéologiques complètes pour l'identification des nappes phréatiques.",
    details: [
      "Études hydrogéologiques",
      "Prospection géophysique",
      "Diagraphies de forages",
      "Tests de pompage",
      "Modélisation des aquifères",
    ],
  },
  {
    icon: Leaf,
    title: "Environnement",
    description: "Évaluations d'impact environnemental, études de pollution des sols et des eaux, conformité aux réglementations environnementales tunisiennes.",
    details: [
      "Études d'impact environnemental",
      "Diagnostic de pollution",
      "Dépollution des sites",
      "Audit environnemental",
      "Suivi de la qualité des eaux",
    ],
  },
  {
    icon: HardHat,
    title: "Travaux Spéciaux",
    description: "Conception et réalisation de travaux de génie civil spécialisés : fondations profondes, consolidation des sols, drainage et terrassements.",
    details: [
      "Micropieux et pieux forés",
      "Injection de consolidation",
      "Parois moulées",
      "Tirants d'ancrage",
      "Drainage et rabattement",
    ],
  },
];

export default function DomainesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedTitle
            label="Notre Expertise"
            title="Domaines d'Activités"
            highlightedWord="Activités"
            subtitle="Découvrez les différents domaines dans lesquels EGG excelle depuis plus de 12 ans d'expérience en Tunisie."
          />
        </div>
      </section>

      {/* Domaines Grid */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {domaines.map((domaine, index) => (
              <motion.div
                key={domaine.title}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 rounded-3xl bg-card border border-border/30 shadow-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                >
                  <domaine.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {domaine.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {domaine.description}
                </p>

                {/* Details List */}
                <ul className="space-y-3">
                  {domaine.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + detailIndex * 0.05 }}
                      className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:shadow-glow transition-all"
              >
                Voir nos Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
