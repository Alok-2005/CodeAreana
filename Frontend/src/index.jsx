import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import { Tooltip } from "bootstrap";

export default function App() {
  useEffect(() => {
    // Initialize Bootstrap tooltips (if any exist)
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((el) => new Tooltip(el));
  }, []);

  const redirectToContact = () => {
    const el = document.getElementById("contact_us");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return <div></div>;
}
