import React from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Truck, FlaskConical, Users, GraduationCap, Wrench, ShieldCheck } from "lucide-react";

const equipements = [
  {
    icon: Truck,
    title: "Parc de Foreuses",
    count: "6+",
    description: "Foreuses hydrauliques modernes pour tous types de terrains",
    details: [
      "Foreuses rotary pour sondages profonds",
      "Sondeuses carottières diamantées",
      "Foreuses à percussion",
      "Foreuses sur chenilles tout-terrain",
    ],
  },
  {
    icon: FlaskConical,
    title: "Laboratoire d'Essais",
    count: "100%",
    description: "Laboratoire équipé pour analyses géotechniques complètes",
    details: [
      "Essais de mécanique des sols",
      "Analyses granulométriques",
      "Essais de cisaillement",
      "Essais oedométriques",
    ],
  },
  {
    icon: Wrench,
    title: "Équipements In-Situ",
    count: "10+",
    description: "Matériel de pointe pour essais sur site",
    details: [
      "Pressiomètres Ménard",
      "Pénétromètres statiques CPT",
      "Pénétromètres dynamiques",
      "Scissomètres de chantier",
    ],
  },
];

const equipe = [
  {
    icon: Users,
    title: "Équipe Technique",
    count: "25+",
    description: "Professionnels qualifiés et expérimentés",
  },
  {
    icon: GraduationCap,
    title: "Ingénieurs Spécialisés",
    count: "8",
    description: "Experts en géotechnique et environnement",
  },
  {
    icon: ShieldCheck,
    title: "Certifications",
    count: "ISO",
    description: "Normes de qualité internationales",
  },
];

export default function MoyensPage() {
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
            label="Nos Ressources"
            title="Moyens Techniques"
            highlightedWord="Techniques"
            subtitle="Des équipements modernes et une équipe qualifiée pour garantir la qualité et la précision de nos interventions."
          />
        </div>
      </section>

      {/* Equipements Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Équipements <span className="text-gradient">de Pointe</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre parc matériel moderne nous permet de réaliser tous types de missions géotechniques.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {equipements.map((equip, index) => (
              <motion.div
                key={equip.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 rounded-3xl bg-card border border-border/30 shadow-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow"
              >
                {/* Icon and Count */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <equip.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.3 + index * 0.1 }}
                    className="text-4xl font-bold text-primary"
                  >
                    {equip.count}
                  </motion.span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {equip.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {equip.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {equip.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + detailIndex * 0.05 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Notre <span className="text-gradient">Équipe</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des professionnels passionnés et qualifiés au service de vos projets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {equipe.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl bg-background/50 border border-border/30 transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                >
                  <item.icon className="w-10 h-10 text-primary" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 + index * 0.1 }}
                  className="text-5xl font-bold text-primary mb-2"
                >
                  {item.count}
                </motion.div>

                <h4 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-terracotta-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2011", label: "Année de création" },
              { value: "1000+", label: "Projets réalisés" },
              { value: "25+", label: "Employés" },
              { value: "100%", label: "Satisfaction client" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
