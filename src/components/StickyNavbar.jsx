import { useState, useEffect } from "react";
import "../assets/styles/StickyNavbar.css";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../assets/images/logo.png";

const NAV_LINKS = ["about", "skills", "experience", "projects", "contact"];

export default function StickyNavbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 200);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navbarOpacity = useTransform(scrollY, [200, 400], [0, 1]);
  const navbarY = useTransform(scrollY, [200, 400], [-20, 0]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="navbar_sticky"
        style={{
          opacity: navbarOpacity,
          y: navbarY,
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <div className="navbar_sticky_logo">
          <img src={logo} alt="AN" />
        </div>

        <ul className="navbar_sticky_links">
          {NAV_LINKS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar_hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
        </button>
      </motion.div>

      {menuOpen && (
        <motion.div
          className="navbar_mobile_menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ul>
            {NAV_LINKS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id);
                  }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
