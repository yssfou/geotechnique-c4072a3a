import React from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Building2, Factory, Landmark, Home, Waves, TreePine, MapPin, Calendar, Award } from "lucide-react";
import { useT } from "@/contexts/LanguageContext";
import client1 from "@/assets/clients/client-1.webp";
import steg from "@/assets/clients/steg.png";
import client4 from "@/assets/clients/client-4.gif";
import scet from "@/assets/clients/scet.svg";
import avicenne from "@/assets/clients/avicenne.jpg";
import client5 from "@/assets/clients/client-5.png";
import habitat from "@/assets/clients/mehat.png";
import acte from "@/assets/clients/acte.png";
import ministereAgriculture from "@/assets/clients/ministere-agriculture.png";
import econet from "@/assets/clients/econet.png";
import ministereFinances from "@/assets/clients/ministere-finances.png";
import hiwar from "@/assets/clients/hiwar.png";
import ministereEducation from "@/assets/clients/education.jpg";
import ministereDefense from "@/assets/clients/ministere-defense-new.png";
import slideshow1 from "@/assets/projects/slideshow-1.jpg";
import slideshow2 from "@/assets/projects/slideshow-2.jpg";
import slideshow3 from "@/assets/projects/slideshow-3.jpg";
import slideshow4 from "@/assets/projects/slideshow-4.jpg";
import slideshow5 from "@/assets/projects/slideshow-5.jpg";
import slideshow6 from "@/assets/projects/slideshow-6.jpg";

const clients = [
  { name: "Ministère de l'Agriculture", logo: ministereAgriculture },
  { name: "Habitat", logo: habitat },
  { name: "Ministère de l'Éducation", logo: ministereEducation },
  { name: "Ministère de la Défense", logo: ministereDefense },
  { name: "ACTE", logo: acte },
  { name: "Ministère des Finances", logo: ministereFinances },
  { name: "Hiwar", logo: hiwar },
  { name: "SCET", logo: scet },
  { name: "Avicenne", logo: avicenne },
  { name: "Client 5", logo: client5 },
  { name: "Client 1", logo: client1 },
  { name: "Econet", logo: econet },
  { name: "STEG", logo: steg },
  { name: "Client 4", logo: client4 },
];

export default function ReferencesPage() {
  const t = useT();
  const caseStudies = [
    { image: slideshow1, title: t("Gvt - Touzeur", "Govt - Tozeur"), category: t("Géotechnique", "Geotechnics"), location: t("Touzeur", "Tozeur"), year: "2024", description: t("#campagne #géotechnique  . Gvt - Touzeur", "Geotechnical campaign — Govt - Tozeur") },
    { image: slideshow2, title: t("Pont de Bizerte", "Bizerte Bridge"), category: t("Environnement", "Environment"), location: "Bizerte", year: "2024", description: t("SRBG pont de Bizerte", "SRBG Bizerte Bridge") },
    { image: slideshow3, title: t("Mosquée Okba Ibn Nafaa", "Okba Ibn Nafaa Mosque"), category: t("Travaux Spéciaux", "Special Works"), location: "Kairouan", year: "2023", description: t("GVt Kairouan. Mosquée Okba Ibn Nafaa", "Govt Kairouan — Okba Ibn Nafaa Mosque") },
    { image: slideshow5, title: t("Geotechnique-Lac0", "Geotechnics - Lac 0"), category: t("Infrastructure", "Infrastructure"), location: "Lac 0", year: "2023", description: t("campagne géotechnique  Lac 0", "Geotechnical campaign Lac 0") },
    { image: slideshow6, title: "Bizerte", category: t("Géotechnique", "Geotechnics"), location: "Bizerte", year: "2021", description: t("Sondage à la tarière", "Auger drilling") },
  ];
  const sectors = [
    { icon: Building2, title: t("Bâtiments", "Buildings"), description: t("Immeubles résidentiels, bureaux, hôpitaux, établissements scolaires", "Residential buildings, offices, hospitals, schools"), count: "500+" },
    { icon: Factory, title: t("Industrie", "Industry"), description: t("Usines, entrepôts, zones industrielles, unités de production", "Factories, warehouses, industrial zones, production units"), count: "200+" },
    { icon: Landmark, title: t("Infrastructures", "Infrastructure"), description: t("Routes, ponts, ouvrages d'art, réseaux", "Roads, bridges, civil structures, networks"), count: "150+" },
    { icon: Waves, title: t("Ouvrages Hydrauliques", "Hydraulic Works"), description: t("Barrages, stations de pompage, réseaux d'eau", "Dams, pumping stations, water networks"), count: "50+" },
    { icon: TreePine, title: t("Environnement", "Environment"), description: t("Études d'impact, dépollution, gestion des déchets", "Impact studies, remediation, waste management"), count: "100+" },
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
            label={t("Notre Portfolio", "Our Portfolio")}
            title={t("Nos Références", "Our References")}
            highlightedWord={t("Références", "References")}
            subtitle={t(
              "Découvrez nos réalisations et les partenaires qui nous font confiance depuis plus de 15 ans.",
              "Discover our achievements and the partners who have trusted us for more than 15 years."
            )}
          />
        </div>
      </section>

      {/* Experience Introduction */}
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
              <Award className="w-10 h-10 text-primary" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
              className="text-3xl font-bold text-foreground mb-6"
            >
              {t("Plus de 15 Ans d'", "More than 15 Years of ")}<span className="text-gradient">{t("Expérience", "Experience")}</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              {t(
                "Depuis 2011, EGG a accompagné plus de 1000 projets à travers la Tunisie. Notre expérience couvre l'ensemble des domaines de la géotechnique et de l'environnement, des petits projets résidentiels aux grandes infrastructures nationales.",
                "Since 2011, EGG has supported more than 1000 projects across Tunisia. Our experience covers every field of geotechnics and the environment, from small residential projects to major national infrastructure."
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
                "Nous avons bâti des relations de confiance durables avec des clients publics et privés, des promoteurs immobiliers aux institutions gouvernementales, en passant par les bureaux d'études et les entreprises industrielles.",
                "We have built lasting trust with public and private clients — from real estate developers to government institutions, engineering firms and industrial companies."
              )}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Clients Section - No Grayscale */}
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
              {t("Nos Partenaires", "Our Partners")}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              {t("Ils Nous Font ", "They ")}<span className="text-gradient">{t("Confiance", "Trust Us")}</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Des institutions publiques aux entreprises privées, nous accompagnons des clients de tous secteurs.",
                "From public institutions to private companies, we support clients across every sector."
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex items-center justify-center bg-card rounded-2xl border border-border/30 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow ${index < 6 ? "h-36 p-3" : "h-28 p-4"}`}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`max-w-full object-contain transition-all duration-300 ${index < 6 ? "max-h-28" : "max-h-16"}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              {t("Études de Cas", "Case Studies")}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              {t("Projets ", "Recent ")}<span className="text-gradient">{t("Récents", "Projects")}</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Un aperçu de nos réalisations les plus récentes à travers la Tunisie.",
                "An overview of our most recent projects across Tunisia."
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group rounded-3xl overflow-hidden bg-background shadow-card transition-all duration-500 hover:shadow-glow"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.3 + index * 0.05 }}
                    className="absolute top-4 left-4"
                  >
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
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
              {t("Domaines d'Intervention", "Areas of Expertise")}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              {t("Secteurs ", "Sectors ")}<span className="text-gradient">{t("Desservis", "Served")}</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Notre expertise couvre une large gamme de secteurs d'activité.",
                "Our expertise covers a wide range of business sectors."
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-6 rounded-2xl bg-card border border-border/30 shadow-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <sector.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 + index * 0.1 }}
                    className="text-2xl font-bold text-primary"
                  >
                    {sector.count}
                  </motion.span>
                </div>
                
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {sector.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {sector.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-terracotta-gradient relative overflow-hidden">
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
              { value: "1000+", label: t("Projets Réalisés", "Projects Completed") },
              { value: "100+", label: t("Clients Satisfaits", "Satisfied Clients") },
              { value: "24", label: t("Gouvernorats Couverts", "Governorates Covered") },
              { value: "15+", label: t("Années d'Expérience", "Years of Experience") },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.15 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">
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
