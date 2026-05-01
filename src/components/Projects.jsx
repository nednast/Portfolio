import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "../assets/styles/Projects.css";

import imgPortfolio from "../assets/images/Portfolio.png";
import imgWebStudio from "../assets/images/WebStudio.png";
import imgVyshyvanka from "../assets/images/VyshivankaStore.png";
import imgBookStore from "../assets/images/BookStore.png";
import imgGameOfLife from "../assets/images/GameOfLife.png";

const PROJECTS = [
  {
    id: "01",
    title: "Portfolio",
    category: "Web Development",
    tags: ["React", "CSS", "JS", "Framer Motion"],
    description:
      "Personal portfolio website. Built as a personal project to showcase my skills and projects.",
    link: "https://portfolio-blond-one-20.vercel.app/",
    github: "https://github.com/nednast/Portfolio",
    image: imgPortfolio,
    featured: true,
  },
  {
    id: "02",
    title: "WebStudio",
    category: "Web Development",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Business card website for a marketing company. Built as a personal project with a focus on clean layout and responsive design.",
    link: "https://nednast.github.io/goit-markup-hw-06/",
    github: "https://github.com/nednast/goit-markup-hw-06",
    image: imgWebStudio,
  },
  {
    id: "03",
    title: "Vyshyvanka",
    category: "Web Development · Team Project",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Online store for traditional Ukrainian clothing. Served as Scrum Master and developer — responsible for the design and adaptive implementation of the 'Our collection' section.",
    link: "https://sergiylymarenko.github.io/CrazySuperStars/",
    github: "https://github.com/SergiyLymarenko/CrazySuperStars",
    image: imgVyshyvanka,
  },
  {
    id: "04",
    title: "Book Store",
    category: "Web Development · Team Project",
    tags: ["HTML", "CSS", "JS", "REST API", "Local Storage"],
    description:
      "Online bookstore. Implemented modal windows with dynamic product info display, cart logic via local storage, and REST API integration.",
    link: "https://vladyslavhn.github.io/JSquad/",
    github: "https://github.com/VladyslavHn/JSquad",
    image: imgBookStore,
  },
  {
    id: "05",
    title: "Game of Life",
    category: "Web Development · University Project",
    tags: ["HTML", "CSS"],
    description:
      "Website presenting the stages and results of a group university project. Built as a personal project to document and showcase the team's work.",
    link: "https://nednast.github.io/SAE101/",
    github: "https://github.com/nednast/SAE101",
    image: imgGameOfLife,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 56 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: delay ?? 0,
    },
  }),
};

function ProjectImage({ src, alt, tall, number }) {
  return (
    <div className={`project_img_placeholder${tall ? " tall" : ""}`}>
      <img src={src} alt={alt} className="project_img_real" />
      <div className="project_img_overlay" />
      <span className="project_img_number">{number}</span>
    </div>
  );
}

function ProjectLinks({ link, github, light }) {
  return (
    <div className="project_links">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`project_link_btn${light ? " light" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <FiExternalLink size={14} /> Live
        </a>
      )}
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className={`project_link_btn ghost${light ? " light" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <FiGithub size={14} /> GitHub
      </a>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="projects_section">
      <div className="projects_header">
        <div className="projects_bg_text">Creations</div>
        <p className="projects_subtitle">My Works</p>
        <h2 className="projects_main_title">Projects</h2>
      </div>

      <div className="projects_container">
        {/* ── Featured card ── */}
        <motion.div
          className="project_featured"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <ProjectImage src={featured.image} alt={featured.title} number={featured.id} tall />

          <div className="project_featured_info">
            <p className="project_category">{featured.category}</p>
            <h3 className="project_title">{featured.title}</h3>
            <div className="project_tags">
              {featured.tags.map((t) => (
                <span key={t} className="project_tag">{t}</span>
              ))}
            </div>
            <p className="project_description">{featured.description}</p>
            <ProjectLinks link={featured.link} github={featured.github} />
          </div>
        </motion.div>

        {/* ── Grid cards ── */}
        <div className="projects_grid">
          {rest.map((p, i) => (
            <motion.div
              key={p.id}
              className="project_card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i * 0.12}
              viewport={{ once: true, margin: "-60px" }}
            >
              <ProjectImage src={p.image} alt={p.title} number={p.id} />

              <div className="project_card_body">
                <p className="project_category">{p.category}</p>
                <h3 className="project_title">{p.title}</h3>
                <div className="project_tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project_tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* slides up on hover */}
              <div className="project_card_overlay">
                <p className="project_description">{p.description}</p>
                <ProjectLinks link={p.link} github={p.github} light />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
