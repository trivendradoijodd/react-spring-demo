import { useState } from "react";
import { useTransition, animated } from "react-spring";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          // <span
          //   className="list-item"
          //   key={index}
          //   style={{
          //     display: "flex",
          //     alignItems: "flex-end",
          //     cursor: "pointer"
          //   }}
          // >
          <AnimatedDiv index={index} />
          // </span>
        ))}
    </div>
  );
};

const AnimatedDiv = ({ index }) => {
  const [fadeIn, setFadeIn] = useState(true);

  const transition = useTransition(fadeIn, {
    from: { opacity: 0, x: -100, y: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
    leave: { opacity: 0, x: -100, y: -100 }
  });

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div
            className="list-item"
            style={style}
            onClick={() => setFadeIn(!fadeIn)}
          >
            {index + 1}&nbsp; This can get animated{" "}
          </animated.div>
        ) : null
      )}
    </>
  );
};

export default App;
