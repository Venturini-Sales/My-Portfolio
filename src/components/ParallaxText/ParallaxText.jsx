import {
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import React, { useRef } from "react";
import { LettersParallaxArea, Parallax, Scroller } from "./Styles";

export default function ParallaxText() {
  const ParallaxData = [
    "Noção de Design — Bom Trabalho em Equipe — Adaptabilidade — Criatividade —",
    "Aprendizagem rápida — Proatividade — Autoconfiança — Boa comunicação —",
  ];

  function wrapValue(min, max, value) {
    const rangeSize = max - min;
    return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
  }

  function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const velocityFactor = useTransform(
      useSpring(useVelocity(useMotionValue(0)), {
        damping: 50,
        stiffness: 400,
      }),
      [0, 1000],
      [0, 5],
      {
        clamp: false,
      },
    );

    const x = useTransform(baseX, (v) => `${wrapValue(-25, 25, v)}%`);

    const directionFactor = useRef(0.2);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 180;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <Parallax>
        <Scroller viewport={{ once: true, amount: 0.1 }} style={{ x }}>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
        </Scroller>
      </Parallax>
    );
  }

  return (
    <LettersParallaxArea>
      {[...Array(200)].map((_, i) => (
        <ParallaxText key={i} baseVelocity={i % 2 === 0 ? -2 : 2}>
          {ParallaxData[i % ParallaxData.length]}
        </ParallaxText>
      ))}
    </LettersParallaxArea>
  );
}
