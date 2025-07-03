"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Fsw Barber",
      description:
        "Plataforma moderna para barbeiros e clientes Uma aplicação web completa e intuitiva que conecta clientes e barbeiros, oferecendo uma experiência fluida para agendamento de serviços.",
      image: "/barber.png",
      liveUrl: "https://fsw-barber-five-eta.vercel.app/",
      icons: [
        "next.svg",
        "typescript.svg",
        "react.svg",
        "tailwind.svg",
        "prisma.svg",
        "post.svg",
      ],
    },
    {
      id: 2,
      title: "Self Checkout",
      description:
        "Projeto inspirado nos totens de auto-atendimento do McDonald's, proporcionando uma experiência dinâmica para realizar pedidos. Sistema ideal para restaurantes, lanchonetes, cafeterias e outros.",
      image: "/self.png",
      liveUrl: "https://self-checkout-rust.vercel.app/mcdonalds",
      icons: [
        "next.svg",
        "typescript.svg",
        "react.svg",
        "tailwind.svg",
        "prisma.svg",
        "post.svg",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-10" id="projects">
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Meu{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Portfólio
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Conheça alguns dos projetos que desenvolvi, cada um com suas
            particularidades e desafios únicos
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="lg:ml-6 lg:w-[500px]"
            >
              <Card className="group overflow-hidden border-slate-700/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70">
                <CardContent className="p-0">
                  {/* Project Images - Centralized and Optimized */}
                  <div className="relative flex items-center justify-center bg-slate-900/30 p-6">
                    <motion.div
                      className="relative max-w-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="rounded-lg object-contain shadow-lg"
                        width={320}
                        height={320}
                      />
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <motion.h3
                      className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="mb-5 text-sm leading-relaxed text-slate-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      className="mb-5 flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    >
                      {project.icons.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          className="flex items-center space-x-1 rounded-full bg-slate-700/50 px-2 py-1"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.6 + techIndex * 0.05,
                            duration: 0.3,
                          }}
                        >
                          <Image src={tech} alt={tech} width={18} height={18} />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Action Button */}
                    <motion.div
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Acessar projeto
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Decorative border */}
                  <div
                    className={`absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-blue-300 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
