import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl font-bold text-gradient mb-4">EGG</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Entreprises Géologiques et Géotechniques - Votre partenaire de
              confiance pour tous vos projets de sondages, forages et études
              environnementales en Tunisie.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:+21697446899"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
              >
                <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:egg.brahim@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://maps.google.com/?q=La+Gazelle+Ariana+Tunisia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
              >
                <MapPin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Services", href: "#services" },
                { label: "À Propos", href: "#apropos" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Nos Services
            </h4>
            <ul className="space-y-3">
              {[
                "Sondages Géotechniques",
                "Forages d'Eau",
                "Études Environnementales",
                "Travaux Spéciaux",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} EGG - Entreprises Géologiques et Géotechniques. Tous
            droits réservés.
          </p>
          <p className="text-sm text-muted-foreground">
            La Gazelle, Ariana, Tunisie
          </p>
        </motion.div>
        
        {/* Creator Credit */}
        <div className="mt-4 text-right">
          <p className="text-xs text-muted-foreground/60">
            Created by Ourabi Youssef
          </p>
        </div>
      </div>
    </footer>
  );
}
