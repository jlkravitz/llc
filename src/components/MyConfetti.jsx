import Confetti from "react-confetti";
import React, { useState, useEffect } from "react";

export function MyConfetti() {
  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    // Set a timeout to stop confetti after 2 seconds
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 2000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return <Confetti numberOfPieces={!confettiActive ? 0 : undefined} />;
}
