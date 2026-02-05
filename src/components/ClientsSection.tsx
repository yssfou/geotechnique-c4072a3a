import React from "react";
import { motion } from "framer-motion";
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
            Ils Nous Font <span className="text-gradient">Confiance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous sommes fiers de collaborer avec des entreprises et institutions de premier plan
          </p>
        </motion.div>

        {/* Infinite Logo Carousel */}
        <div className="relative">
          {/* Gradient overlays for seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-8">
            <div className="flex animate-scroll-left">
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div
                  key={`first-${client.name}-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center h-24 w-48 bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/30 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${client.name}-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center h-24 w-48 bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/30 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};