"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.5 }}
      className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300 ease-in-out"
    >
      <Image
        src={`/skills/${src}`}
        width={width}
        height={height}
        alt={name}
        className="drop-shadow-md hover:drop-shadow-xl"
      />
      <p className="text-sm text-gray-200 font-medium text-center">{name}</p>
    </motion.div>
  );
};
