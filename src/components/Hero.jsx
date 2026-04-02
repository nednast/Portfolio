import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../assets/styles/Hero.css";
import logo from "../assets/images/logo.png";
import heroImg from "../assets/images/hero.png";

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Анимации привязаны к прогрессу скролла секции (0 - начало, 1 - конец)
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Role и Стрелки теперь тоже плавные
  const roleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero_logo">
        <img src={logo} alt="AN logo" />
      </div>

      <nav>
        <ul className="hero_nav">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Фото — теперь всегда по центру благодаря x: "-50%" */}
      <motion.div
        className="hero_photo"
        style={{ y: photoY, opacity: photoOpacity, x: "-50%" }}
      >
        <img src={heroImg} alt="Anastasia Nediak" />
      </motion.div>

      {/* Имя */}
      <motion.div
        className="hero_name"
        style={{ y: nameY, opacity: nameOpacity }}
      >
        <span>Anastasia</span>
        <span>Nediak</span>
      </motion.div>

      {/* Tagline */}
      <motion.div
        className="hero_tagline"
        style={{ y: taglineY, opacity: taglineOpacity }}
      >
        <p>Not just code —</p>
        <p>I build experiences</p>
        <p>with taste, intention,</p>
        <p>and a little bit of attitude.</p>
      </motion.div>

      {/* Role */}
      <motion.div className="hero_role" style={{ opacity: roleOpacity }}>
        <p>UX / UI Designer</p>
        <div className="hero_role_separator" />
        <p>Full-Stack Developer</p>
      </motion.div>

      {/* Scroll arrows */}
      <motion.div
        className="hero_scroll"
        style={{ opacity: scrollOpacity }}
        onClick={() =>
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <MdOutlineKeyboardArrowDown size={60} />
        <MdOutlineKeyboardArrowDown size={60} />
      </motion.div>
    </section>
  );
}
