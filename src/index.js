import React from "react";
import ReactDOM from "react-dom/client";
import TodoContainer from "./components/TodoContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<TodoContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>);
