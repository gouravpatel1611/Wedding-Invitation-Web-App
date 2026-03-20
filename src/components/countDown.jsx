import "./style.css";
import { useEffect, useState } from "react";

function Countdown() {
  const targetDate = new Date("2026-04-25T15:00:00"); // apni date yaha daalo

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return {};

    return {
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
      <div style={{ fontWeight:"bold", marginTop:"1vh"}}>शुभ अवसर तक शेष समय :-</div>

      <div className="time-box" >
        <div>{timeLeft.days || 0} दिन</div>
        <div>{timeLeft.hours || 0} घंटे</div>
        <div>{timeLeft.minutes || 0} मिनट</div>
        <div>{timeLeft.seconds || 0} सेकंड</div>
      </div>
    </div>
  );
}

export default Countdown;