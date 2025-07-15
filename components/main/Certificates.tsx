"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    title: "Object Oriented Programming in Java",
    organization: "UC San Diego",
    date: "Dec 10, 2022",
    link: "https://coursera.org/verify/KQUZBDU64K6P",
  },
  {
    title: "Java Programming: Arrays, Lists, and Structured Data",
    organization: "Duke University",
    date: "Dec 14, 2022",
    link: "https://coursera.org/verify/Q8F9YJYNJ7YJ",
  },
  {
    title: "Python for Data Science, AI & Development",
    organization: "IBM",
    date: "May 05, 2023",
    link: "https://coursera.org/verify/7VU3LD727Y93",
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    organization: "IBM",
    date: "Apr 17, 2023",
    link: "https://coursera.org/verify/KNCAJWP9CTPS",
  },
  {
    title: "Algorithmic Toolbox",
    organization: "UC San Diego",
    date: "Mar 13, 2023",
    link: "https://coursera.org/verify/G2DE34BDRZ9Q",
  },
  {
    title: "Python Basics",
    organization: "University of Michigan",
    date: "Jan 22, 2023",
    link: "https://coursera.org/verify/DMREWSGQEGBG",
  },
  {
    title: "Human-Centered Design for Inclusive Innovation",
    organization: "University of Toronto",
    date: "May 21, 2023",
    link: "https://coursera.org/verify/H53J8A4QA5GC",
  },

  {
    title: "Explore Machine Learning using R",
    organization: "Infosys Springboard",
    date: "Mar 25, 2025",
    link: "https://www.linkedin.com/posts/tanmay-awasthi-programmer4_machine-learning-using-r-activity-7313252460461006848-1rTn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQkaXkBVXVYK4WOj21U10rv1lyZuDvpTEU",
  },
  {
    title: "Natural Language Processing using Python",
    organization: "Infosys Springboard",
    date: "Sep 10, 2024",
    link: "https://www.linkedin.com/posts/tanmay-awasthi-programmer4_network-fundamentals-activity-7313252710798041088-ZMiN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADQkaXkBVXVYK4WOj21U10rv1lyZuDvpTEU",
  },
  {
    title: "Java Programming Fundamentals",
    organization: "Infosys Springboard",
    date: "May 9, 2024",
    link: "https://drive.google.com/file/d/1MqpILYj8_59gpyWzs3Hq5j7tx-p91BMC/view?usp=sharing",
  },
  {
    title: "Kotlin Programming",
    organization: "Infosys Springboard",
    date: "Mar 25, 2025",
    link: "https://www.linkedin.com/posts/tanmay-awasthi-programmer4_kotlin-programming-activity-7313252152192167937-QEsl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADQkaXkBVXVYK4WOj21U10rv1lyZuDvpTEU",
  },
  {
    title: "Database Management System – Science Graduates",
    organization: "Infosys Springboard",
    date: "Sep 10, 2024",
    link: "https://drive.google.com/file/d/1PiNJNAzPs554h40l7DrEWc2VDu8zP5FJ/view?usp=drive_link",
  },
  {
    title: "Network Fundamentals",
    organization: "Infosys Springboard",
    date: "Mar 26, 2025",
    link: "https://drive.google.com/file/d/11qujLeoLrGRsQI8nT8QCi9YBliT_b0qX/view?usp=drive_link",
  },
  {
    title: "C Programming",
    organization: "Infosys Springboard",
    date: "Jan 2, 2024",
    link: "https://drive.google.com/file/d/1vw-0ww5XBRmQIkbj288GWqvBgRP1Fbyd/view?usp=drive_link",
  },
  {
    title: "Introduction to Python",
    organization: "Infosys Springboard",
    date: "May 9, 2024",
    link: "https://drive.google.com/file/d/1AYNt6ed3Z7w4YAmOK5crx5LU1PgYp3QD/view?usp=drive_link",
  },
  {
    title: "Programming Fundamentals using Python - Part 2",
    organization: "Infosys Springboard",
    date: "Jan 2, 2024",
    link: "https://drive.google.com/file/d/1eZn7uZ9jnlCeeRKLPv0MpIsoYMVMcO4y/view?usp=sharing",
  },
  {
    title: "Programming Fundamentals using Python - Part 1",
    organization: "Infosys Springboard",
    date: "Jan 2, 2024",
    link: "https://drive.google.com/file/d/1Ig4-p3rF2k7dRoIqG8PWzdv-BFUUErmz/view?usp=sharing",
  },
  {
    title: "Twitter Bootstrap",
    organization: "Infosys Springboard",
    date: "Sep 10, 2024",
    link: "https://drive.google.com/file/d/1Tl9p1V7lDdkQaXoYd0j8_w_hMqeOjHCQ/view?usp=drive_link",
  },
];


export const Certificates = () => {
  return (
<section id="certificates" className="px-6 md:px-20 pt-16 text-white">
  <motion.h2
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-5xl font-bold text-center text-white mb-10 tracking-wide drop-shadow-md"

>
  <span className="mr-2">📄</span> Certificates
</motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="text-center text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-10"
  >
    A showcase of certifications I’ve earned through hands-on learning in development, AI, and software fundamentals.
  </motion.p>


      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="border border-[#2A0E61] rounded-lg p-4 hover:shadow-md hover:border-purple-500 transition hover:bg-white/5"

          >
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">{cert.title}</h3>
            <p className="text-sm text-gray-300">
              {cert.organization} — {cert.date}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:underline hover:text-purple-300 transition"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
