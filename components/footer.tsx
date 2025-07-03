"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div className="relative z-10 container mx-auto px-4">
        {/* Divider */}
        <motion.div
          className="border-t border-slate-800"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="flex items-center space-x-2 text-sm text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <span>© {currentYear} Mh Developer</span>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="cursor-pointer border-slate-700 bg-transparent text-slate-400 hover:border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                <ArrowUp className="mr-2 h-4 w-4" />
                Voltar ao Topo
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
