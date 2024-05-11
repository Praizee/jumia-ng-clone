"use client";

import React, { useState, useEffect } from "react";

const Countdown = () => {
  const initialDuration = 8 * 60 * 60; // 8 hours in seconds
  const [remainingTime, setRemainingTime] = useState(initialDuration);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        // Decrease remaining time by 1 second
        let newTime = prevTime - 1;

        // If remaining time reaches 0, reset to 8 hours
        if (newTime <= 0) {
          newTime = initialDuration;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialDuration]);

  // Format remaining time into "hh:mm:ss" format
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}h : ${formattedMinutes}m : ${formattedSeconds}s`;
  };

  return (
    <>
      <span className="text-lg font-bold">{formatTime(remainingTime)}</span>
    </>
  );
};

export default Countdown;
