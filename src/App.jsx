import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChampionsTable from "./components/ChampionsTable";
import Bitacora from "./components/Bitacora";

function App() {
  // Estado del tema: 'light' por defecto (mismo estado inicial que el proyecto original)
  const [theme, setTheme] = useState("light");

  // Alterna entre tema claro y oscuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Aplica o quita la clase 'dark-mode' del body cuando cambia el tema
  useEffect(() => {
  document.body.classList.toggle("dark-mode", theme === "dark");
}, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Navbar />

      <main className="main-container">
        <Hero />
        <ChampionsTable />
        <Bitacora />
      </main>
    </>
  );
}

export default App;