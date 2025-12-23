import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // CLEANUP
    return () => {
      clearInterval(intervalId);
      console.log("Timer stopped");
    };
  }, []);

  return <h2>Seconds: {seconds}</h2>;
}

export default Timer;
