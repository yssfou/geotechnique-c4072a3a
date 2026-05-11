import React from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Truck, FlaskConical, Users, GraduationCap, Wrench, ShieldCheck, HardHat, ClipboardCheck, Award, HeartHandshake, Target, Shield } from "lucide-react";
import { useT } from "@/contexts/LanguageContext";

export default function MoyensPage() {
  const t = useT();
  const equipements = [
    {
      icon: Truck,
      title: t("Parc de Foreuses", "Drilling Rig Fleet"),
      count: "11+",
      description: t("Foreuses hydrauliques modernes pour tous types de terrains", "Modern hydraulic drilling rigs for all terrain types"),
      details: [
        t("Toutes les sondeuses sont hydrauliques", "All drilling rigs are hydraulic"),
      ],
    },
    {
      icon: FlaskConical,
      title: t("Laboratoire d'Essais", "Testing Laboratory"),
      count: "100%",
      description: t("Laboratoire équipé pour analyses géotechniques complètes", "Laboratory equipped for complete geotechnical analyses"),
      details: [
        t("Essais de mécanique des sols", "Soil mechanics tests"),
        t("Analyses granulométriques", "Particle-size analysis"),
        t("Essais d'identification", "Identification tests"),
        t("Oedomètre, cisaillement, Proctor et CBR", "Oedometer, shear, Proctor and CBR"),
      ],
    },
    {
      icon: Wrench,
      title: t("Équipements In-Situ", "In-Situ Equipment"),
      count: "10+",
      description: t("Matériel de pointe pour essais sur site", "State-of-the-art equipment for on-site testing"),
      details: [
        t("Pressiomètres Ménard", "Ménard pressuremeters"),
        t("Pénétromètres statiques CPT", "CPT static penetrometers"),
        t("Pénétromètres dynamiques", "Dynamic penetrometers"),
        t("Scissomètres de chantier", "Field vane testers"),
      ],
    },
  ];
  const equipeDetails = [
    { icon: GraduationCap, title: t("Ingénieurs Géotechniciens", "Geotechnical Engineers"), count: "3", description: t("Experts diplômés en géotechnique et géologie, avec une expérience terrain significative.", "Qualified experts in geotechnics and geology with significant field experience.") },
    { icon: HardHat, title: t("Techniciens de Terrain", "Field Technicians"), count: "2", description: t("Équipes formées aux techniques de forage et d'essais, garantissant la qualité des investigations.", "Teams trained in drilling and testing techniques, ensuring quality investigations.") },
    { icon: FlaskConical, title: t("Laborantins", "Lab Technicians"), count: "3", description: t("Spécialistes des essais de laboratoire, assurant la précision des analyses de sol.", "Laboratory testing specialists ensuring the accuracy of soil analyses.") },
  ];
  const equipe = [
    { icon: Users, title: t("Équipe Technique", "Technical Team"), count: "18", description: t("Professionnels qualifiés et expérimentés", "Qualified, experienced professionals") },
    { icon: GraduationCap, title: t("Ingénieurs Spécialisés", "Specialized Engineers"), count: "1", description: t("Experts en géotechnique et environnement", "Experts in geotechnics and environment") },
  ];
  const qualityProcedures = [
    { icon: ClipboardCheck, title: t("Contrôle Qualité", "Quality Control"), description: t("Chaque étape de nos prestations fait l'objet d'un contrôle qualité rigoureux, de la prise en charge du projet jusqu'à la livraison du rapport final.", "Every step of our services undergoes rigorous quality control, from project intake to delivery of the final report.") },
    { icon: Shield, title: t("Sécurité", "Safety"), description: t("La sécurité de nos équipes et des sites d'intervention est une priorité absolue. Nos techniciens sont formés aux règles HSE et équipés d'EPI adaptés.", "The safety of our teams and worksites is an absolute priority. Our technicians are trained in HSE rules and equipped with appropriate PPE.") },
    { icon: Target, title: t("Calibration", "Calibration"), description: t("Tous nos équipements de mesure sont régulièrement calibrés et entretenus selon les recommandations des fabricants et les normes en vigueur.", "All measurement equipment is regularly calibrated and maintained per manufacturer recommendations and applicable standards.") },
    { icon: Award, title: t("Formation Continue", "Continuous Training"), description: t("Nos équipes bénéficient de formations régulières pour maintenir et développer leurs compétences techniques et leur connaissance des évolutions normatives.", "Our teams benefit from regular training to maintain and develop their technical skills and knowledge of evolving standards.") },
  ];
  const values = [
    { icon: Target, title: t("Précision", "Precision"), description: t("Rigueur scientifique dans toutes nos analyses", "Scientific rigor in all our analyses") },
    { icon: HeartHandshake, title: t("Engagement", "Commitment"), description: t("Respect des délais et des engagements", "Meeting deadlines and commitments") },
    { icon: Award, title: t("Excellence", "Excellence"), description: t("Recherche permanente de la qualité", "Continuous pursuit of quality") },
  ];
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
            label={t("Nos Ressources", "Our Resources")}
            title={t("Moyens Techniques", "Technical Resources")}
            highlightedWord={t("Techniques", "Technical")}
            subtitle={t(
              "Des équipements modernes et une équipe qualifiée pour garantir la qualité et la précision de nos interventions.",
              "Modern equipment and a qualified team to guarantee the quality and accuracy of our interventions."
            )}
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
              {t("Ressources Techniques et ", "Technical & ")}<span className="text-gradient">{t("Humaines", "Human Resources")}</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              {t(
                "EGG dispose d'un parc matériel moderne et diversifié, entretenu régulièrement pour garantir la fiabilité des résultats. Notre équipe pluridisciplinaire combine expertise technique et expérience terrain pour répondre aux exigences les plus élevées.",
                "EGG has a modern, diverse equipment fleet, maintained regularly to ensure reliable results. Our multidisciplinary team combines technical expertise and field experience to meet the highest demands."
              )}
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
              {t("Ressources Matérielles", "Material Resources")}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              {t("Équipements de ", "State-of-the-art ")}<span className="text-gradient">{t("Pointe", "Equipment")}</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Notre parc matériel moderne nous permet de réaliser tous types de missions géotechniques.",
                "Our modern equipment fleet lets us carry out every type of geotechnical mission."
              )}
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
              {t("Ressources Humaines", "Human Resources")}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              {t("Notre ", "Our ")}<span className="text-gradient">{t("Équipe", "Team")}</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Des professionnels passionnés et qualifiés au service de vos projets.",
                "Passionate, qualified professionals serving your projects."
              )}
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
              {t("Assurance Qualité", "Quality Assurance")}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              {t("Qualité et ", "Quality & ")}<span className="text-gradient">{t("Sécurité", "Safety")}</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Des procédures rigoureuses pour garantir l'excellence de nos prestations.",
                "Rigorous procedures to guarantee the excellence of our services."
              )}
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
              { value: "2011", label: t("Année de création", "Founded") },
              { value: "1000+", label: t("Projets réalisés", "Projects completed") },
              { value: "25+", label: t("Employés", "Employees") },
              { value: "100%", label: t("Satisfaction client", "Client satisfaction") },
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
