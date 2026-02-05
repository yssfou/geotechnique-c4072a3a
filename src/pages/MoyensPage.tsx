import React from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Truck, FlaskConical, Users, GraduationCap, Wrench, ShieldCheck, HardHat, ClipboardCheck, Award, HeartHandshake, Target, Shield } from "lucide-react";

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

const equipeDetails = [
  {
    icon: GraduationCap,
    title: "Ingénieurs Géotechniciens",
    count: "8",
    description: "Experts diplômés en géotechnique et géologie, avec une expérience terrain significative.",
  },
  {
    icon: HardHat,
    title: "Techniciens de Terrain",
    count: "12+",
    description: "Équipes formées aux techniques de forage et d'essais, garantissant la qualité des investigations.",
  },
  {
    icon: FlaskConical,
    title: "Laborantins",
    count: "5",
    description: "Spécialistes des essais de laboratoire, assurant la précision des analyses de sol.",
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

const qualityProcedures = [
  {
    icon: ClipboardCheck,
    title: "Contrôle Qualité",
    description: "Chaque étape de nos prestations fait l'objet d'un contrôle qualité rigoureux, de la prise en charge du projet jusqu'à la livraison du rapport final.",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "La sécurité de nos équipes et des sites d'intervention est une priorité absolue. Nos techniciens sont formés aux règles HSE et équipés d'EPI adaptés.",
  },
  {
    icon: Target,
    title: "Calibration",
    description: "Tous nos équipements de mesure sont régulièrement calibrés et entretenus selon les recommandations des fabricants et les normes en vigueur.",
  },
  {
    icon: Award,
    title: "Formation Continue",
    description: "Nos équipes bénéficient de formations régulières pour maintenir et développer leurs compétences techniques et leur connaissance des évolutions normatives.",
  },
];

const values = [
  {
    icon: Target,
    title: "Précision",
    description: "Rigueur scientifique dans toutes nos analyses",
  },
  {
    icon: HeartHandshake,
    title: "Engagement",
    description: "Respect des délais et des engagements",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Recherche permanente de la qualité",
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

      {/* Introduction */}
      <section className="py-20 bg-card relative overflow-hidden">
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
              className="text-3xl font-bold text-foreground mb-6"
            >
              Ressources Techniques et <span className="text-gradient">Humaines</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              EGG dispose d'un parc matériel moderne et diversifié, entretenu régulièrement pour garantir 
              la fiabilité des résultats. Notre équipe pluridisciplinaire combine expertise technique 
              et expérience terrain pour répondre aux exigences les plus élevées.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 150, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl bg-background border border-border/30 shadow-card text-center transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.4 + index * 0.1 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <value.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4"
            >
              Ressources Matérielles
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Équipements de <span className="text-gradient">Pointe</span>
            </motion.h3>
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

      {/* Human Resources Section */}
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
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4"
            >
              Ressources Humaines
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Notre <span className="text-gradient">Équipe</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des professionnels passionnés et qualifiés au service de vos projets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {equipeDetails.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
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

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {equipe.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-background/30 border border-border/20 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon className="w-7 h-7 text-primary" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 + index * 0.1 }}
                  className="text-3xl font-bold text-primary mb-1"
                >
                  {item.count}
                </motion.div>

                <h4 className="text-sm font-bold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Safety Procedures */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4"
            >
              Assurance Qualité
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Qualité et <span className="text-gradient">Sécurité</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des procédures rigoureuses pour garantir l'excellence de nos prestations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {qualityProcedures.map((procedure, index) => (
              <motion.div
                key={procedure.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border/30 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                >
                  <procedure.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {procedure.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {procedure.description}
                  </p>
                </div>
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
