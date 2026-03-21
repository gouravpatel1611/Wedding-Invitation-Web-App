import head from "../assets/name.png"
import { useEffect, useState } from "react";
import Countdown from "./countDown";

import Swastik from "./swastik"
import ganeshji from "../assets/ganeshji.png"

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
      
      


       <div style={{
        display: "flex", flexDirection: "column", background: "rgba(0,0,0,0.50)"
      }}>
        <div style={{
          fontSize: "5vw", fontWeight: "bold", textAlign: "center", color: "yellow"
        }}>||  श्री गणेशाय नमः  ||</div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: 'space-around',
          fontSize: "3.5vw",
          fontWeight: 'bold',
          textAlign:"center"
        }}>
          <div><Swastik /></div>
          <div>वक्रतुण्ड महाकाय निर्विघ्नं कुरु मे देव </div>
          <div> <img src={ganeshji} alt="ganesh ji" style={{ width: "40px" }} /> </div>
          <div>सूर्यकोटि समप्रभ : | सर्वकार्येषु सर्वदा ||</div>
          <div> <Swastik /> </div>
        </div>
      </div>






      <div
        style={{
          background: "rgba(0,0,0,0.80)",
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
        <div style={{ marginLeft: "5vw" }}>आदरणीय <span style={{ fontSize: "6vw", fontWeight: "bold", marginLeft: "5vw" }}>{name}</span></div>
      <div style={{ marginTop:"10px", marginBottom:"30px", padding:"5px" ,background: "rgba(0,0,0,0.80)",borderRadius: "40px",boxShadow: "0 0 50px rgba(0,0,0,0.3)"}}>
        <Countdown/>
      </div>
      </div>
    </div>
  );
}
