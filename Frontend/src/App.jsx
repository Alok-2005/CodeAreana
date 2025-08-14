import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import IndexPage from "./index.jsx";
import Event from "./Components/EventSection/Event";
import CodeArena from "./Components/EventSection/CodeArena.jsx";
import "./app.css"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {/* <Route path="/events" element={<Event />} /> */}
        
        <Route path="/events" element={<CodeArena />} />
      </Routes>
    </Router>
  ) 
 }
 
  
  export default App