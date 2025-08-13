import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MoreInfo from "./components/MoreInfo";
import Organizers from "./components/Organizers";
import Conduct from "./components/CodeOfConduct";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MoreInfo />
      <Organizers />
      <Conduct />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
