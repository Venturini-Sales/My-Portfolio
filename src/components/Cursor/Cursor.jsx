/* eslint-disable no-unused-vars */
import { frame, motion, useSpring } from "motion/react";
import { useContext, useEffect, useRef, useState } from "react";
import { CursorContext } from "../../Contexts/ContextCursor";

export default function Cursor() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const { cursorHover } = useContext(CursorContext);

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }) => {
      setDotPos({ x: clientX, y: clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        style={{ ...circle, x, y }}
        animate={{
          width: cursorHover ? 80 : 50,
          height: cursorHover ? 80 : 50,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onAnimationComplete={() => {
          if (ref.current) {
            const element = ref.current;
            x.set(dotPos.x - element.offsetLeft - element.offsetWidth / 2);
            y.set(dotPos.y - element.offsetTop - element.offsetHeight / 2);
          }
        }}
      />

      <div
        style={{
          ...dot,
          position: "absolute",
          left: dotPos.x - 3,
          top: dotPos.y - 3,
          zIndex: 10000,
        }}
      ></div>
    </>
  );
}

const spring = { damping: 40, stiffness: 800 };

function useFollowPointer(ref) {
  const x = useSpring(-100, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      frame.read(() => {
        x.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        y.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, x, y]);

  return { x, y };
}

const circle = {
  border: "2px solid white",
  borderRadius: "50%",
  position: "absolute",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  boxShadow: "0 0 6px rgba(0,0,0,0.3)",
  pointerEvents: "none",
  mixBlendMode: "difference",
};

const dot = {
  width: 5,
  height: 5,
  borderRadius: "50%",
  backgroundColor: "white",
  boxShadow: "0 0 2px rgba(0,0,0,0.6)",
  pointerEvents: "none",
  mixBlendMode: "difference",
};
