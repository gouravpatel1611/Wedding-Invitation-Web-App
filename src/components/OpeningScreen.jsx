import title_img from "../assets/shubh_vivah.png";
import head from "../assets/name.png"
import { useEffect, useState } from "react";
import Countdown from "./countDown";


export default function OpeningScreen() {
  const [name, setName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userName = params.get("name");
    setName(userName || "अतिथि");
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column",boxShadow: "0 0 50px rgba(0,0,0,0.5)" }}>
      {/* title Image */}
      <img
        src={title_img}
        alt="logo"
        style={{
          position: "absolute",
          top: "-25px",
          left: "-25px",
          width: "200px",
        }}
      />
      <div
        style={{
          background: "rgba(0,0,0,0.30)",
          width: "100vw",
          position: "absolute",
          top: "40vh",
          borderRadius: "40px",
          boxShadow: "0 0 50px rgba(0,0,0,0.3)",
        }}>

        <img
          src={head}
          alt="logo"
          style={{
            width: "95vw",
            filter: "brightness(180%) contrast(200%)"
          }}
        />
      </div>
      <div
        style={{ fontSize: "5vw", margin: "auto", position: "relative", top: "28vh", display: "flex", flexDirection: "column", height: "auto", width: "90vw" }}
      >
        <div style={{ fontWeight: "bold" }}>प्रतिष्ठा में ,</div>
        <div style={{ marginLeft: "10vw" }}>आदरणीय <span style={{ fontSize: "6vw", fontWeight: "bold", marginLeft: "5vw" }}>{name}</span></div>
      <div style={{ marginTop:"20px", padding:"5px" ,background: "rgba(0,0,0,0.80)",borderRadius: "40px",boxShadow: "0 0 50px rgba(0,0,0,0.3)"}}>
        <Countdown/>
      </div>
      </div>
    </div>
  );
}