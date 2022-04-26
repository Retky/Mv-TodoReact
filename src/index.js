import React from "react";
import ReactDOM from "react-dom/client";
import TodoContainer from "./components/TodoContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NotMatch from "./pages/NotMatch";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>);
