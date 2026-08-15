"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Java & Full Stack",
    description:
      "Building practical web applications with Java, JavaScript, React, Node.js, Express.js, and SQL.",
  },
  {
    title: "Problem Solving",
    description:
      "Strong foundation in DSA, OOP, DBMS, multithreading, and solving algorithmic problems.",
  },
  {
    title: "Project Experience",
    description:
      "Built full-stack applications such as BookIt Lite and TaskFlow.",
  },
  {
    title: "Leadership",
    description:
      "President of NIET Coding Cadets, mentoring and working with a community of 150+ students.",
  },
];

export const About = () => {
  return (
    <section
      id="about-me"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-24 md:px-20"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Me
          </span>
        </h2>

        <p className="mt-6 text-base leading-7 text-gray-400 md:text-lg">
          I&apos;m Tanmay, a Java-focused Full Stack Developer who enjoys
          building practical web applications and solving problems through
          clean, structured code. I work with modern JavaScript technologies,
          REST APIs, databases, and core computer science concepts to turn ideas
          into reliable software.
        </p>
      </motion.div>

      {/* Highlights */}
      <div className="relative z-10 mt-14 grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.045]"
          >
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
      </section>
  );
};
