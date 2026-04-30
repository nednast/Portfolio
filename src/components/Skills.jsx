import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import MarqueeRow from "./MarqueeRow";
import "../assets/styles/Skills.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const skillData = {
  hard: [
    ["HTML5", "CSS3", "JavaScript", "React", "Vue.js"],
    ["Java", "PHP", "Symfony", "REST API", "MariaDB", "MySQL", "PostgreSQL"],
    ["Docker", "Git", "Vite", "Figma", "Agile", "Scrum"],
  ],
  soft: [
    ["Empathy", "Teamwork", "Communication", "Leadership", "Collaboration"],
    [
      "Initiative",
      "Creativity",
      "Adaptability",
      "Problem Solving",
      "Time Management",
      "Resilience",
      "Interpersonal Skills",
    ],
    [
      "Flexibility",
      "Billingual",
      "Critical Thinking",
      "Attention to Detail",
      "Quick Learning",
      "Conflict Resolution",
      "Emotional Intelligence",
    ],
  ],
};

export default function Skills() {
  const [activeType, setActiveType] = useState("hard");

  const flatList = skillData[activeType].flat();

  return (
    <section id="skills" className="skills_section">
      {/* Заголовок */}
      <motion.div
        className="skills_header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="skills_expertise_bg">Expertise</div>
        <p className="skills_core_comp">Core Competencies</p>
        <h2 className="skills_title">Skills</h2>
      </motion.div>

      {/* Квадраты-переключатели */}
      <motion.div
        className="skills_toggles"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div
          className={`skills_toggle_card ${activeType === "hard" ? "active" : ""}`}
          onClick={() => setActiveType("hard")}
          variants={fadeUp}
        >
          <div className="click_hint">
            <span>Explore</span>
            <MdArrowOutward size={18} />
          </div>
          <p className="skills_toggle_type">Programming</p>
          <h3 className="skills_toggle_title">Hard Skills</h3>
        </motion.div>
        <motion.div
          className={`skills_toggle_card ${activeType === "soft" ? "active" : ""}`}
          onClick={() => setActiveType("soft")}
          variants={fadeUp}
        >
          <div className="click_hint">
            <span>Explore</span>
            <MdArrowOutward size={18} />
          </div>
          <p className="skills_toggle_type">Management</p>
          <h3 className="skills_toggle_title">Soft Skills</h3>
        </motion.div>
      </motion.div>

      {/* Декоративные бегущие строки */}
      <div className="skills_marquee_wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {skillData[activeType].map((row, idx) => (
              <MarqueeRow
                key={`${activeType}-${idx}`}
                items={row}
                direction={idx % 2 === 0 ? "right" : "left"}
                speed={30}
                activeType={activeType}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Читабельный список */}
      <div className="skills_static_container">
        <motion.div className="skills_list_grid" layout>
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeType}
              className="skills_ul"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {flatList.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
