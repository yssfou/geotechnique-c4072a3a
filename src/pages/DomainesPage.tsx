import React from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Pickaxe, Leaf, HardHat, ArrowRight, BookOpen, Shield, Building2, Factory, Landmark, Waves, Mountain, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useT } from "@/contexts/LanguageContext";

export default function DomainesPage() {
  const t = useT();
  const domaines = [
    {
      icon: Pickaxe,
      title: t("Géotechnique", "Geotechnics"),
      description: t("Études de sol approfondies incluant sondages carottés, essais pressiométriques, pénétrométriques et analyse de la capacité portante des sols pour vos projets de construction.", "In-depth soil studies including core drilling, pressuremeter and penetrometer tests and bearing capacity analysis for your construction projects."),
      details: [
        t("Sondages carottés et destructifs", "Core and destructive drilling"),
        t("Essais pressiométriques Ménard", "Ménard pressuremeter tests"),
        t("Essais au pénétromètre statique/dynamique", "Static / dynamic penetrometer tests"),
        t("Études de fondations", "Foundation design studies"),
        t("Reconnaissance géologique", "Geological surveying"),
      ],
      definition: t("La géotechnique est la science qui étudie les propriétés mécaniques, physiques et hydrauliques des sols et des roches. Elle est essentielle pour dimensionner les fondations et garantir la stabilité des ouvrages.", "Geotechnics is the science that studies the mechanical, physical and hydraulic properties of soils and rocks. It is essential to size foundations and ensure the stability of structures."),
      objectives: t("Déterminer la nature et les caractéristiques du sol, évaluer la capacité portante, définir le type de fondations adapté et anticiper les risques de tassement.", "Determine soil nature and characteristics, assess bearing capacity, define the appropriate foundation type and anticipate settlement risks."),
      risks: t("Fondations inadaptées, tassements différentiels, glissements de terrain, effondrements, sinistres structurels coûteux.", "Inadequate foundations, differential settlements, landslides, collapses, costly structural damage."),
    },
      icon: Mountain,
      title: t("Carrière et Mines", "Quarries & Mines"),
      description: t("Études géologiques minières.", "Mining geological studies."),
      details: [
        t("Études géologiques de gisements", "Geological studies of deposits"),
        t("Calcul des réserves", "Reserve calculations"),
        t("Études d'impact des exploitations minières", "Mining operation impact studies"),
      ],
      definition: t("L'exploitation des carrières et des mines concerne l'extraction des matériaux et minerais. Elle nécessite des études géologiques approfondies pour optimiser l'exploitation tout en assurant la sécurité.", "Quarry and mine operation involves the extraction of materials and ores. It requires in-depth geological studies to optimize operation while ensuring safety."),
      objectives: t("Évaluer les gisements, planifier l'exploitation, assurer la stabilité des ouvrages miniers et minimiser l'impact environnemental.", "Assess deposits, plan operation, ensure mining structure stability and minimize environmental impact."),
      risks: t("Instabilité des talus, éboulements, pollution des sols et des eaux, épuisement des ressources.", "Slope instability, rockfalls, soil and water pollution, resource depletion."),
    },
    {
      icon: Leaf,
      title: t("Environnement", "Environment"),
      description: t("Évaluations d'impact environnemental, études de pollution des sols et des eaux, conformité aux réglementations environnementales tunisiennes.", "Environmental impact assessments, soil and water pollution studies, compliance with Tunisian environmental regulations."),
      details: [
        t("Études d'impact environnemental (EIE)", "Environmental Impact Assessments (EIA)"),
        t("Diagnostic de pollution", "Pollution diagnostics"),
        t("Dépollution des sites", "Site remediation"),
        t("Audit environnemental", "Environmental audit"),
        t("Suivi de la qualité des eaux", "Water quality monitoring"),
      ],
      definition: t("Les études environnementales évaluent les impacts d'un projet sur l'écosystème et proposent des mesures d'atténuation. Elles sont obligatoires pour de nombreux projets en Tunisie.", "Environmental studies assess a project's impacts on the ecosystem and propose mitigation measures. They are mandatory for many projects in Tunisia."),
      objectives: t("Identifier les impacts potentiels, proposer des mesures de mitigation, assurer la conformité réglementaire et préserver l'environnement.", "Identify potential impacts, propose mitigation measures, ensure regulatory compliance and protect the environment."),
      risks: t("Pollution des sols et des eaux, destruction d'habitats, sanctions administratives, refus de permis.", "Soil and water pollution, habitat destruction, administrative penalties, permit refusals."),
    },
    {
      icon: HardHat,
      title: t("Travaux Spéciaux", "Special Works"),
      description: t("Conception et réalisation de travaux de génie civil spécialisés : fondations profondes, consolidation des sols, drainage et terrassements.", "Design and execution of specialized civil works: deep foundations, soil consolidation, drainage and earthworks."),
      details: [
        t("Micropieux et pieux forés", "Micropiles and bored piles"),
        t("Injection de consolidation", "Consolidation grouting"),
        t("Parois moulées", "Diaphragm walls"),
        t("Tirants d'ancrage", "Ground anchors"),
        t("Drainage et rabattement", "Drainage and dewatering"),
      ],
      definition: t("Les travaux spéciaux regroupent les techniques de construction spécialisées pour les fondations profondes, le renforcement des sols et les ouvrages souterrains.", "Special works cover specialized construction techniques for deep foundations, soil reinforcement and underground structures."),
      objectives: t("Réaliser des fondations adaptées aux sols difficiles, stabiliser les terrains instables et permettre la construction en site contraint.", "Build foundations suited to difficult soils, stabilize unstable ground and enable construction on constrained sites."),
      risks: t("Instabilité des ouvrages, désordres sur les constructions voisines, coûts de reprise élevés.", "Structural instability, damage to neighboring buildings, high remediation costs."),
    },
  ];
  const normes = [
    { code: "DTU 11.1", description: t("Sondages des sols de fondation", "Foundation soil drilling") },
    { code: "NF P 94-500", description: t("Missions géotechniques - Classifications et spécifications", "Geotechnical missions - Classifications and specifications") },
    { code: "EN 1997-1", description: t("Eurocode 7 - Calcul géotechnique", "Eurocode 7 - Geotechnical design") },
    { code: "NF P 94-110", description: t("Essai pressiométrique Ménard", "Ménard pressuremeter test") },
    { code: "NFP 94-113", description: t("Essai de pénétration statique", "Static penetration test") },
  ];
  const typesProjects = [
    { icon: Building2, title: t("Bâtiments", "Buildings"), examples: t("Immeubles, centres commerciaux, hôpitaux, écoles", "Apartment buildings, malls, hospitals, schools") },
    { icon: Factory, title: t("Industrie", "Industry"), examples: t("Usines, entrepôts, zones industrielles", "Factories, warehouses, industrial zones") },
    { icon: Landmark, title: t("Infrastructures", "Infrastructure"), examples: t("Routes, ponts, tunnels, barrages", "Roads, bridges, tunnels, dams") },
    { icon: Waves, title: t("Ouvrages Maritimes", "Maritime Works"), examples: t("Ports, digues, quais", "Ports, breakwaters, quays") },
    { icon: Mountain, title: t("Ouvrages Miniers", "Mining Works"), examples: t("Excavations, carrières, stabilité des talus", "Excavations, quarries, slope stability") },
    { icon: TreePine, title: t("Aménagement", "Land Development"), examples: t("Lotissements, parcs, espaces verts", "Subdivisions, parks, green spaces") },
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
            label={t("Notre Expertise", "Our Expertise")}
            title={t("Domaines d'Activités", "Areas of Activity")}
            highlightedWord={t("Activités", "Activity")}
            subtitle={t(
              "Découvrez les différents domaines dans lesquels EGG excelle depuis plus de 15 ans d'expérience en Tunisie.",
              "Discover the different areas in which EGG has excelled for more than 15 years of experience in Tunisia."
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8"
            >
              <BookOpen className="w-10 h-10 text-primary" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
              className="text-3xl font-bold text-foreground mb-6"
            >
              {t("L'Importance des Études ", "The Importance of ")}<span className="text-gradient">{t("Géotechniques", "Geotechnical Studies")}</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              {t(
                "Avant tout projet de construction, une étude géotechnique approfondie est indispensable. Elle permet de caractériser le sol, d'anticiper les risques et de dimensionner correctement les fondations. Sans cette analyse préalable, les risques de sinistres, de tassements différentiels ou de désordres structurels sont considérablement accrus.",
                "Before any construction project, a thorough geotechnical study is essential. It characterizes the soil, anticipates risks and properly sizes foundations. Without this prior analysis, the risk of damage, differential settlement and structural disorders is significantly increased."
              )}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              {t(
                "De même, les études environnementales sont essentielles pour garantir la durabilité des projets et leur conformité aux réglementations en vigueur en Tunisie et à l'international.",
                "Likewise, environmental studies are essential to ensure project sustainability and compliance with regulations in force in Tunisia and internationally."
              )}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Domaines Grid with Detailed Info */}
      <section className="py-24 bg-background relative">
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
              {t("Nos Compétences", "Our Skills")}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              {t("Détail des ", "Domain ")}<span className="text-gradient">{t("Domaines", "Details")}</span>
            </motion.h3>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {domaines.map((domaine, index) => (
              <motion.div
                key={domaine.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/30 shadow-card transition-all duration-500 hover:border-primary/30 hover:shadow-glow"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Icon and Title */}
                  <div className="lg:w-1/3">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                      className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4"
                    >
                      <domaine.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {domaine.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {domaine.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {domaine.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + detailIndex * 0.05 }}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Right: Accordion Details */}
                  <div className="lg:w-2/3">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="definition" className="border-border/30">
                        <AccordionTrigger className="text-foreground hover:text-primary">
                          {t("Définition", "Definition")}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {domaine.definition}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="objectives" className="border-border/30">
                        <AccordionTrigger className="text-foreground hover:text-primary">
                          {t("Objectifs", "Objectives")}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {domaine.objectives}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="risks" className="border-border/30">
                        <AccordionTrigger className="text-foreground hover:text-primary">
                          {t("Risques Évités", "Risks Avoided")}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {domaine.risks}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Normes et Référentiels */}
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
            >
              <Shield className="w-8 h-8 text-primary" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              {t("Normes et ", "Standards & ")}<span className="text-gradient">{t("Référentiels", "References")}</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Nos études sont réalisées conformément aux normes françaises, européennes et tunisiennes en vigueur.",
                "Our studies are carried out in accordance with the French, European and Tunisian standards in force."
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {normes.map((norme, index) => (
              <motion.div
                key={norme.code}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, delay: index * 0.08 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-background border border-border/30 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="text-primary font-bold text-lg mb-2">{norme.code}</div>
                <p className="text-muted-foreground text-sm">{norme.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Projets */}
      <section className="py-24 bg-background relative">
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
              {t("Applications", "Applications")}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              {t("Types de ", "Types of ")}<span className="text-gradient">{t("Projets", "Projects")}</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Notre expertise couvre une large gamme de projets dans différents secteurs d'activité.",
                "Our expertise covers a wide range of projects across different business sectors."
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {typesProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-6 rounded-2xl bg-card border border-border/30 shadow-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <project.icon className="w-7 h-7 text-primary" />
                </motion.div>
                
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {project.examples}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              {t("Besoin d'une étude géotechnique ?", "Need a geotechnical study?")}
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {t(
                "Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.",
                "Contact us to discuss your project and get a personalized quote."
              )}
            </p>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-full text-lg font-medium hover:shadow-glow transition-all"
              >
                {t("Voir nos Services", "View our Services")}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
