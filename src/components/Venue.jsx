export default function Venue() {
  return (
    <div style={{ marginTop: "50px" }} >
      <div style={{ marginTop: "25px", borderTop: "1px solid #ddd", paddingTop: "15px" }}>
        <h4 style={{ color: "#FFD700", fontSize:"5vw" }}>📞 संपर्क</h4>
      <div style={{fontSize:"7vw" , color:"whitesmoke" , fontWeight:"bold"}}>
        <p style={{ margin: "5px 0" }}>
          📱 7999868670
        </p>
        <p style={{ margin: "5px 0" }}>
          📱 6260702385
        </p>
        </div>
      </div>
      <h2>विवाह स्थल :- </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.9666164780315!2d83.51946736956951!3d22.494444398721733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3989ff006ab07321%3A0x9603d29176c78d79!2sPatel%20krishi%20Kendra!5e1!3m2!1sen!2sin!4v1774043789317!5m2!1sen!2sin"
        width="100%"
        height="200"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <h2> निवास स्थान :- </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14076.240765930517!2d83.32581471733506!3d21.8866723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27249ffd5a998f%3A0x355e36dc30d99290!2sDhanagar%2C%20Chhattisgarh%20496001!5e1!3m2!1sen!2sin!4v1774041893500!5m2!1sen!2sin"
        width="100%"
        height="200"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

