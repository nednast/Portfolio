import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../assets/styles/Hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero_logo">
        <img src="/src/assets/images/logo.png" alt="AN logo" />
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

      <div className="hero_bottom">
        <div className="hero_photo">
          <img src="/src/assets/images/hero.png" alt="Anastasia Nediak" />
        </div>
        <div className="hero_name">
          <span>Anastasia</span>
          <span>Nediak</span>
        </div>

        <div className="hero_tagline">
          <p>Not just code ⸺</p>
          <p>I build experiences</p>
          <p>with taste, intention,</p>
          <p>and a little bit of attitude.</p>
        </div>

        {/* Role — слева внизу */}
        <div className="hero_role">
          <p>UX / UI Designer</p>
          <div className="hero_role_separator" />
          <p>Full-Stack Developer</p>
        </div>

        {/* Scroll indicator */}
        <div
          className="hero_scroll"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <MdOutlineKeyboardArrowDown size={60} />
          <MdOutlineKeyboardArrowDown size={60} />
        </div>
      </div>
    </section>
  );
}
