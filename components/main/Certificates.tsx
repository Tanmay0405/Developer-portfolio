"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    title: "Object Oriented Programming in Java",
    organization: "UC San Diego",
    date: "Dec 10, 2022",
    category: "Java & Programming",
    link: "https://coursera.org/verify/KQUZBDU64K6P",
  },
  {
    title: "Java Programming: Arrays, Lists, and Structured Data",
    organization: "Duke University",
    date: "Dec 14, 2022",
    category: "Java & Programming",
    link: "https://coursera.org/verify/Q8F9YJYNJ7YJ",
  },
  {
    title: "Algorithmic Toolbox",
    organization: "UC San Diego",
    date: "Mar 13, 2023",
    category: "DSA & Algorithms",
    link: "https://coursera.org/verify/G2DE34BDRZ9Q",
  },
  {
    title: "Java Programming Fundamentals",
    organization: "Infosys Springboard",
    date: "May 9, 2024",
    category: "Java & Programming",
    link: "https://drive.google.com/file/d/1MqpILYj8_59gpyWzs3Hq5j7tx-p91BMC/view?usp=sharing",
  },
  {
    title: "Database Management System – Science Graduates",
    organization: "Infosys Springboard",
    date: "Sep 10, 2024",
    category: "Databases",
    link: "https://drive.google.com/file/d/1PiNJNAzPs554h40l7DrEWc2VDu8zP5FJ/view?usp=drive_link",
  },
  {
    title: "Network Fundamentals",
    organization: "Infosys Springboard",
    date: "Mar 26, 2025",
    category: "Computer Science",
    link: "https://drive.google.com/file/d/11qujLeoLrGRsQI8nT8QCi9YBliT_b0qX/view?usp=drive_link",
  },
  {
    title: "Natural Language Processing using Python",
    organization: "Infosys Springboard",
    date: "Sep 10, 2024",
    category: "AI & Machine Learning",
    link: "https://www.linkedin.com/posts/tanmay-awasthi-programmer4_network-fundamentals-activity-7313252710798041088-ZMiN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADQkaXkBVXVYK4WOj21U10rv1lyZuDvpTEU",
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    organization: "IBM",
    date: "Apr 17, 2023",
    category: "AI & Machine Learning",
    link: "https://coursera.org/verify/KNCAJWP9CTPS",
  },
];

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative flex flex-col items-center px-6 py-24 md:px-20"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-gray-400 md:text-base"
      >
        Selected certifications demonstrating my foundation in Java, computer
        science, databases, algorithms, and emerging technologies.
      </motion.p>

      {/* Certificate Grid */}
      <div className="relative z-10 grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
            }}
            viewport={{ once: true }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-white/[0.045] hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]"
          >
            {/* Top accent */}
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

            <div>
              {/* Category */}
              <span className="inline-flex rounded-full border border-purple-500/25 bg-purple-500/[0.08] px-3 py-1 text-xs font-medium text-purple-200">
                {cert.category}
              </span>

              {/* Certificate title */}
              <h3 className="mt-4 text-xl font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                {cert.title}
              </h3>

              {/* Organization */}
              <p className="mt-3 text-sm font-medium text-gray-200">
                {cert.organization}
              </p>

              {/* Date */}
              <p className="mt-1 text-sm text-gray-500">{cert.date}</p>
            </div>

            {/* Certificate Link */}
            <div className="mt-6">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition-colors duration-300 hover:text-cyan-300"
              >
                View Certificate
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
