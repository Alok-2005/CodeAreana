import React from "react";
import { motion } from "framer-motion";
import "./Theme.css";

const Theme = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="theme-container"
  >
    <h2>Theme: AI in Healthcare</h2>
    <div className="floating-icons">
      <motion.img
        src="/icons/ai-chip.png"
        className="icon"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src="/icons/heartbeat.png"
        className="icon"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.img
        src="/icons/dna.png"
        className="icon"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      />
    </div>
  </motion.div>
);

export default Theme;
