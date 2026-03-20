
import Swastik from "./swastik"
import ganeshji from "../assets/ganeshji.png"
export default function HeroSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", boxShadow: "0 0 50px rgba(0,0,0,1)" }}>
      <div style={{
        display: "flex", flexDirection: "column", background: "rgba(0,0,0,0.30)"
      }}>


        <div style={{
          fontSize: "5vw", fontWeight: "bold", textAlign: "center", padding: "10px", color: "yellow"
        }}>||  श्री गणेशाय नमः  ||</div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: 'space-around',
          fontSize: "4vw",
          fontWeight: 'bold',
          textAlign:"center"
        }}>
          <div><Swastik /></div>
          <div>वक्रतुण्ड महाकाय निर्विघ्नं कुरु मे देव </div>
          <div> <img src={ganeshji} alt="ganesh ji" style={{ width: "50px" }} /> </div>
          <div>सूर्यकोटि समप्रभ | सर्वकार्येषु सर्वदा ||</div>
          <div> <Swastik /> </div>
        </div>
      </div>

      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between"
      }}>

        <div style={{
          fontSize: "7vw",
          fontWeight: "bold",
          background: "rgba(0,0,0,0.30)",
          width: "100%",
          textAlign: "center",
          marginTop: "10px"
        }}>&#128329; मांगलिक क्षणिकाएँ &#128329;</div>
      </div>

      <div
        style={{
          padding: "20px 30px",
          background: "rgba(0,0,0,0.50)",
          textAlign: "center",
          borderRadius: "10px",

          boxShadow: `
      0 4px 10px rgba(0,0,0,0.3),
      0 0 55px rgba(8, 169, 233, 1)
    `,

          width: "fit-content",
          margin: "40px auto",
          fontSize:"5vw",
          display:"flex",
          flexDirection:"column",
          gap:5
        }}
      >
        <div style={{fontSize:"5.5vw" , fontWeight:"bold"}}>।। मण्डपाच्छादन, हरिद्रालेपन ।।</div>
        <div>वैशाख शुक्ल पक्ष सप्तमी</div>
        <div> 23 अप्रैल 2026, गुरूवार</div>
      </div>


      <div
        style={{
          padding: "20px 30px",
          background: "rgba(0,0,0,0.50)",
          textAlign: "center",
          borderRadius: "10px",

          boxShadow: `
      0 4px 10px rgba(0,0,0,0.3),
      0 0 55px rgba(8, 169, 233, 1)
    `,

          width: "fit-content",
          margin: "40px auto",
          fontSize:"5vw",
          display:"flex",
          flexDirection:"column",
          gap:5
        }}
      >
        <div style={{fontSize:"5.5vw" , fontWeight:"bold"}}>।। देवपूजन, कलश दीप, मातृवंदन ।।</div>
        <div>वैशाख शुक्ल पक्ष अष्टमी</div>
        <div> 24 अप्रैल 2026, शुक्रवार</div>
      </div>


      <div
        style={{
          padding: "20px 30px",
          background: "rgba(0,0,0,0.50)",
          textAlign: "center",
          borderRadius: "10px",

          boxShadow: `
      0 4px 10px rgba(0,0,0,0.3),
      0 0 55px rgba(8, 169, 233, 1)
    `,

          width: "fit-content",
          margin: "40px auto",
          fontSize:"5vw",
          display:"flex",
          flexDirection:"column",
          gap:5
        }}
      >
        <div style={{fontSize:"5.5vw" , fontWeight:"bold"}}>।। बारात गमन एवं पाणिग्रहण ।। </div>
        <div>वैशाख शुक्ल पक्ष नवमी</div>
        <div> 25 अप्रैल 2026, शनिवार</div>
      </div>



      <div
        style={{
          padding: "20px 30px",
          background: "rgba(0,0,0,0.50)",
          textAlign: "center",
          borderRadius: "10px",

          boxShadow: `
      0 4px 10px rgba(0,0,0,0.3),
      0 0 55px rgba(8, 169, 233, 1)
    `,

          width: "fit-content",
          margin: "40px auto",
          fontSize:"5vw",
          display:"flex",
          flexDirection:"column",
          gap:5
        }}
      >
        <div style={{fontSize:"5.5vw" , fontWeight:"bold"}}>।। वधू प्रवेश ।। </div>
        <div> वैशाख शुक्ल पक्ष दशमी</div>
        <div>  26 अप्रैल 2026, रविवार</div>
      </div>





      <div
        style={{
          padding: "20px 30px",
          background: "rgba(0,0,0,0.50)",
          textAlign: "center",
          borderRadius: "10px",

          boxShadow: `
      0 4px 10px rgba(0,0,0,0.3),
      0 0 55px rgba(8, 169, 233, 1)
    `,

          width: "fit-content",
          margin: "40px auto",
          fontSize:"5vw",
          display:"flex",
          flexDirection:"column",
          gap:5
        }}
      >
        <div style={{fontSize:"5.2vw" , fontWeight:"bold"}}>।। आशीर्वाद समारोह एवं स्वरूचिभोज ।।</div>
        <div> वैशाख शुक्ल पक्ष दशमी</div>
        <div>  26 अप्रैल 2026, रविवार</div>
        <div> <b> समय:</b> रात्रि 07 बजे से आपके आगमन तक</div>
        <div> <b> स्थान: </b> निवास स्थान धनागर, रायगढ़ (छ.ग.)</div>
      </div>



      <div
        style={{
          padding: "5px 5px",
          background: "rgba(0,0,0,0.50)",
          textAlign: "center",
          borderRadius: "10px",

          boxShadow: `
      0 4px 10px rgba(0,0,0,0.3),
      0 0 55px rgb(233, 8, 207)
    `,

          width: "fit-content",
          margin: "40px auto",
          fontSize:"5vw",
        }}
      >
        <div> बारात शाम 03 बजे धनागर से मुड़ागाँव (पत्थलगाँव) के लिए प्रस्थान करेगी ।</div>

      </div>



   





    </div>
  );
}