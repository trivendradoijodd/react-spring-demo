import { useState } from "react";
import { useTransition, animated } from "react-spring";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

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
    from: { opacity: 0 },
    enter: { opacity: 1 },
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
