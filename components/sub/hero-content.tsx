"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 mt-32 lg:mt-40 w-full z-[20] gap-12 lg:gap-4"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start">
        {/* Badge */}
        <motion.div
          variants={slideInFromTop(0.3)}
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] flex items-center justify-center lg:justify-start w-fit mx-auto lg:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />

          <h1 className="Welcome-text text-[13px]">
            Java & Full Stack Developer
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[700px] w-full h-auto"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              scalable web
            </span>{" "}
            experiences with code & creativity.
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-4 max-w-[650px] leading-relaxed mx-auto lg:mx-0"
        >
          I&apos;m Tanmay, a Full Stack Developer focused on Java, JavaScript,
          React, Node.js, and SQL. I enjoy solving problems, building practical
          applications, and turning ideas into reliable software.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-2"
        >
          {/* View Projects */}
          <a
            href="#projects"
            className="py-3 px-7 button-primary text-center text-white cursor-pointer rounded-lg min-w-[160px] transition-transform duration-300 hover:scale-105"
          >
            View Projects
          </a>

          {/* View Resume */}
          <a
            href="https://drive.google.com/file/d/1J-6P-k7JaI7S9sj1Xhdj_9ssZp05PNq6/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-7 border border-[#7042f88b] bg-[#0f0a1f]/60 text-white text-center cursor-pointer rounded-lg min-w-[160px] transition-all duration-300 hover:border-[#b49bff] hover:bg-[#7042f81a] hover:scale-105"
          >
            View Resume
          </a>
        </motion.div>
      </div>

      {/* Right Illustration */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="Developer illustration"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
