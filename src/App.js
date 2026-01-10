import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Register from "./pages/Register";
import FAQ from "./pages/FAQ";
import PreviousEvents from "./pages/PreviousEvents";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/previous-events" element={<PreviousEvents />} />
      </Routes>
    </Router>
  );
}

export default App;
