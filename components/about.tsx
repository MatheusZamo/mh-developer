"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { Code2, Users, Trophy } from "lucide-react";

const About = () => {
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

  const stats = [
    {
      icon: Code2,
      label: "Projetos Concluídos",
      value: "50+",
      color: "text-cyan-400",
    },
    {
      icon: Users,
      label: "Clientes Satisfeitos",
      value: "30+",
      color: "text-blue-500",
    },
    {
      icon: Trophy,
      label: "Certificações",
      value: "15+",
      color: "text-cyan-500",
    },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-20">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-400/30"
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
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

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
            Sobre{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Mim
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Conheça um pouco mais sobre minha jornada e experiência no
            desenvolvimento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Profile Card */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="h-full border-slate-700/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70">
              <CardContent className="p-8">
                <div className="flex flex-col gap-8 md:flex-row">
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      Desenvolvedor Full-Stack
                    </h3>

                    <div className="space-y-4 leading-relaxed text-slate-300">
                      <p>
                        Sou formado em Análise e Desenvolvimento de Sistemas e
                        apaixonado por tecnologia, sempre buscando transformar
                        ideias em soluções eficientes.
                      </p>

                      <p>
                        Trabalho com tecnologias modernas como React,
                        TypeScript, Next.js, Node.js, Prisma, PostgreSQL e
                        Tailwind CSS para desenvolver aplicações rápidas,
                        escaláveis e bem estruturadas, tanto no front-end quanto
                        no back-end.
                      </p>

                      <p>
                        Meu foco é resolver problemas através da programação,
                        tenho experiência em desenvolver projetos do zero,
                        garantindo código limpo e funcionalidades robustas para
                        atender às necessidades dos usuários.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border-slate-700/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70">
              <CardContent className="p-8">
                <h3 className="mb-6 text-center text-xl font-bold text-white">
                  Conquistas
                </h3>

                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-center space-x-4 rounded-lg bg-slate-700/30 p-4 transition-colors duration-300 hover:bg-slate-700/50"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`rounded-lg bg-slate-600/50 p-2`}>
                        <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-2xl font-bold ${stat.color}`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-slate-400">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
