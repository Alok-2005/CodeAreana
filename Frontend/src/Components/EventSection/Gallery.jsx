import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const events = [
  { img: "/gallery/event1.jpg", name: "CodeArena 2024", info: "Hosted in Pune" },
  { img: "/gallery/event2.jpg", name: "CodeArena 2023", info: "Hosted in Mumbai" },
];

const Gallery = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="gallery-container"
  >
    <h2>Gallery</h2>
    <div className="gallery-grid">
      {events.map((event, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="gallery-card"
        >
          <img src={event.img} alt={event.name} />
          <h4>{event.name}</h4>
          <p>{event.info}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Gallery;
