import React from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Building2, Factory, Landmark, Home, Waves, TreePine, MapPin, Calendar, Award } from "lucide-react";
import client1 from "@/assets/clients/client-1.webp";
import steg from "@/assets/clients/steg.png";
import client4 from "@/assets/clients/client-4.gif";
import scet from "@/assets/clients/scet.svg";
import avicenne from "@/assets/clients/avicenne.jpg";
import client5 from "@/assets/clients/client-5.png";
import habitat from "@/assets/clients/habitat.png";
import acte from "@/assets/clients/acte.png";
import ministereAgriculture from "@/assets/clients/ministere-agriculture.png";
import econet from "@/assets/clients/econet.png";
import ministereFinances from "@/assets/clients/ministere-finances.png";
import hiwar from "@/assets/clients/hiwar.png";
import slideshow1 from "@/assets/projects/slideshow-1.jpg";
import slideshow2 from "@/assets/projects/slideshow-2.jpg";
import slideshow3 from "@/assets/projects/slideshow-3.jpg";
import slideshow4 from "@/assets/projects/slideshow-4.jpg";
import slideshow5 from "@/assets/projects/slideshow-5.jpg";
import slideshow6 from "@/assets/projects/slideshow-6.jpg";

const clients = [
  { name: "Client 1", logo: client1 },
  { name: "STEG", logo: steg },
  { name: "Client 4", logo: client4 },
  { name: "SCET", logo: scet },
  { name: "Avicenne", logo: avicenne },
  { name: "Client 5", logo: client5 },
  { name: "Habitat", logo: habitat },
  { name: "ACTE", logo: acte },
  { name: "Ministère de l'Agriculture", logo: ministereAgriculture },
  { name: "Econet", logo: econet },
  { name: "Ministère des Finances", logo: ministereFinances },
  { name: "Hiwar", logo: hiwar },
];

const caseStudies = [
  {
    image: slideshow1,
    title: "Complexe Résidentiel - Les Jardins de Carthage",
    category: "Géotechnique",
    location: "Tunis",
    year: "2024",
    description: "Étude géotechnique complète pour un ensemble résidentiel de 150 logements. Sondages carottés, essais pressiométriques et recommandations de fondations superficielles.",
  },
  {
    image: slideshow2,
    title: "Centrale Solaire - Tataouine",
    category: "Environnement",
    location: "Tataouine",
    year: "2024",
    description: "Étude d'impact environnemental et reconnaissance géotechnique pour l'implantation d'une centrale photovoltaïque de 50 MW.",
  },
  {
    image: slideshow3,
    title: "Centre Commercial - Mall of Sousse",
    category: "Travaux Spéciaux",
    location: "Sousse",
    year: "2023",
    description: "Fondations profondes par micropieux pour un centre commercial de 25 000 m². Suivi géotechnique et contrôle qualité.",
  },
  {
    image: slideshow4,
    title: "Usine Agroalimentaire - Zone Industrielle",
    category: "Géotechnique",
    location: "Sfax",
    year: "2023",
    description: "Étude de sol et dimensionnement des fondations pour une unité de transformation agroalimentaire avec zones de stockage.",
  },
  {
    image: slideshow5,
    title: "Route Nationale RN3 - Déviation",
    category: "Infrastructure",
    location: "Bizerte",
    year: "2023",
    description: "Reconnaissance géotechnique pour 12 km de tracé routier. Sondages, essais de laboratoire et étude de stabilité des talus.",
  },
  {
    image: slideshow6,
    title: "Hôtel Resort - Zone Touristique",
    category: "Géotechnique",
    location: "Hammamet",
    year: "2024",
    description: "Étude géotechnique et hydrogéologique pour un complexe hôtelier 5 étoiles en bord de mer. Analyse des risques littoraux.",
  },
];

const sectors = [
  {
    icon: Building2,
    title: "Bâtiments",
    description: "Immeubles résidentiels, bureaux, hôpitaux, établissements scolaires",
    count: "500+",
  },
  {
    icon: Factory,
    title: "Industrie",
    description: "Usines, entrepôts, zones industrielles, unités de production",
    count: "200+",
  },
  {
    icon: Landmark,
    title: "Infrastructures",
    description: "Routes, ponts, ouvrages d'art, réseaux",
    count: "150+",
  },
  {
    icon: Home,
    title: "Résidentiel",
    description: "Villas, lotissements, ensembles résidentiels",
    count: "300+",
  },
  {
    icon: Waves,
    title: "Ouvrages Hydrauliques",
    description: "Barrages, stations de pompage, réseaux d'eau",
    count: "50+",
  },
  {
    icon: TreePine,
    title: "Environnement",
    description: "Études d'impact, dépollution, gestion des déchets",
    count: "100+",
  },
];

export default function ReferencesPage() {
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
            label="Notre Portfolio"
            title="Nos Références"
            highlightedWord="Références"
            subtitle="Découvrez nos réalisations et les partenaires qui nous font confiance depuis plus de 12 ans."
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
              Plus de 12 Ans d'<span className="text-gradient">Expérience</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              Depuis 2011, EGG a accompagné plus de 1000 projets à travers la Tunisie. 
              Notre expérience couvre l'ensemble des domaines de la géotechnique et de l'environnement, 
              des petits projets résidentiels aux grandes infrastructures nationales.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Nous avons bâti des relations de confiance durables avec des clients publics et privés, 
              des promoteurs immobiliers aux institutions gouvernementales, en passant par les bureaux 
              d'études et les entreprises industrielles.
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
              Nos Partenaires
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Ils Nous Font <span className="text-gradient">Confiance</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des institutions publiques aux entreprises privées, nous accompagnons des clients de tous secteurs.
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
                className="flex items-center justify-center h-28 bg-card rounded-2xl p-4 border border-border/30 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain transition-all duration-300"
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
              Études de Cas
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Projets <span className="text-gradient">Récents</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un aperçu de nos réalisations les plus récentes à travers la Tunisie.
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
              Domaines d'Intervention
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Secteurs <span className="text-gradient">Desservis</span>
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre expertise couvre une large gamme de secteurs d'activité.
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
              { value: "1000+", label: "Projets Réalisés" },
              { value: "50+", label: "Clients Satisfaits" },
              { value: "24", label: "Gouvernorats Couverts" },
              { value: "12+", label: "Années d'Expérience" },
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
