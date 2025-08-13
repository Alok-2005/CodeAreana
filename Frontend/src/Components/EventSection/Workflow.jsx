import React from "react";
import { motion } from "framer-motion";
import "./Workflow.css"; // Create CSS for arrows/flowchart

const steps = [
  "Registration",
  "Problem Assignment",
  "Code Submission",
  "Evaluation",
  "Results & Prizes",
];

const Workflow = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="workflow-container"
  >
    <h2>Workflow</h2>
    <div className="flowchart">
      {steps.map((step, idx) => (
        <div className="flow-step" key={idx}>
          <div className="step-icon">{idx + 1}</div>
          <div className="step-text">{step}</div>
          {idx < steps.length - 1 && <div className="arrow">→</div>}
        </div>
      ))}
    </div>
  </motion.div>
);

export default Workflow;
