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
import { useT } from "@/contexts/LanguageContext";
import serviceGeotechnique from "@/assets/service-sondage.jpg";
import serviceEnvironment from "@/assets/service-environment.jpg";
import serviceTravaux from "@/assets/service-conseil.jpg";
import slideshow1 from "@/assets/projects/slideshow-1.jpg";
import slideshow2 from "@/assets/projects/slideshow-2.jpg";
import slideshow3 from "@/assets/projects/slideshow-3.jpg";
import slideshow4 from "@/assets/projects/slideshow-4.jpg";
import slideshow5 from "@/assets/projects/slideshow-5.jpg";
import slideshow6 from "@/assets/projects/slideshow-6.jpg";

const projectImages = [slideshow1, slideshow2, slideshow3, slideshow4, slideshow5, slideshow6];

export default function ServicesPage() {
  const t = useT();
  const services = [
    {
      image: serviceGeotechnique,
      title: t("Sondages Géotechniques", "Geotechnical Drilling"),
      category: t("Géotechnique", "Geotechnics"),
      description: t("Études de sol approfondies pour vos projets de construction. Analyses précises et rapports détaillés conformes aux normes internationales.", "In-depth soil studies for your construction projects. Accurate analyses and detailed reports compliant with international standards."),
      objectives: t("Caractériser le sol, déterminer la capacité portante, dimensionner les fondations et anticiper les risques de tassement.", "Characterize the soil, determine bearing capacity, size foundations and anticipate settlement risks."),
      methods: t("Sondages carottés, essais pressiométriques Ménard, pénétromètres statiques et dynamiques, prélèvements d'échantillons intacts.", "Core drilling, Ménard pressuremeter tests, static and dynamic penetrometers, intact sample collection."),
      deliverables: t("Rapport géotechnique complet avec coupes lithologiques, résultats d'essais, recommandations de fondations et notes de calcul.", "Full geotechnical report with lithological logs, test results, foundation recommendations and design notes."),
      features: [
        t("Sondages carottés jusqu'à 100m de profondeur", "Core drilling down to 100m depth"),
        t("Essais pressiométriques Ménard", "Ménard pressuremeter tests"),
        t("Essais au pénétromètre dynamique", "Dynamic penetrometer tests"),
        t("Prélèvements d'échantillons intacts", "Intact sample collection"),
        t("Rapports géotechniques détaillés", "Detailed geotechnical reports"),
        t("Recommandations de fondations", "Foundation recommendations"),
      ],
    },
    {
      image: serviceEnvironment,
      title: t("Études Environnementales", "Environmental Studies"),
      category: t("Environnement", "Environment"),
      description: t("Évaluations d'impact environnemental complètes. Protection des ressources naturelles et conformité aux réglementations tunisiennes.", "Comprehensive environmental impact assessments. Protection of natural resources and compliance with Tunisian regulations."),
      objectives: t("Évaluer les impacts environnementaux d'un projet, proposer des mesures d'atténuation et garantir la conformité réglementaire.", "Assess a project's environmental impacts, propose mitigation measures and ensure regulatory compliance."),
      methods: t("Analyse documentaire, investigations terrain, prélèvements et analyses, modélisation des impacts, consultation des parties prenantes.", "Documentary analysis, field investigations, sampling and analysis, impact modeling, stakeholder consultation."),
      deliverables: t("Étude d'impact environnemental, plan de gestion environnementale, rapport d'audit, cahier des charges de suivi.", "Environmental impact assessment, environmental management plan, audit report, monitoring specifications."),
      features: [
        t("Études d'impact environnemental (EIE)", "Environmental Impact Assessments (EIA)"),
        t("Diagnostic de pollution des sols", "Soil pollution diagnostics"),
        t("Analyse de la qualité des eaux", "Water quality analysis"),
        t("Plans de gestion environnementale", "Environmental management plans"),
      ],
    },
    {
      image: serviceTravaux,
      title: t("Travaux Spéciaux", "Special Works"),
      category: t("Construction", "Construction"),
      description: t("Fondations profondes, consolidation des sols et travaux de génie civil spécialisés avec équipements de pointe.", "Deep foundations, soil consolidation and specialized civil works with state-of-the-art equipment."),
      objectives: t("Réaliser des fondations adaptées aux sols difficiles, stabiliser les terrains instables et permettre la construction en site contraint.", "Build foundations suited to difficult soils, stabilize unstable ground and enable construction on constrained sites."),
      methods: t("Micropieux, pieux forés, injection de coulis, parois moulées, tirants d'ancrage, drainage et rabattement de nappe.", "Micropiles, bored piles, grout injection, diaphragm walls, ground anchors, drainage and groundwater lowering."),
      deliverables: t("Plans d'exécution, notes de calcul, rapport d'essais de réception, procès-verbaux de récolement.", "Execution drawings, design notes, acceptance test report, as-built records."),
      features: [
        t("Micropieux et pieux forés", "Micropiles and bored piles"),
        t("Injection de consolidation", "Consolidation grouting"),
        t("Parois berlinoises et moulées", "Berlin and diaphragm walls"),
        t("Tirants d'ancrage précontraints", "Prestressed ground anchors"),
        t("Drainage et rabattement de nappe", "Drainage and groundwater lowering"),
      ],
    },
  ];
  const faq = [
    {
      question: t("Quand faut-il réaliser une étude géotechnique ?", "When should a geotechnical study be carried out?"),
      answer: t("Une étude géotechnique doit être réalisée avant le début de tout projet de construction. Elle est obligatoire pour les permis de construire de bâtiments importants et fortement recommandée pour les constructions individuelles. Idéalement, elle doit intervenir dès la phase de conception pour optimiser le projet.", "A geotechnical study should be carried out before the start of any construction project. It is mandatory for permits on large buildings and strongly recommended for individual homes. Ideally it happens during the design phase to optimize the project."),
    },
    {
      question: t("Combien de temps dure une étude géotechnique ?", "How long does a geotechnical study take?"),
      answer: t("La durée dépend de la complexité du projet et du nombre de sondages requis. En général, comptez 1 à 2 semaines pour les investigations terrain et 2 à 3 semaines pour la rédaction du rapport. Pour les projets simples, le délai total peut être de 3 à 4 semaines.", "Duration depends on the project's complexity and the number of boreholes required. Typically count 1–2 weeks for field investigations and 2–3 weeks to write the report. Simple projects can take 3–4 weeks in total."),
    },
    {
      question: t("Quels sont les types de sondages proposés ?", "What types of drilling do you offer?"),
      answer: t("Nous proposons différents types de sondages : sondages carottés (prélèvement d'échantillons intacts), sondages destructifs (reconnaissance rapide), essais pressiométriques (caractérisation mécanique), et essais au pénétromètre (résistance du sol). Le choix dépend de la nature du projet et des objectifs de l'étude.", "We offer different types of drilling: core drilling (intact sample collection), destructive drilling (fast reconnaissance), pressuremeter tests (mechanical characterization) and penetrometer tests (soil resistance). The choice depends on the project and study objectives."),
    },
    {
      question: t("L'étude d'impact environnemental est-elle obligatoire ?", "Is the environmental impact assessment mandatory?"),
      answer: t("En Tunisie, l'étude d'impact environnemental (EIE) est obligatoire pour de nombreux projets : industries, infrastructures, zones touristiques, projets agricoles d'envergure. La liste des projets soumis à EIE est définie par la réglementation tunisienne (décret n°2005-1991).", "In Tunisia, the Environmental Impact Assessment (EIA) is mandatory for many projects: industries, infrastructure, tourism zones, large agricultural projects. The list of projects subject to EIA is defined by Tunisian regulations (decree n°2005-1991)."),
    },
    {
      question: t("Comment est établi le devis d'une prestation ?", "How is a quote prepared?"),
      answer: t("Le devis est établi après analyse de votre projet : localisation, surface, type de construction, objectifs de l'étude. Nous prenons en compte le nombre et la profondeur des sondages, les essais à réaliser et le niveau de détail du rapport. N'hésitez pas à nous contacter pour un devis personnalisé.", "The quote is prepared after analyzing your project: location, area, type of construction, study objectives. We account for the number and depth of boreholes, tests to perform and the level of detail of the report. Contact us for a personalized quote."),
    },
    {
      question: t("Intervenez-vous sur tout le territoire tunisien ?", "Do you operate across the whole of Tunisia?"),
      answer: t("Oui, EGG intervient sur l'ensemble du territoire tunisien. Nos équipes sont mobiles et équipées pour réaliser des missions dans les 24 gouvernorats. Nous avons une expérience significative dans toutes les régions, des zones urbaines aux sites isolés.", "Yes, EGG operates throughout Tunisia. Our teams are mobile and equipped to carry out missions in all 24 governorates. We have significant experience across all regions, from urban areas to remote sites."),
    },
  ];
  const introFeatures = [
    { icon: Target, title: t("Précision", "Precision"), description: t("Équipements calibrés et méthodes rigoureuses", "Calibrated equipment and rigorous methods") },
    { icon: FileText, title: t("Conformité", "Compliance"), description: t("Respect des normes françaises et européennes", "Compliance with French and European standards") },
    { icon: Clock, title: t("Réactivité", "Responsiveness"), description: t("Délais optimisés sans compromis sur la qualité", "Optimized timelines without compromising quality") },
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
            label={t("Ce Que Nous Offrons", "What We Offer")}
            title={t("Nos Services", "Our Services")}
            highlightedWord={t("Services", "Services")}
            subtitle={t(
              "Une gamme complète de services géotechniques et environnementaux, adaptés à vos besoins spécifiques.",
              "A complete range of geotechnical and environmental services, tailored to your specific needs."
            )}
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
              {t("Des Prestations ", "Tailor-made ")}<span className="text-gradient">{t("Sur Mesure", "Services")}</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              {t(
                "EGG propose une gamme complète de services géotechniques et environnementaux. Chaque prestation est adaptée aux spécificités de votre projet, garantissant des résultats fiables et exploitables pour la conception et la réalisation de vos ouvrages.",
                "EGG offers a complete range of geotechnical and environmental services. Each service is tailored to the specifics of your project, ensuring reliable, actionable results for the design and execution of your works."
              )}
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
                        {t("Objectifs", "Objectives")}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {service.objectives}
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="methods" className="border-border/30">
                      <AccordionTrigger className="text-foreground hover:text-primary">
                        {t("Méthodes", "Methods")}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {service.methods}
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="deliverables" className="border-border/30">
                      <AccordionTrigger className="text-foreground hover:text-primary">
                        {t("Livrables", "Deliverables")}
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
                      {t("Demander un Devis", "Request a Quote")}
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
              {t("Questions ", "Frequently Asked ")}<span className="text-gradient">{t("Fréquentes", "Questions")}</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Les réponses aux questions les plus courantes sur nos services géotechniques.",
                "Answers to the most common questions about our geotechnical services."
              )}
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
            <p className="text-muted-foreground mb-4">{t("Vous avez d'autres questions ?", "Have other questions?")}</p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-glow transition-all"
              >
                <Phone className="w-4 h-4" />
                {t("Contactez-Nous", "Contact Us")}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Slideshow */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <AnimatedTitle
            label={t("Nos Réalisations", "Our Achievements")}
            title={t("Projets Récents", "Recent Projects")}
            highlightedWord={t("Récents", "Recent")}
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
