import React from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
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
                className={`grid lg:grid-cols-2 gap-12 items-center ${
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
                  
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + featureIndex * 0.1 }}
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

      {/* Project Slideshow */}
      <section className="py-16 bg-card relative overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <AnimatedTitle
            label="Nos Réalisations"
            title="Projets Récents"
            highlightedWord="Récents"
          />
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

          <div className="overflow-hidden py-4">
            <div className="flex animate-scroll-left gap-6">
              {[...projectImages, ...projectImages].map((image, index) => (
                <div
                  key={`project-${index}`}
                  className="flex-shrink-0 w-80 rounded-2xl overflow-hidden bg-background/50 border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
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
