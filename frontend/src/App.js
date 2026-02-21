import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <main className="md:ml-64 transition-all duration-500">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
