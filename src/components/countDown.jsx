import "./style.css";
import { useEffect, useState } from "react";

function Countdown() {
  const targetDate = new Date("2026-04-26T00:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    let diff = targetDate - now;

    let isPast = false;

    // agar time cross ho gaya
    if (diff < 0) {
      isPast = true;
      diff = now - targetDate; // reverse difference
    }

    return {
      isPast,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer">
      <div style={{ fontWeight: "bold", marginTop: "1vh" }}>
        {timeLeft.isPast
          ? ":- शुभ अवसर को बीते समय :-"
          : "-: शुभ अवसर तक शेष समय :-"}
      </div>

      <div className="time-box">
        <div>{timeLeft.days} दिन</div>
        <div>{timeLeft.hours} घंटे</div>
        <div>{timeLeft.minutes} मिनट</div>
        <div>{timeLeft.seconds} सेकंड</div>
      </div>
    </div>
  );
}

export default Countdown;
