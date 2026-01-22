import React from "react";
import { motion } from "framer-motion";
import client1 from "@/assets/clients/client-1.webp";
import steg from "@/assets/clients/steg.png";
import client4 from "@/assets/clients/client-4.gif";
import scet from "@/assets/clients/scet.svg";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";

const clients = [
  { name: "Client 1", logo: client1 },
  { name: "STEG", logo: steg },
  { name: "Client 4", logo: client4 },
  { name: "SCET", logo: scet },
];

const galleryImages = [gallery1, gallery2, gallery3, gallery4];

// Duplicate for seamless infinite scroll
const duplicatedClients = [...clients, ...clients, ...clients];

export const ClientsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-terracotta text-sm font-semibold tracking-wider uppercase mb-4 block">
            Partenaires de confiance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos <span className="text-terracotta">Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous sommes fiers de collaborer avec des entreprises et institutions de premier plan
          </p>
        </motion.div>

        {/* Logo Slideshow */}
        <div className="relative mb-12">
          {/* Gradient overlays for seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-16"
              animate={{
                x: ["0%", "-33.33%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-24 w-48 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Project Gallery Slideshow */}
        <div className="mt-8">
          {/* First row - scrolls left */}
          <div className="mb-4 overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...galleryImages, ...galleryImages].map((img, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden border border-border/30"
                >
                  <img
                    src={img}
                    alt={`Project ${(index % galleryImages.length) + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row - scrolls right (opposite direction) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...galleryImages].reverse().concat([...galleryImages].reverse()).map((img, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden border border-border/30"
                >
                  <img
                    src={img}
                    alt={`Project ${(index % galleryImages.length) + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
