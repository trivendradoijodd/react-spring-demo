import { useState } from "react";
import { useTransition, animated } from "react-spring";
import "./styles.css";

const App = () => {
  return (
    <div className="main-body">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <AnimatedDiv index={index} />
        ))}
    </div>
  );
};

const AnimatedDiv = ({ index }) => {
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
