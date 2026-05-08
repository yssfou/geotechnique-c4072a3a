import React from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Pickaxe, Leaf, HardHat, Mountain, CheckCircle, Target, FileSearch, FileText, Phone, Building2, Factory, Landmark, Home } from "lucide-react";
import { ClientsSection } from "@/components/ClientsSection";
import { useT } from "@/contexts/LanguageContext";

const Index = () => {
  const t = useT();
  const domaines = [
    { icon: Pickaxe, title: t("Géotechnique", "Geotechnics"), description: t("Études de sol, sondages carottés et essais in-situ pour vos projets de construction.", "Soil studies, core drilling and in-situ testing for your construction projects."), href: "/domaines" },
    { icon: Mountain, title: t("Carrière et Mines", "Quarries & Mines"), description: t("Exploitation de carrières, études géologiques minières et stabilité des talus.", "Quarry operation, mining geological studies and slope stability."), href: "/domaines" },
    { icon: Leaf, title: t("Environnement", "Environment"), description: t("Études d'impact environnemental et diagnostic de pollution.", "Environmental impact studies and pollution diagnostics."), href: "/domaines" },
    { icon: HardHat, title: t("Travaux Spéciaux", "Special Works"), description: t("Fondations profondes, consolidation des sols et injections.", "Deep foundations, soil consolidation and grouting."), href: "/domaines" },
  ];
  const methodologie = [
    { icon: Target, step: "01", title: t("Analyse des Besoins", "Needs Analysis"), description: t("Étude approfondie de votre projet et définition des objectifs techniques.", "In-depth study of your project and definition of technical objectives.") },
    { icon: FileSearch, step: "02", title: t("Investigation Terrain", "Field Investigation"), description: t("Réalisation des sondages, essais in-situ et prélèvements d'échantillons.", "Drilling, in-situ tests and sample collection.") },
    { icon: FileText, step: "03", title: t("Analyse & Rapport", "Analysis & Report"), description: t("Interprétation des résultats et rédaction du rapport géotechnique détaillé.", "Interpretation of results and drafting of the detailed geotechnical report.") },
  ];
  const avantages = [
    t("Plus de 15 ans d'expérience en Tunisie", "Over 15 years of experience in Tunisia"),
    t("Équipe d'ingénieurs spécialisés certifiés", "Team of certified specialized engineers"),
    t("Équipements modernes et calibrés", "Modern, calibrated equipment"),
    t("Respect des normes internationales", "Compliance with international standards"),
    t("Délais de livraison optimisés", "Optimized delivery times"),
    t("Couverture nationale complète", "Full national coverage"),
  ];
  const secteurs = [
    { icon: Building2, label: t("Bâtiments", "Buildings") },
    { icon: Factory, label: t("Industrie", "Industry") },
    { icon: Landmark, label: t("Infrastructures", "Infrastructure") },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* Présentation Générale */}
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4"
              >
                {t("À Propos de Nous", "About Us")}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                {t("Votre Partenaire ", "Your ")}<span className="text-gradient">{t("Géotechnique", "Geotechnical")}</span>{t("", " Partner")}
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mb-6 rounded-full origin-left"
              />
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-lg leading-relaxed mb-6"
              >
                {t(
                  "L'Entreprise Géologique et Géotechnique (EGG) est un bureau d'études spécialisé fondé en 2011. Notre expertise couvre l'ensemble des domaines de la géotechnique et de l'environnement.",
                  "Geological & Geotechnical Enterprise (EGG) is a specialized engineering firm founded in 2011. Our expertise covers every field of geotechnics and the environment."
                )}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                {t(
                  "Nous accompagnons les maîtres d'ouvrage, architectes et bureaux d'études dans la réalisation de leurs projets en fournissant des études géotechniques fiables et conformes aux normes en vigueur.",
                  "We support project owners, architects and engineering firms by providing reliable geotechnical studies that comply with current standards."
                )}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {secteurs.map((secteur, index) => (
                <motion.div
                  key={secteur.label}
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
                    <secteur.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <span className="font-semibold text-foreground">{secteur.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chiffres Clés */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150 }}
              className="text-3xl font-bold text-primary-foreground mb-2"
            >
              {t("Chiffres Clés", "Key Figures")}
            </motion.h3>
            <p className="text-primary-foreground/80">{t("Notre engagement en chiffres", "Our commitment in numbers")}</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2011", label: t("Année de création", "Founded") },
              { value: "1000+", label: t("Projets réalisés", "Projects completed") },
              { value: "24", label: t("Gouvernorats couverts", "Governorates covered") },
              { value: "100%", label: t("Satisfaction client", "Client satisfaction") },
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

      {/* Domaines d'Intervention Overview */}
      <section className="py-24 bg-background relative overflow-hidden">
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
              {t("Notre Expertise", "Our Expertise")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {t("Domaines d'", "Areas of ")}<span className="text-gradient">{t("Intervention", "Expertise")}</span>
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
              {t("Une expertise complète pour répondre à tous vos besoins en études de sol et environnement.", "Comprehensive expertise to meet all your soil study and environmental needs.")}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domaines.map((domaine, index) => (
              <Link key={domaine.title} to={domaine.href}>
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group h-full p-6 rounded-2xl bg-card border border-border/30 shadow-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <domaine.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {domaine.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {domaine.description}
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    {t("En savoir plus", "Learn more")}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie de Travail */}
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
              {t("Notre Processus", "Our Process")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {t("Méthodologie de ", "Our ")}<span className="text-gradient">{t("Travail", "Methodology")}</span>
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
              {t("Une approche rigoureuse garantissant la qualité et la fiabilité de nos études.", "A rigorous approach guaranteeing the quality and reliability of our studies.")}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {methodologie.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="relative p-8 rounded-2xl bg-background border border-border/30 shadow-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg"
                >
                  {item.step}
                </motion.div>
                
                <div className="mt-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.3 + index * 0.1 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Nous Choisir */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4"
              >
                {t("Nos Atouts", "Our Strengths")}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                {t("Pourquoi ", "Why ")}<span className="text-gradient">{t("Nous Choisir", "Choose Us")}</span>
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mb-6 rounded-full origin-left"
              />
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                {t(
                  "EGG se distingue par son engagement envers la qualité, la rigueur scientifique et la satisfaction client. Notre équipe d'experts met tout en œuvre pour garantir le succès de vos projets.",
                  "EGG stands out for its commitment to quality, scientific rigor and client satisfaction. Our team of experts does everything to ensure the success of your projects."
                )}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
              className="space-y-4"
            >
              {avantages.map((avantage, index) => (
                <motion.div
                  key={avantage}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 150, delay: 0.3 + index * 0.08 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/30 transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.4 + index * 0.08 }}
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-foreground font-medium">{avantage}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* Call To Action */}
      <section className="py-24 bg-hero-gradient relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4"
            >
              {t("Prêt à Démarrer ?", "Ready to Start?")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {t("Lancez Votre ", "Launch Your ")}<span className="text-gradient">{t("Projet", "Project")}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg mb-8"
            >
              {t(
                "Contactez-nous dès aujourd'hui pour discuter de vos besoins en études géotechniques. Notre équipe est à votre disposition pour vous accompagner dans votre projet.",
                "Contact us today to discuss your geotechnical study needs. Our team is at your disposal to support your project."
              )}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:shadow-glow transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {t("Contactez-Nous", "Contact Us")}
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-background/10 backdrop-blur-sm text-foreground px-8 py-4 rounded-full text-lg font-medium border border-border/50 hover:bg-background/20 transition-all"
                >
                  {t("Découvrir Nos Services", "Discover Our Services")}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
