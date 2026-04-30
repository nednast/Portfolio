import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiMapPin,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import contactImg from "../assets/images/contact.png";
import "../assets/styles/Contact.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function FloatingField({ label, name, type, textarea, required }) {
  return (
    <div className="field_wrap">
      {textarea ? (
        <textarea name={name} placeholder=" " required={required} rows={4} />
      ) : (
        <input
          type={type || "text"}
          name={name}
          placeholder=" "
          required={required}
        />
      )}
      <label>{label}</label>
    </div>
  );
}

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        "service_hw6ll69",
        "template_sbulc0i",
        formRef.current,
        "DGBCUDOLkFZblaXs9",
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="contact_section">
      <div className="contact_container">
        {/* ── Photo ── */}
        <motion.div
          className="contact_photo"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={contactImg} alt="Contact" />
        </motion.div>

        {/* ── Right column ── */}
        <motion.div
          className="contact_details"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="contact_header">
            <div className="contact_bg_text">Connect</div>
            <p className="contact_subtitle">Get in Touch</p>
            <h2 className="contact_main_title">Contact</h2>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="contact_motivation">
            Let's create something amazing together. Drop me a message and I'll
            get back to you as soon as possible.
          </motion.p>

          {/* Info row */}
          <motion.div variants={itemVariants} className="contact_info_row">
            <a href="mailto:nedyaknast@gmail.com" className="contact_info_item">
              <FiMail size={12} />
              <span>nedyaknast@gmail.com</span>
            </a>
            <div className="contact_info_dot" />
            <span className="contact_info_item">
              <FiMapPin size={12} />
              <span>Nice, France</span>
            </span>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            ref={formRef}
            className="contact_form"
            onSubmit={handleSubmit}
          >
            <FloatingField label="Your Name" name="from_name" required />
            <FloatingField
              label="Your Email"
              name="reply_to"
              type="email"
              required
            />
            <FloatingField
              label="Your Message"
              name="message"
              textarea
              required
            />

            <div className="contact_form_footer">
              <button
                type="submit"
                className="contact_btn"
                disabled={status === "sending"}
              >
                <span>
                  {status === "sending" ? "Sending…" : "Send Message"}
                </span>
                <FiArrowRight className="btn_arrow" size={15} />
              </button>

              {status === "success" && (
                <motion.p
                  className="form_status success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent — I'll be in touch soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  className="form_status error"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </div>
          </motion.form>

          {/* Socials */}
          <motion.div variants={itemVariants} className="contact_socials">
            <a
              href="https://www.linkedin.com/feed/"
              className="social_link"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={17} />
            </a>
            <a
              href="https://github.com/nednast"
              className="social_link"
              aria-label="GitHub"
            >
              <FiGithub size={17} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
