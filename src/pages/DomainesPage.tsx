import React from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Pickaxe, Droplets, Leaf, HardHat, ArrowRight, BookOpen, Shield, Building2, Factory, Landmark, Waves, Mountain, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    definition: "La géotechnique est la science qui étudie les propriétés mécaniques, physiques et hydrauliques des sols et des roches. Elle est essentielle pour dimensionner les fondations et garantir la stabilité des ouvrages.",
    objectives: "Déterminer la nature et les caractéristiques du sol, évaluer la capacité portante, définir le type de fondations adapté et anticiper les risques de tassement.",
    risks: "Fondations inadaptées, tassements différentiels, glissements de terrain, effondrements, sinistres structurels coûteux.",
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
    definition: "L'hydrogéologie étudie les eaux souterraines, leur origine, leur circulation et leur exploitation. Cette discipline est cruciale pour l'alimentation en eau potable et l'industrie.",
    objectives: "Localiser les nappes aquifères, évaluer les réserves exploitables, déterminer la qualité de l'eau et concevoir des ouvrages de captage durables.",
    risks: "Épuisement des ressources, contamination des nappes, conflits d'usage, impacts sur l'environnement.",
  },
  {
    icon: Leaf,
    title: "Environnement",
    description: "Évaluations d'impact environnemental, études de pollution des sols et des eaux, conformité aux réglementations environnementales tunisiennes.",
    details: [
      "Études d'impact environnemental (EIE)",
      "Diagnostic de pollution",
      "Dépollution des sites",
      "Audit environnemental",
      "Suivi de la qualité des eaux",
    ],
    definition: "Les études environnementales évaluent les impacts d'un projet sur l'écosystème et proposent des mesures d'atténuation. Elles sont obligatoires pour de nombreux projets en Tunisie.",
    objectives: "Identifier les impacts potentiels, proposer des mesures de mitigation, assurer la conformité réglementaire et préserver l'environnement.",
    risks: "Pollution des sols et des eaux, destruction d'habitats, sanctions administratives, refus de permis.",
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
    definition: "Les travaux spéciaux regroupent les techniques de construction spécialisées pour les fondations profondes, le renforcement des sols et les ouvrages souterrains.",
    objectives: "Réaliser des fondations adaptées aux sols difficiles, stabiliser les terrains instables et permettre la construction en site contraint.",
    risks: "Instabilité des ouvrages, désordres sur les constructions voisines, coûts de reprise élevés.",
  },
];

const normes = [
  { code: "DTU 11.1", description: "Sondages des sols de fondation" },
  { code: "NF P 94-500", description: "Missions géotechniques - Classifications et spécifications" },
  { code: "EN 1997-1", description: "Eurocode 7 - Calcul géotechnique" },
  { code: "NF P 94-110", description: "Essai pressiométrique Ménard" },
  { code: "NFP 94-113", description: "Essai de pénétration statique" },
];

const typesProjects = [
  { icon: Building2, title: "Bâtiments", examples: "Immeubles, centres commerciaux, hôpitaux, écoles" },
  { icon: Factory, title: "Industrie", examples: "Usines, entrepôts, zones industrielles" },
  { icon: Landmark, title: "Infrastructures", examples: "Routes, ponts, tunnels, barrages" },
  { icon: Waves, title: "Ouvrages Maritimes", examples: "Ports, digues, quais" },
  { icon: Mountain, title: "Ouvrages Miniers", examples: "Excavations, carrières, stabilité des talus" },
  { icon: TreePine, title: "Aménagement", examples: "Lotissements, parcs, espaces verts" },
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
              L'Importance des Études <span className="text-gradient">Géotechniques</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              Avant tout projet de construction, une étude géotechnique approfondie est indispensable. 
              Elle permet de caractériser le sol, d'anticiper les risques et de dimensionner correctement 
              les fondations. Sans cette analyse préalable, les risques de sinistres, de tassements 
              différentiels ou de désordres structurels sont considérablement accrus.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              De même, les études environnementales et hydrogéologiques sont essentielles pour 
              garantir la durabilité des projets et leur conformité aux réglementations en vigueur 
              en Tunisie et à l'international.
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
              Nos Compétences
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Détail des <span className="text-gradient">Domaines</span>
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
                          Définition
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {domaine.definition}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="objectives" className="border-border/30">
                        <AccordionTrigger className="text-foreground hover:text-primary">
                          Objectifs
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {domaine.objectives}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="risks" className="border-border/30">
                        <AccordionTrigger className="text-foreground hover:text-primary">
                          Risques Évités
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
              Normes et <span className="text-gradient">Référentiels</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos études sont réalisées conformément aux normes françaises, européennes et tunisiennes en vigueur.
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
              Applications
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Types de <span className="text-gradient">Projets</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre expertise couvre une large gamme de projets dans différents secteurs d'activité.
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
              Besoin d'une étude géotechnique ?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-full text-lg font-medium hover:shadow-glow transition-all"
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
