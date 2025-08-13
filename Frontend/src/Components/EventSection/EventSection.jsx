import React, { useState } from "react";
import { motion } from "framer-motion";
import "./EventSection.css";
import AboutEvent from "./AboutEvent";
import Workflow from "./Workflow";
import Theme from "./Theme";
import Gallery from "./Gallery";

const EventSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="event-section">
      <h1 className="section-title">CodeArena Event</h1>
      <div className="tabs">
        {["about", "workflow", "theme", "gallery"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "active" : ""}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <motion.div
        className="tab-content"
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === "about" && <AboutEvent />}
        {activeTab === "workflow" && <Workflow />}
        {activeTab === "theme" && <Theme />}
        {activeTab === "gallery" && <Gallery />}
      </motion.div>
    </section>
  );
};

export default EventSection;
