import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "React", icon: "react.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "Next.js", icon: "next.svg" },
  { name: "Node.js", icon: "node.svg" },
  { name: "PostgreSQL", icon: "post.svg" },
  { name: "Prisma", icon: "prisma.svg" },
  { name: "Tailwind", icon: "tailwind.svg" },
  { name: "Javascript", icon: "javascript.svg" },
  { name: "Css", icon: "css.svg" },
  { name: "Html", icon: "html.svg" },
  { name: "Bootstrap", icon: "bootstrap.svg" },
];

const Carousel = () => {
  return (
    <motion.div
      className="mt-8 mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <h3 className="mb-8 text-center text-2xl font-bold text-white">
        Tecnologias que{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Domino
        </span>
      </h3>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-8"
          animate={{
            x: [0, -(technologies.length * 128)],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: technologies.length * 3,
              ease: "linear",
            },
          }}
          style={{ width: `${technologies.length * 3 * 128}px` }}
        >
          {[...technologies, ...technologies, ...technologies].map(
            (tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="group/item flex h-24 w-24 flex-shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-blue-500/20"
                whileHover={{
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <motion.div className="mb-1 text-2xl transition-transform duration-300 group-hover/item:scale-110">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={25}
                    height={25}
                    className="drop-shadow-lg"
                  />
                </motion.div>
                <span className="text-xs font-medium text-white transition-all duration-300 group-hover/item:font-semibold group-hover/item:text-blue-400">
                  {tech.name}
                </span>
              </motion.div>
            ),
          )}
        </motion.div>

        {/* Gradient overlays com efeito mais suave */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent" />
      </div>
    </motion.div>
  );
};

export default Carousel;
