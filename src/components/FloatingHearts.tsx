import React, { useMemo } from "react";

const FloatingHearts: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 7,
      size: 12 + Math.random() * 18,
      opacity: 0.15 + Math.random() * 0.25,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: `${heart.left}%`,
            bottom: "-20px",
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            animationIterationCount: "infinite",
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
          }}
        >
          <span className="text-primary select-none">♥</span>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
