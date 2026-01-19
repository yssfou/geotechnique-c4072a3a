import React from "react";
import { motion } from "framer-motion";
import serviceGeotechnique from "@/assets/service-geotechnique.jpg";
import serviceForages from "@/assets/service-forages.jpg";
import serviceEnvironment from "@/assets/service-environment.jpg";
import serviceTravaux from "@/assets/service-travaux.jpg";

interface Service {
  image: string;
  category: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    image: serviceGeotechnique,
    category: "Géotechnique",
    title: "Sondages Géotechniques",
    description:
      "Études de sol approfondies pour vos projets de construction. Analyses précises et rapports détaillés.",
  },
  {
    image: serviceForages,
    category: "Hydraulique",
    title: "Forages d'Eau",
    description:
      "Réalisation de forages pour l'approvisionnement en eau. Solutions durables et économiques.",
  },
  {
    image: serviceEnvironment,
    category: "Environnement",
    title: "Études Environnementales",
    description:
      "Évaluations d'impact environnemental. Protection des ressources naturelles et conformité réglementaire.",
  },
  {
    image: serviceTravaux,
    category: "Construction",
    title: "Travaux Spéciaux",
    description:
      "Fondations profondes, consolidation des sols et travaux de génie civil spécialisés.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Ce Que Nous Faisons
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez notre gamme complète de services géotechniques et
            environnementaux, adaptés à vos besoins spécifiques.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden bg-card shadow-card cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-3">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative mt-20 overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex animate-scroll-left">
          {[...services, ...services, ...services, ...services].map((service, index) => (
            <motion.div
              key={`scroll-${index}`}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-80 mx-4 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/30 cursor-pointer group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-primary font-medium">
                  {service.category}
                </span>
                <h4 className="text-lg font-semibold text-foreground mt-1">
                  {service.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
