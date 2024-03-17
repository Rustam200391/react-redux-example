import React, { useState, useEffect } from "react";
import "./style.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 0.01); // Увеличиваем на 0.01 секунду для большей точности
      }, 10); // Обновляем каждые 10 миллисекунд для точности
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const formatTime = (timeInSeconds) => {
    return timeInSeconds.toFixed(2); // Форматируем время с двумя знаками после запятой
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePauseContinue = () => {
    setIsActive((prev) => !prev);
  };

  const handleStop = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="container">
      <h1>Таймер</h1>
      <p>Время: {formatTime(seconds)} с</p>
      <button onClick={handleStart}>Старт</button>
      <button onClick={handlePauseContinue}>
        {isActive ? "Пауза" : "Продолжить"}
      </button>
      <button onClick={handleStop}>Стоп</button>
    </div>
  );
}

export default Timer;
