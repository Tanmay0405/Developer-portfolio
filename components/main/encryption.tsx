"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Certificates } from "@/components/main/Certificates";

export const Encryption = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden">
      {/* 🔹 Header */}
      <motion.div
      id="certificates"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-10 z-10 text-[36px] sm:text-[42px] font-bold text-center text-gray-200"
      >
        📜{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Certificates
        </span>
        
      </motion.div>

      {/* 🔐 Lock Button */}
      <div
            className="flex flex-col items-center z-20 mt-20 cursor-pointer group"
            onClick={() => {
      setIsUnlocked(true);
      setTimeout(() => {
        const element = document.getElementById("certificates");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }}    
      >
        <div className="relative w-[70px] h-[120px] flex flex-col items-center">
          {/* Top part of lock */}
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className={`absolute top-0 transition-transform duration-300 ${
              isUnlocked ? "translate-y-[24px]" : "translate-y-[16px]"
            } group-hover:translate-y-[20px]`}
          />
          {/* Main body of lock */}
          <Image
            src="/lock-main.png"
            alt="Lock body"
            width={70}
            height={70}
            className="absolute bottom-0 z-10"
          />
        </div>

        {/* Toggle label */}
        <div className="Welcome-box px-[15px] py-[4px] mt-4 border border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px] text-gray-100">
            {isUnlocked ? "Unlocked!" : "Click to Unlock"}
          </h1>
        </div>
      </div>

      {/* 🔓 Certificates Section */}
      {isUnlocked && (
        <motion.div
          id="certificates"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full mt-12 z-20"
        >
          <Certificates />
        </motion.div>
      )}

      {/* 🔹 Bottom Message */}
      {!isUnlocked && (
        <div className="absolute z-[10] bottom-[10px] px-[5px]">
          <div className="cursive text-[20px] font-medium text-center text-gray-300">
            Unlock to view certifications.
          </div>
        </div>
      )}
      

      {/* 🔸 Background Video */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="false"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
