import React from 'react';
import {useEffect, useState} from 'react';

export function Timer() {
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMilliseconds(prevMilliseconds => prevMilliseconds + 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function formatTime(currentMilliseconds: number) {
    const totalSeconds = currentMilliseconds / 1000;
    const clockSeconds = totalSeconds >= 60 ? totalSeconds % 60 : totalSeconds;
    const minutes = parseInt(String(totalSeconds / 60));

    const displaySeconds =
      clockSeconds >= 10 ? `${clockSeconds}` : `0${clockSeconds}`;

    return `${minutes}:${displaySeconds}`;
  }

  return <span className="ml-4 text-xl">{formatTime(milliseconds)}</span>;
}
