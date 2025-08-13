import React from "react";
import { motion } from "framer-motion";

const AboutEvent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2>About CodeArena</h2>
    <p>
      CodeArena is a competitive coding event where participants showcase their
      problem-solving skills. It challenges coders with algorithmic and AI-based
      problems, with a special focus on AI applications in healthcare.
    </p>
    <ul>
      <li>Who can participate: Students & Professionals</li>
      <li>Event Duration: 2 hours</li>
      <li>Prizes for top coders</li>
    </ul>
  </motion.div>
);

export default AboutEvent;
