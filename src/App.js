import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SortingVisualizer from "./pages/SortingVisualizer";
import SearchingVisualizer from "./pages/SearchingVisualizer";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorting" element={<SortingVisualizer />} />
          <Route path="/searching" element={<SearchingVisualizer />} />
        </Routes>
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
