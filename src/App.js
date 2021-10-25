import { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";
import "./styles.css";

const App = () => {
  const [timeSpent, setTimeSpent] = useState(0);

  const [isTimerPaused, setIsPaused] = useState(false);

  const timeRef = useRef();

  const startTimer = () => {
    const _interval = setInterval(() => {
      setTimeSpent((_timeSpent) => setTimeSpent(_timeSpent + 1));
    }, 1000);

    timeRef.current = _interval;
  };

  const clearTimer = () => {
    clearInterval(timeRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []);

  const continueOrPause = () => {
    isTimerPaused ? startTimer() : clearTimer();
    setIsPaused(!isTimerPaused);
  };

  return (
    <div className="main-body">
      <div>
        Time spent on this page: {timeSpent}s{" "}
        <button onClick={continueOrPause}>
          {isTimerPaused ? "Continue" : "Freeze"}
        </button>
      </div>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <AnimatedDiv isTimerPaused={isTimerPaused} index={index} />
        ))}
    </div>
  );
};

const AnimatedDiv = ({ index, isTimerPaused }) => {
  const [fadeIn, setFadeIn] = useState(true);

  const transition = useTransition(fadeIn, {
    from: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
    leave: { x: 100, opacity: 0 }
  });

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div
            className="list-item"
            style={style}
            onClick={() => {
              if (isTimerPaused) return;
              setFadeIn(!fadeIn);
            }}
          >
            {index + 1}&nbsp; This can get animated{" "}
            {isTimerPaused && " after timer is started"}
          </animated.div>
        ) : null
      )}
    </>
  );
};

export default App;
