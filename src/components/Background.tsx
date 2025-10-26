"use client";
import { useEffect, useState } from "react";
export default function Background() {
  const [positions, setPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  useEffect(() => {
    const moveLights = () => {
      setPositions(() =>
        Array(3)
          .fill(0)
          .map(() => ({
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }))
      );
    };

    moveLights();
    const interval = setInterval(moveLights, 10000);
    return () => clearInterval(interval);
  }, []);

  const colors = ["#60a5fa", "#a78bfa", "#ec4899"];

  const sizes = [600, 700, 500];
  const blurs = [220, 250, 200];
  const opacities = [0.15, 0.12, 0.1];

  return (
    <div className="h-screen w-full fixed inset-0 -z-10 flex items-center justify-center overflow-hidden">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full mix-blend-screen filter transition-all duration-[6000ms] ease-in-out"
          style={{
            width: `${sizes[i]}px`,
            height: `${sizes[i]}px`,
            backgroundColor: colors[i],
            filter: `blur(${blurs[i]}px)`,
            opacity: opacities[i],
            transform: `translate(${pos.x}vw, ${pos.y}vh)`,
          }}
        ></div>
      ))}
    </div>
  );
}
