import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    values: [
      { text: "+216 97 446 899", subLabel: "Mobile" },
      { text: "+216 71 762 924", subLabel: "Tel/Fax" },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    values: [{ text: "egg.brahim@gmail.com" }],
  },
  {
    icon: MapPin,
    label: "Adresse",
    values: [
      {
        text: "Local 1, Impasse Amine Rayhani",
        subText: "Cité La Gazelle, Ariana 2083, Tunisie",
      },
    ],
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

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
            Contactez-Nous
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Prêt à <span className="text-gradient">Démarrer</span> Votre Projet?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Notre équipe d'experts est à votre disposition pour répondre à toutes
            vos questions et vous accompagner dans vos projets.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-card border border-border/30 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-glow cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <contact.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {contact.label}
              </h3>

              {/* Values */}
              <div className="space-y-3">
                {contact.values.map((value, vIndex) => (
                  <div key={vIndex} className="flex items-start gap-2">
                    <div className="flex-1">
                      {value.subLabel && (
                        <span className="text-xs text-muted-foreground block mb-1">
                          {value.subLabel}
                        </span>
                      )}
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {value.text}
                      </span>
                      {value.subText && (
                        <span className="text-sm text-muted-foreground block mt-1">
                          {value.subText}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="rounded-2xl overflow-hidden border border-border/30 shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d909!2d10.16759!3d36.8927992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cd34810a7915%3A0x3a3d847689aa15b6!2sentreprise%20g%C3%A9ologique%20et%20g%C3%A9otechnique!5e0!3m2!1sfr!2stn!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EGG Location - Cité La Gazelle, Ariana"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-terracotta-gradient relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Besoin d'une Étude Géotechnique?
              </h3>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et
                obtenir un devis personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="tel:+21697446899"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
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
                  className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-primary-foreground/10"
                >
                  <Mail className="w-5 h-5" />
                  Envoyez un Email
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
