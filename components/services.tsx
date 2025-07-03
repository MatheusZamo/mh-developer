"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { Globe, Headset, MonitorCog, Search } from "lucide-react";

const Services = () => {
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

  const services = [
    {
      icon: Globe,
      title: "Sites Sob Medida",
      description:
        "Crio soluções web únicas, totalmente adaptadas às suas necessidades e objetivos comerciais.",
      features: ["Sites institucionais", "E-commerce", "Landing pages", "PWAs"],
    },
    {
      icon: Search,
      title: "Estratégias de SEO",
      description:
        "Utilizo técnicas de SEO personalizadas para aumentar a visibilidade do seu site e atrair mais tráfego qualificado.",
      features: [
        "SEO On-page",
        "Pesquisa de palavras-chave",
        "Otimização técnica",
        "Link building",
      ],
    },
    {
      icon: Headset,
      title: "Suporte Confiável",
      description:
        "Ofereço suporte técnico contínuo para garantir que seu site esteja sempre operacional e eficiente.",
      features: [
        "Atualizações de segurança",
        "Correção de bugs",
        "Relatórios de performance",
        "Otimização contínua",
      ],
    },
    {
      icon: MonitorCog,
      title: "Personalização Profunda",
      description:
        "Adaptações técnicas avançadas que alinham seu site às exigências específicas do seu negócio.",
      features: [
        "Funcionalidades customizadas",
        "Integrações de API",
        "Automações personalizadas",
        "Relatórios sob medida",
      ],
    },
  ];

  return (
    <section id="servicos" className="relative overflow-hidden px-4 py-20">
      <motion.div
        className="container mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Meus{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Ofereço soluções completas em desenvolvimento, desde a concepção até
            a entrega final
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group h-full border-slate-700/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-15 w-15 items-center justify-center rounded-lg border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 transition-transform duration-300 group-hover:scale-110">
                      <service.icon className="h-10 w-10 text-blue-400" />
                    </div>
                  </div>

                  <h3 className="mb-3 text-center text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
                    {service.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-xs text-slate-400"
                      >
                        <div className="mr-2 h-1 w-1 rounded-full bg-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Services;
