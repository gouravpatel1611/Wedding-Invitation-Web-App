import React from "react";
import OpeningScreen from "./components/OpeningScreen";
import HeroSection from "./components/HeroSection";
import Events from "./components/Events";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import bgImage from "./assets/couple.png";

function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "scale(1.05)",
        zIndex: -2,
      }}
    ></div>

    {/* Overlay */}
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0)", // 👈 halka dark
        zIndex: -1,
      }}
    ></div>

      {/* Main Content */}
      <div style={{ color: "white" }}>
        <OpeningScreen />
        <HeroSection />
        <Events />
        <Venue />
      </div>
    </div>
  );
}

export default App;
