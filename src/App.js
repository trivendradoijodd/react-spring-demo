import { useState } from "react";
import { useTransition, animated } from "react-spring";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-end",
              cursor: "pointer"
            }}
          >
            {index + 1}&nbsp;
            <AnimatedDiv />
          </span>
        ))}
    </div>
  );
}

const AnimatedDiv = () => {
  const [fadeIn, setFadeIn] = useState(true);

  const transition = useTransition(fadeIn, {
    from: { opacity: 0, x: -100, y: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
    leave: { opacity: 0 }
  });

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div style={style} onClick={() => setFadeIn(!fadeIn)}>
            This can get animated{" "}
          </animated.div>
        ) : null
      )}
    </>
  );
};
