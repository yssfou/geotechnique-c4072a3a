import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/drilling-hero.png";
import project1 from "@/assets/projects/project-1.jpg";
import project2 from "@/assets/projects/project-2.jpg";
import project3 from "@/assets/projects/project-3.jpg";
import project4 from "@/assets/projects/project-4.jpg";
import project5 from "@/assets/projects/project-5.jpg";
interface NavigationItem {
  label: string;
  hasDropdown?: boolean;
  onClick?: () => void;
}
interface ProgramCard {
  image: string;
  category: string;
  title: string;
  onClick?: () => void;
}
interface HeroSectionProps {
  logo?: string;
  navigation?: NavigationItem[];
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  title?: string;
  subtitle?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  disclaimer?: string;
  socialProof?: {
    avatars: string[];
    text: string;
  };
  programs?: ProgramCard[];
  className?: string;
  children?: React.ReactNode;
}
export function HeroSection({
  logo = "EGG",
  navigation = [{
    label: "Accueil"
  }, {
    label: "Services",
    hasDropdown: true
  }, {
    label: "À Propos"
  }, {
    label: "Clients"
  }, {
    label: "Contact"
  }],
  ctaButton = {
    label: "Contactez-nous",
    onClick: () => {
      const element = document.querySelector("#contact");
      if (element) element.scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  title = "Entreprises Géologiques & Géotechniques",
  subtitle = "Spécialistes en sondages géotechniques, forages d'eau, études environnementales et travaux spéciaux. Votre partenaire de confiance en Tunisie.",
  primaryAction = {
    label: "Découvrir nos Services",
    onClick: () => {
      const element = document.querySelector("#services");
      if (element) element.scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  secondaryAction = {
    label: "En savoir plus",
    onClick: () => {
      const element = document.querySelector("#about");
      if (element) element.scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  disclaimer = "Experts en Géotechnique depuis 2011",
  socialProof = {
    avatars: [project1, project2, project3],
    text: "700+ projets réalisés avec succès"
  },
  programs = [{
    image: project1,
    category: "Géotechnique",
    title: "Sondages & Essais"
  }, {
    image: project2,
    category: "Forages",
    title: "Forages d'Eau"
  }, {
    image: project3,
    category: "Environnement",
    title: "Études Environnementales"
  }, {
    image: project4,
    category: "Travaux",
    title: "Travaux Spéciaux"
  }, {
    image: project5,
    category: "Expertise",
    title: "Conseil Technique"
  }],
  className,
  children
}: HeroSectionProps) {
  return <section id="accueil" className={cn("relative min-h-screen flex flex-col overflow-hidden", className)}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Geotechnical drilling site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Header */}
      

      {/* Main Content */}
      {children ? <div className="relative z-10 flex-1 flex items-center justify-center px-6">
          {children}
        </div> : <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto">
          {/* Title */}
          <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Entreprises</span>
            <br />
            <span className="text-gradient">Géologiques &</span>
            <br />
            <span className="text-foreground">Géotechniques</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.3
      }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            {subtitle}
          </motion.p>

          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.4
      }} className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              {primaryAction && <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={primaryAction.onClick} className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-glow">
                  {primaryAction.label}
                  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>}

              {secondaryAction && <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={secondaryAction.onClick} className="flex items-center gap-2 border border-border/50 bg-secondary/30 backdrop-blur-sm text-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-secondary/50">
                  {secondaryAction.label}
                </motion.button>}
            </motion.div>}

          {/* Disclaimer */}
          {disclaimer && <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.7,
        delay: 0.5
      }} className="text-sm text-muted-foreground mb-6">
              {disclaimer}
            </motion.p>}

          {/* Social Proof */}
          {socialProof && <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.6
      }} className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {socialProof.avatars.map((avatar, index) => <img key={index} src={avatar} alt={`Project ${index + 1}`} className="w-10 h-10 rounded-full border-2 border-background object-cover" />)}
              </div>

              <span className="text-sm text-muted-foreground">
                {socialProof.text}
              </span>
            </motion.div>}
        </div>}

      {/* Program Cards Carousel */}
      {programs.length > 0 && <div className="relative z-10 w-full overflow-hidden pb-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling Container */}
          <motion.div className="flex gap-6 px-6" animate={{
        x: ["0%", "-50%"]
      }} transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear"
        }
      }}>
            {/* Duplicate programs for seamless loop */}
            {[...programs, ...programs].map((program, index) => <motion.div key={index} whileHover={{
          scale: 1.02,
          y: -5
        }} onClick={program.onClick} className="relative flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden cursor-pointer group">
                {/* Image */}
                <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {program.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-1">
                    {program.title}
                  </h3>
                </div>
              </motion.div>)}
          </motion.div>
        </div>}
    </section>;
}