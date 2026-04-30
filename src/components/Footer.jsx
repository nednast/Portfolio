import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/Footer.css";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8 }}
    >
      <p>
        &copy; {new Date().getFullYear()} Anastasia Nediak. All rights reserved.
      </p>
    </motion.footer>
  );
}
