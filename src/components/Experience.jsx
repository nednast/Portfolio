import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdArrowOutward,
  MdSchool,
  MdWork,
  MdVerified,
  MdFileDownload,
  MdClose,
  MdTranslate,
} from "react-icons/md";
import "../assets/styles/Experience.css";

const expData = [
  {
    id: 1,
    type: "work",
    size: "main_top",
    date: "2025 — Present",
    title: "Full Stack Developer",
    company: "Azur Multimedia Solutions",
    shortDesc: "Building scalable web applications and APIs.",
    points: [
      "Designing and developing modern web applications using React",
      "Building and integrating APIs for seamless system communication",
      "Optimizing application performance and user experience",
      "Connecting internal tools and external services for data flow",
      "Maintaining existing applications and fixing bugs",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "REST API", "Git"],
  },
  {
    id: 2,
    type: "edu",
    size: "wide",
    date: "2024 — 2027",
    title: "BUT Informatique",
    company: "IUT Nice Côte d’Azur",
    shortDesc: "Comprehensive education in computer science.",
    points: [
      "Software design and full-stack development",
      "System architecture and data management",
      "Application security and system virtualization",
      "Specialization in Application Development",
    ],
    stack: ["Java", "C++", "SQL", "Networks", "System Design"],
  },
  {
    id: 3,
    type: "course",
    size: "medium",
    date: "2023 — 2024",
    title: "Full Stack Program",
    company: "GoIT IT School",
    shortDesc: "Intensive full stack development training.",
    points: [
      "Front-end: HTML5, CSS3, JavaScript (ES6+), and React",
      "Back-end: Node.js, Express, and MongoDB/PostgreSQL",
      "TypeScript for scalable and type-safe code",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "TypeScript"],
  },
  {
    id: 4,
    type: "cert",
    size: "small",
    date: "2024",
    title: "Certificate",
    company: "GoIT",
    shortDesc: "Full Stack Certification",
    points: [
      "Official certification confirming proficiency in web development.",
    ],
    link: "/docs/fullstack-certificate.pdf",
  },
];

const languages = [
  { name: "Russian", level: "Native", progress: 100 },
  { name: "Ukrainian", level: "C2", progress: 100 },
  { name: "French", level: "C1", progress: 90 },
  { name: "English", level: "B2", progress: 75 },
];

export default function Experience() {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedId ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  const selectedItem = expData.find((item) => item.id === selectedId);

  return (
    <section id="experience" className="exp_section">
      <motion.div
        className="exp_header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="exp_bg_text">Journey</div>
        <p className="exp_subtitle">Professional Path</p>
        <h2 className="exp_main_title">Experience & Education</h2>
      </motion.div>

      <div className="exp_bento_container">
        {/* Карточки опыта */}
        {expData.map((item, i) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            className={`bento_item ${item.size} ${item.type}`}
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 0.1,
            }}
          >
            <div className="bento_card_top">
              <span className="bento_date">{item.date}</span>
              <div className="bento_icon">
                {item.type === "work" ? (
                  <MdWork />
                ) : item.type === "edu" ? (
                  <MdSchool />
                ) : (
                  <MdVerified />
                )}
              </div>
            </div>
            <div className="bento_card_content">
              <h3 className="bento_card_title">{item.title}</h3>
              <p className="bento_card_company">{item.company}</p>
            </div>
            <div className="click_more">View details →</div>
          </motion.div>
        ))}

        {/* НОВАЯ КАРТОЧКА: Языки */}
        <motion.div
          className="bento_item languages_card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
        >
          <div className="bento_card_top">
            <span className="bento_date">Languages</span>
            <div className="bento_icon">
              <MdTranslate />
            </div>
          </div>
          <div className="lang_list">
            {languages.map((lang) => (
              <div key={lang.name} className="lang_item">
                <div className="lang_info">
                  <span className="lang_name">{lang.name}</span>
                  <span className="lang_level">{lang.level}</span>
                </div>
                <div className="lang_progress_bg">
                  <motion.div
                    className="lang_progress_fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {selectedId && (
          <div className="modal_wrapper">
            <motion.div
              className="modal_overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className={`modal_content ${selectedItem.type === "work" ? "light" : "dark"}`}
            >
              <button className="close_btn" onClick={() => setSelectedId(null)}>
                <MdClose size={28} />
              </button>
              <div className="modal_inner_scroll">
                <span className="modal_date">{selectedItem.date}</span>
                <h2 className="modal_title">{selectedItem.title}</h2>
                <p className="modal_company">{selectedItem.company}</p>
                <div className="modal_divider" />
                <ul className="modal_points_list">
                  {selectedItem.points.map((p, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                    >
                      {p}
                    </motion.li>
                  ))}
                </ul>
                {selectedItem.stack && (
                  <div className="modal_stack">
                    {selectedItem.stack.map((t) => (
                      <span key={t} className="tech_tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {selectedItem.link && (
                  <a href={selectedItem.link} className="modal_link">
                    View Original Certificate <MdArrowOutward />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="cv_download_container">
        <a
          href="/docs/Anastasiia-Nediak-CV.pdf"
          download
          className="cv_download_btn"
        >
          <span>Download CV</span>
          <MdFileDownload size={24} />
        </a>
      </div>
    </section>
  );
}
