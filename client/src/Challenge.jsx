import React from "react";
import "./hackathon.css";
import { useEffect } from "react";
import { useState } from "react";

export default function Challenge() {
  const [randomNumber, setRandomNumber] = useState(null);
  // Use UseEffect Hook for handle 
  useEffect(() => {
    // Function to fetch random number from the API
    const getRandomNumber = async () => {
      const response = await fetch('https://challenge-3-sage.vercel.app/api/random');
      const data = await response.json();
      setRandomNumber(data.number);
    };

    // Update the UI every second
    const intervalId = setInterval(() => {
      setRandomNumber((prevNumber) => prevNumber - 1);

      // Check if the random number is negative
      if (randomNumber <= 0) {
        // Stop the interval
        clearInterval(intervalId);

        // Fetch a new random number
        getRandomNumber();
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);

  }, [randomNumber]);

  return (
    <>
      <div className="w-full min-h-screen bg-[#001974] flex items-center justify-center px-[1rem]">
        <div className="max-w-[18rem] h-[20rem] bg-white container hello flex flex-col items-center justify-center">
          <div className="typo">{randomNumber}</div>
        </div>
      </div>
    </>
  );
}
