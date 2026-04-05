/* eslint-disable no-unused-vars */
import "../assets/styles/StickyNavbar.css";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../assets/images/logo.png";
export default function StickyNavbar() {
  const { scrollY } = useScroll();

  // Настраиваем появление: на 200px начинается, к 400px полностью виден
  const navbarOpacity = useTransform(scrollY, [200, 400], [0, 1]);
  const navbarY = useTransform(scrollY, [200, 400], [-20, 0]);

  return (
    <motion.div
      className="navbar_sticky"
      style={{
        opacity: navbarOpacity,
        y: navbarY,
        pointerEvents: navbarOpacity === 0 ? "none" : "auto",
      }}
    >
      <div className="navbar_sticky_logo">
        <img src={logo} alt="AN" />
      </div>
      <ul className="navbar_sticky_links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </motion.div>
  );
}
