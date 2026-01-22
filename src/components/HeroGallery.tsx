import React from "react";
import { motion } from "framer-motion";

import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";

const images = [gallery1, gallery2, gallery3, gallery4];

export function HeroGallery() {
  return (
    <div className="w-full overflow-hidden py-8">
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
          {[...images, ...images].map((img, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden border border-border/30"
            >
              <img
                src={img}
                alt={`Project ${(index % images.length) + 1}`}
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
          {[...images.reverse(), ...images].map((img, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden border border-border/30"
            >
              <img
                src={img}
                alt={`Project ${(index % images.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
