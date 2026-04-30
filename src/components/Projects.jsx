import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FiImage } from "react-icons/fi";
import "../assets/styles/Projects.css";

const PROJECTS = [
  {
    id: "01",
    title: "Portfolio",
    category: "Web Development · 2025",
    tags: ["React", "CSS", "JS", "Framer Motion"],
    description:
      "Personal portfolio website. Built as a personal project to showcase my skills and projects.",
    link: null,
    github: "#",
    featured: true,
  },
  {
    id: "02",
    title: "WebStudio",
    category: "Web Development · 2024",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Business card website for a marketing company. Built as a personal project with a focus on clean layout and responsive design.",
    link: null,
    github: "#",
  },
  {
    id: "03",
    title: "Vyshyvanka",
    category: "Web Development · Team Project",
    tags: ["HTML", "CSS", "JS"],
    description:
      "Online store for traditional Ukrainian clothing. Served as Scrum Master and developer — responsible for the design and adaptive implementation of the 'Our collection' section.",
    link: null,
    github: "#",
  },
  {
    id: "04",
    title: "Book Store",
    category: "Web Development · Team Project",
    tags: ["HTML", "CSS", "JS", "REST API", "Local Storage"],
    description:
      "Online bookstore. Implemented modal windows with dynamic product info display, cart logic via local storage, and REST API integration.",
    link: null,
    github: "#",
  },
  {
    id: "05",
    title: "Game of Life",
    category: "Web Development · University Project",
    tags: ["HTML", "CSS"],
    description:
      "Website presenting the stages and results of a group university project. Built as a personal project to document and showcase the team's work.",
    link: null,
    github: "#",
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

function ImagePlaceholder({ number, tall }) {
  return (
    <div className={`project_img_placeholder${tall ? " tall" : ""}`}>
      <span className="project_img_number">{number}</span>
      <div className="project_img_hint">
        <FiImage size={22} />
        <span>your image here</span>
      </div>
    </div>
  );
}

function ProjectLinks({ link, github, light }) {
  return (
    <div className="project_links">
      {link && (
        <a
          href={link}
          className={`project_link_btn${light ? " light" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <FiExternalLink size={14} /> Live
        </a>
      )}
      <a
        href={github}
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
          <ImagePlaceholder number={featured.id} tall />

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
              <ImagePlaceholder number={p.id} />

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
