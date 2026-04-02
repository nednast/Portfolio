import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import MarqueeRow from "./MarqueeRow";
import "../assets/styles/Skills.css";

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
      <div className="skills_header">
        <div className="skills_expertise_bg">Expertise</div>
        <p className="skills_core_comp">Core Competencies</p>
        <h2 className="skills_title">Skills</h2>
      </div>

      {/* Квадраты-переключатели */}
      <div className="skills_toggles">
        <div
          className={`skills_toggle_card ${activeType === "hard" ? "active" : ""}`}
          onClick={() => setActiveType("hard")}
        >
          <div className="click_hint">
            <span>Explore</span>
            <MdArrowOutward size={18} />
          </div>
          <p className="skills_toggle_type">Programming</p>
          <h3 className="skills_toggle_title">Hard Skills</h3>
        </div>
        <div
          className={`skills_toggle_card ${activeType === "soft" ? "active" : ""}`}
          onClick={() => setActiveType("soft")}
        >
          <div className="click_hint">
            <span>Explore</span>
            <MdArrowOutward size={18} />
          </div>
          <p className="skills_toggle_type">Management</p>
          <h3 className="skills_toggle_title">Soft Skills</h3>
        </div>
      </div>

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
