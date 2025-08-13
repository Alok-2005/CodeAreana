import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CodeArena from "./Components/CodeArena.jsx";
import Form from "./Components/Form.jsx";
import Event from "./Components/EventSection/Event.jsx"

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CodeArena />
    {/* <Event/> */}
  </StrictMode>
);
