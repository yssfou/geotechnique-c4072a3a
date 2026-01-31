import React from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Pickaxe, Wrench, Users, Award } from "lucide-react";
import slideshow1 from "@/assets/projects/slideshow-1.jpg";
import slideshow2 from "@/assets/projects/slideshow-2.jpg";
import slideshow3 from "@/assets/projects/slideshow-3.jpg";
import slideshow4 from "@/assets/projects/slideshow-4.jpg";
import slideshow5 from "@/assets/projects/slideshow-5.jpg";
import slideshow6 from "@/assets/projects/slideshow-6.jpg";

const projectImages = [slideshow1, slideshow2, slideshow3, slideshow4, slideshow5, slideshow6];

const quickLinks = [
  {
    icon: Pickaxe,
    title: "Domaines d'Activités",
    description: "Géotechnique, Hydrogéologie, Environnement et Travaux Spéciaux",
    href: "/domaines",
  },
  {
    icon: Wrench,
    title: "Nos Services",
    description: "Sondages géotechniques, études environnementales et travaux spéciaux",
    href: "/services",
  },
  {
    icon: Users,
    title: "Nos Moyens",
    description: "Équipements de pointe et équipe qualifiée",
    href: "/moyens",
  },
  {
    icon: Award,
    title: "Références",
    description: "Plus de 1000 projets réalisés avec succès",
    href: "/references",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* Quick Links Section */}
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
              Découvrez EGG
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Explorez Nos <span className="text-gradient">Expertises</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Votre partenaire de confiance en géotechnique depuis 2011
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={link.title} to={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group h-full p-6 rounded-2xl bg-background border border-border/30 shadow-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <link.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {link.description}
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Slideshow */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150 }}
              className="text-3xl font-bold text-foreground mb-4"
            >
              Nos <span className="text-gradient">Réalisations</span>
            </motion.h3>
          </motion.div>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/references">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:shadow-glow transition-all"
            >
              Voir Toutes les Références
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
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
              { value: "2011", label: "Depuis" },
              { value: "1000+", label: "Projets" },
              { value: "25+", label: "Experts" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
