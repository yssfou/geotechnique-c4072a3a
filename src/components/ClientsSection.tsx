import React from "react";
import { motion } from "framer-motion";
import client1 from "@/assets/clients/client-1.webp";
import steg from "@/assets/clients/steg.png";
import client4 from "@/assets/clients/client-4.gif";
import scet from "@/assets/clients/scet.svg";
import avicenne from "@/assets/clients/avicenne.jpg";
import client5 from "@/assets/clients/client-5.png";
import habitat from "@/assets/clients/habitat.png";
const clients = [{
  name: "Client 1",
  logo: client1
}, {
  name: "STEG",
  logo: steg
}, {
  name: "Client 4",
  logo: client4
}, {
  name: "SCET",
  logo: scet
}, {
  name: "Avicenne",
  logo: avicenne
}, {
  name: "Client 5",
  logo: client5
}, {
  name: "Habitat",
  logo: habitat
}];

// Duplicate for seamless infinite scroll
const duplicatedClients = [...clients, ...clients, ...clients];
export const ClientsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Partenaires de confiance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous sommes fiers de collaborer avec des entreprises et institutions de premier plan
          </p>
        </motion.div>

        {/* Logo Slideshow */}
        <div className="relative">
          {/* Gradient overlays for seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-8">
            <motion.div
              className="flex items-center gap-12"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 flex items-center justify-center h-28 w-56 bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};