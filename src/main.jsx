import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App";
import HomePage from "./components/pages/home-page/home-page";
import WordPage from "./components/pages/word-page/word-page";

import './main.css'


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} >
        <Route index element={<HomePage />} />
        <Route path="/word/:word" element={<WordPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
