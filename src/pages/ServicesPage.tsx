import React from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, HelpCircle, Target, FileText, Clock, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import serviceGeotechnique from "@/assets/service-1.png";
import serviceEnvironment from "@/assets/service-2.png";
import serviceTravaux from "@/assets/service-3.png";
import slideshow1 from "@/assets/projects/slideshow-1.jpg";
import slideshow2 from "@/assets/projects/slideshow-2.jpg";
import slideshow3 from "@/assets/projects/slideshow-3.jpg";
import slideshow4 from "@/assets/projects/slideshow-4.jpg";
import slideshow5 from "@/assets/projects/slideshow-5.jpg";
import slideshow6 from "@/assets/projects/slideshow-6.jpg";

const projectImages = [slideshow1, slideshow2, slideshow3, slideshow4, slideshow5, slideshow6];

const services = [
  {
    image: serviceGeotechnique,
    title: "Sondages Géotechniques",
    category: "Géotechnique",
    description: "Études de sol approfondies pour vos projets de construction. Analyses précises et rapports détaillés conformes aux normes internationales.",
    objectives: "Caractériser le sol, déterminer la capacité portante, dimensionner les fondations et anticiper les risques de tassement.",
    methods: "Sondages carottés, essais pressiométriques Ménard, pénétromètres statiques et dynamiques, prélèvements d'échantillons intacts.",
    deliverables: "Rapport géotechnique complet avec coupes lithologiques, résultats d'essais, recommandations de fondations et notes de calcul.",
    features: [
      "Sondages carottés jusqu'à 100m de profondeur",
      "Essais pressiométriques Ménard",
      "Essais au pénétromètre dynamique",
      "Prélèvements d'échantillons intacts",
      "Rapports géotechniques détaillés",
      "Recommandations de fondations",
    ],
  },
  {
    image: serviceEnvironment,
    title: "Études Environnementales",
    category: "Environnement",
    description: "Évaluations d'impact environnemental complètes. Protection des ressources naturelles et conformité aux réglementations tunisiennes.",
    objectives: "Évaluer les impacts environnementaux d'un projet, proposer des mesures d'atténuation et garantir la conformité réglementaire.",
    methods: "Analyse documentaire, investigations terrain, prélèvements et analyses, modélisation des impacts, consultation des parties prenantes.",
    deliverables: "Étude d'impact environnemental, plan de gestion environnementale, rapport d'audit, cahier des charges de suivi.",
    features: [
      "Études d'impact environnemental (EIE)",
      "Diagnostic de pollution des sols",
      "Analyse de la qualité des eaux",
      "Plans de gestion environnementale",
      "Audits de conformité",
      "Suivi environnemental",
    ],
  },
  {
    image: serviceTravaux,
    title: "Travaux Spéciaux",
    category: "Construction",
    description: "Fondations profondes, consolidation des sols et travaux de génie civil spécialisés avec équipements de pointe.",
    objectives: "Réaliser des fondations adaptées aux sols difficiles, stabiliser les terrains instables et permettre la construction en site contraint.",
    methods: "Micropieux, pieux forés, injection de coulis, parois moulées, tirants d'ancrage, drainage et rabattement de nappe.",
    deliverables: "Plans d'exécution, notes de calcul, rapport d'essais de réception, procès-verbaux de récolement.",
    features: [
      "Micropieux et pieux forés",
      "Injection de consolidation",
      "Parois berlinoises et moulées",
      "Tirants d'ancrage précontraints",
      "Drainage et rabattement de nappe",
      "Terrassements spéciaux",
    ],
  },
];

const faq = [
  {
    question: "Quand faut-il réaliser une étude géotechnique ?",
    answer: "Une étude géotechnique doit être réalisée avant le début de tout projet de construction. Elle est obligatoire pour les permis de construire de bâtiments importants et fortement recommandée pour les constructions individuelles. Idéalement, elle doit intervenir dès la phase de conception pour optimiser le projet.",
  },
  {
    question: "Combien de temps dure une étude géotechnique ?",
    answer: "La durée dépend de la complexité du projet et du nombre de sondages requis. En général, comptez 1 à 2 semaines pour les investigations terrain et 2 à 3 semaines pour la rédaction du rapport. Pour les projets simples, le délai total peut être de 3 à 4 semaines.",
  },
  {
    question: "Quels sont les types de sondages proposés ?",
    answer: "Nous proposons différents types de sondages : sondages carottés (prélèvement d'échantillons intacts), sondages destructifs (reconnaissance rapide), essais pressiométriques (caractérisation mécanique), et essais au pénétromètre (résistance du sol). Le choix dépend de la nature du projet et des objectifs de l'étude.",
  },
  {
    question: "L'étude d'impact environnemental est-elle obligatoire ?",
    answer: "En Tunisie, l'étude d'impact environnemental (EIE) est obligatoire pour de nombreux projets : industries, infrastructures, zones touristiques, projets agricoles d'envergure. La liste des projets soumis à EIE est définie par la réglementation tunisienne (décret n°2005-1991).",
  },
  {
    question: "Comment est établi le devis d'une prestation ?",
    answer: "Le devis est établi après analyse de votre projet : localisation, surface, type de construction, objectifs de l'étude. Nous prenons en compte le nombre et la profondeur des sondages, les essais à réaliser et le niveau de détail du rapport. N'hésitez pas à nous contacter pour un devis personnalisé.",
  },
  {
    question: "Intervenez-vous sur tout le territoire tunisien ?",
    answer: "Oui, EGG intervient sur l'ensemble du territoire tunisien. Nos équipes sont mobiles et équipées pour réaliser des missions dans les 24 gouvernorats. Nous avons une expérience significative dans toutes les régions, des zones urbaines aux sites isolés.",
  },
];

const introFeatures = [
  {
    icon: Target,
    title: "Précision",
    description: "Équipements calibrés et méthodes rigoureuses",
  },
  {
    icon: FileText,
    title: "Conformité",
    description: "Respect des normes françaises et européennes",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description: "Délais optimisés sans compromis sur la qualité",
  },
];

export default function ServicesPage() {
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
            label="Ce Que Nous Offrons"
            title="Nos Services"
            highlightedWord="Services"
            subtitle="Une gamme complète de services géotechniques et environnementaux, adaptés à vos besoins spécifiques."
          />
        </div>
      </section>

      {/* Services Introduction */}
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
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
              className="text-3xl font-bold text-foreground mb-6"
            >
              Des Prestations <span className="text-gradient">Sur Mesure</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              EGG propose une gamme complète de services géotechniques et environnementaux. 
              Chaque prestation est adaptée aux spécificités de votre projet, garantissant 
              des résultats fiables et exploitables pour la conception et la réalisation de vos ouvrages.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {introFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
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
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-card group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -z-10 -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 150, delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Detailed Info Accordion */}
                  <Accordion type="single" collapsible className="w-full mb-6">
                    <AccordionItem value="objectives" className="border-border/30">
                      <AccordionTrigger className="text-foreground hover:text-primary">
                        Objectifs
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {service.objectives}
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="methods" className="border-border/30">
                      <AccordionTrigger className="text-foreground hover:text-primary">
                        Méthodes
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {service.methods}
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="deliverables" className="border-border/30">
                      <AccordionTrigger className="text-foreground hover:text-primary">
                        Livrables
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {service.deliverables}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + featureIndex * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-glow transition-all"
                    >
                      Demander un Devis
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              <HelpCircle className="w-8 h-8 text-primary" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Questions <span className="text-gradient">Fréquentes</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les réponses aux questions les plus courantes sur nos services géotechniques.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faq.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`faq-${index}`} 
                    className="border border-border/30 rounded-2xl px-6 bg-background/50 data-[state=open]:border-primary/50 transition-colors"
                  >
                    <AccordionTrigger className="text-foreground hover:text-primary text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">Vous avez d'autres questions ?</p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-glow transition-all"
              >
                <Phone className="w-4 h-4" />
                Contactez-Nous
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Slideshow */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <AnimatedTitle
            label="Nos Réalisations"
            title="Projets Récents"
            highlightedWord="Récents"
          />
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="overflow-hidden py-4">
            <div className="flex animate-scroll-left gap-6">
              {[...projectImages, ...projectImages].map((image, index) => (
                <div
                  key={`project-${index}`}
                  className="flex-shrink-0 w-80 rounded-2xl overflow-hidden bg-card/50 border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={image}
                      alt={`Projet ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
