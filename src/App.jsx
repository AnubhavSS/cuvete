import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Header />
      <div className="dire">
      <Sidebar />
      <Hero/>
      </div>
    </>
  );
}

export default App;
