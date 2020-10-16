import React, { useState, useEffect } from "react";
import "./global.css";
import Header from "./header.js";
import TopCardList from "./top-card-list.js";
import Overview from "./overview.js";
import Switch from "./switch";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
  });

  return <main className={mainClass}></main>;
}

export default App;
