import React from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    items: [
      { label: "Mobile", value: "+216 97 446 899", href: "tel:+21697446899" },
      { label: "Tel/Fax", value: "+216 71 762 924", href: "tel:+21671762924" },
    ],
  },
  {
    icon: Mail,
    title: "Email",
    items: [
      {
        value: "egg.brahim@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=egg.brahim@gmail.com&su=Demande%20de%20renseignements%20-%20EGG",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Adresse",
    items: [
      {
        value: "Local 1, Impasse Amine Rayhani",
        subValue: "Cité La Gazelle, Ariana 2083, Tunisie",
        href: "https://www.google.com/maps/place/entreprise+g%C3%A9ologique+et+g%C3%A9otechnique/@36.8927992,10.16759,909m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12e2cd34810a7915:0x3a3d847689aa15b6!8m2!3d36.8927992!4d10.16759!16s%2Fg%2F11t85hw6l7?entry=ttu",
      },
    ],
  },
  {
    icon: Clock,
    title: "Horaires",
    items: [
      { value: "Lundi - Vendredi: 8h00 - 17h00" },
      { value: "Samedi: 8h00 - 12h00" },
    ],
  },
];

export default function ContactPage() {
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
            label="Parlons de votre projet"
            title="Contactez-Nous"
            highlightedWord="Contactez"
            subtitle="Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets géotechniques."
          />
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 rounded-3xl bg-card border border-border/30 shadow-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                >
                  <contact.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {contact.title}
                </h3>

                {/* Items */}
                <div className="space-y-3">
                  {contact.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.label && (
                        <span className="text-xs text-muted-foreground block mb-1">
                          {item.label}
                        </span>
                      )}
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground block">{item.value}</span>
                      )}
                      {item.subValue && (
                        <span className="text-sm text-muted-foreground/70 block mt-1">
                          {item.subValue}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Notre <span className="text-gradient">Localisation</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Situés à Cité La Gazelle, Ariana, nous sommes facilement accessibles depuis tout le Grand Tunis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50 }}
            className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border/30 shadow-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d909!2d10.16759!3d36.8927992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cd34810a7915%3A0x3a3d847689aa15b6!2sentreprise%20g%C3%A9ologique%20et%20g%C3%A9otechnique!5e0!3m2!1sfr!2stn!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EGG Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
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

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150 }}
              className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            >
              Prêt à Démarrer Votre Projet?
            </motion.h3>
            <p className="text-primary-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:+21697446899"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Appelez-nous
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=egg.brahim@gmail.com&su=Demande%20de%20renseignements%20-%20EGG"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-primary-foreground/10"
              >
                <Mail className="w-5 h-5" />
                Envoyez un Email
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
