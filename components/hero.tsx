"use client";

import { Badge } from "./ui/badge";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
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

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const scrollForSection = (id: string) => {
    const element = document.querySelector(`#${id}`);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-blue-400/30"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute h-1 w-1 rounded-full bg-cyan-300/40"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Developer Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <Badge
            variant="secondary"
            className="border-blue-500/20 bg-slate-800/50 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm transition-colors duration-300 hover:bg-slate-700/50"
          >
            <Code className="mr-2 h-4 w-4" />
            Mh Developer
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">
            <span className="text-white">Programando </span>
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              soluções
            </motion.span>
            <br />
            <span className="text-white">para seus </span>
            <motion.span
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              desafios
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl"
        >
          Desenvolvedor full-stack apaixonado por criar experiências digitais
          <br />E resolver problemas com código limpo e eficiente.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollForSection("projects")}
              size="lg"
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/25"
            >
              Meus Projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollForSection("contact")}
              variant="outline"
              size="lg"
              className="cursor-pointer border-slate-600 bg-transparent px-8 py-3 text-lg font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800 hover:text-white"
            >
              <Mail className="mr-2 h-5 w-5" />
              Entre em Contato
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/MatheusZamo",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/matheuszamo/",
              label: "LinkedIn",
            },
            { icon: Mail, href: "#", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              variants={socialVariants}
              target="_blank"
              whileHover={{
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full border border-slate-700 bg-slate-800/50 p-3 text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-700/50 hover:text-blue-400"
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
