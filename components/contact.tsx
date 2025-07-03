"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageCircle,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@mhdev.com",
      href: "mailto:contato@mhdev.com",
      color: "text-blue-400",
      description: "Para propostas formais",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Belo Horizonte - MG",
      href: "#",
      color: "text-cyan-400",
      description: "Atendimento remoto",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/MatheusZamo",
      color: "hover:text-slate-300",
      description: "Veja meus códigos",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/matheuszamo/",
      color: "hover:text-blue-400",
      description: "Conecte-se comigo",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/5531991826861?text=Olá! Gostaria de conversar sobre um projeto.",
      color: "hover:text-green-400",
      description: "Chat direto",
    },
  ];

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-gradient-to-br px-4 py-20"
    >
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Title */}
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Entre em{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Pronto para transformar sua ideia em realidade? Vamos conversar
            sobre seu próximo projeto!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border-slate-700/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70">
              <CardContent className="p-8">
                <h3 className="mb-6 text-center text-2xl font-bold text-white">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center space-x-4 rounded-xl border border-slate-600/30 bg-slate-700/30 p-6 transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-700/50"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div
                        className={`rounded-xl bg-slate-600/50 p-4 transition-colors duration-300 group-hover:bg-slate-600/70`}
                      >
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 text-sm text-slate-400">
                          {info.label}
                        </div>
                        <div className="mb-1 text-lg font-semibold text-white">
                          {info.value}
                        </div>
                        <div className="text-xs text-slate-500">
                          {info.description}
                        </div>
                      </div>
                      {info.href.startsWith("http") && (
                        <ExternalLink className="h-4 w-4 text-slate-400 transition-colors duration-300 group-hover:text-white" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links & Quick Actions */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Social Links */}
            <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70">
              <CardContent className="">
                <h3 className="mb-6 text-center text-xl font-bold text-white">
                  Redes Sociais
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-xl bg-slate-700/50 p-6 text-slate-400 ${social.color} group flex flex-col items-center space-y-2 border border-slate-600/30 transition-all duration-300 hover:scale-105 hover:border-slate-500/50`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      whileHover={{ y: -5 }}
                    >
                      <social.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-center text-xs font-medium">
                        {social.label}
                      </span>
                      <span className="text-center text-xs text-slate-500">
                        {social.description}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70">
              <CardContent className="">
                <h3 className="mb-6 text-center text-xl font-bold text-white">
                  Contato Rápido
                </h3>

                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className="w-full rounded-xl bg-green-600 py-4 text-lg font-semibold text-white hover:bg-green-700"
                    >
                      <a
                        href={`https://wa.me/5531991826861?text=${encodeURIComponent("Olá! Tenho interesse em seus serviços de desenvolvimento.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>Orçamento via WhatsApp</span>
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-xl border-blue-600 bg-transparent py-4 text-lg font-semibold text-blue-300 hover:bg-blue-600 hover:text-white"
                    >
                      <a
                        href="mailto:contato@mhdev.com?subject=Interesse em projeto&body=Olá! Gostaria de conversar sobre um projeto."
                        className="flex items-center justify-center space-x-2"
                      >
                        <Mail className="h-5 w-5" />
                        <span>Enviar Email</span>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
