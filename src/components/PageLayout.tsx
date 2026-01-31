import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  showHeroBackground?: boolean;
}

export function PageLayout({ children, className, showHeroBackground = false }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page content with padding for fixed nav */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn("pt-20", className)}
      >
        {children}
      </motion.main>
      
      <Footer />
    </div>
  );
}
