import React from "react";

interface ButterflyProps {
  style?: React.CSSProperties;
  className?: string;
  size?: number;
}

const Butterfly: React.FC<ButterflyProps> = ({ style, className = "", size = 60 }) => {
  const wingColor1 = "hsl(340, 60%, 55%)";
  const wingColor2 = "hsl(330, 50%, 70%)";
  const wingColor3 = "hsl(15, 70%, 85%)";
  const bodyColor = "hsl(340, 40%, 30%)";

  return (
    <div
      className={`absolute transition-all duration-1000 ease-in-out z-30 pointer-events-none ${className}`}
      style={style}
    >
      <div className="relative flex items-center justify-center" style={{ width: size, height: size * 0.7 }}>
        {/* Left wing */}
        <svg
          className="animate-flutter-left absolute"
          style={{ right: "50%" }}
          width={size * 0.5}
          height={size * 0.7}
          viewBox="0 0 30 42"
          fill="none"
        >
          <ellipse cx="8" cy="14" rx="8" ry="14" fill={wingColor1} opacity="0.85" />
          <ellipse cx="10" cy="12" rx="5" ry="9" fill={wingColor2} opacity="0.6" />
          <ellipse cx="7" cy="30" rx="6" ry="10" fill={wingColor3} opacity="0.75" />
          <ellipse cx="9" cy="28" rx="3.5" ry="6" fill={wingColor2} opacity="0.5" />
        </svg>

        {/* Right wing */}
        <svg
          className="animate-flutter-right absolute"
          style={{ left: "50%" }}
          width={size * 0.5}
          height={size * 0.7}
          viewBox="0 0 30 42"
          fill="none"
        >
          <ellipse cx="22" cy="14" rx="8" ry="14" fill={wingColor1} opacity="0.85" />
          <ellipse cx="20" cy="12" rx="5" ry="9" fill={wingColor2} opacity="0.6" />
          <ellipse cx="23" cy="30" rx="6" ry="10" fill={wingColor3} opacity="0.75" />
          <ellipse cx="21" cy="28" rx="3.5" ry="6" fill={wingColor2} opacity="0.5" />
        </svg>

        {/* Body */}
        <svg
          className="absolute z-10"
          width={size * 0.08}
          height={size * 0.55}
          viewBox="0 0 4 30"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <ellipse cx="2" cy="15" rx="2" ry="15" fill={bodyColor} />
          {/* Antennae */}
          <line x1="2" y1="2" x2="0" y2="-5" stroke={bodyColor} strokeWidth="0.5" strokeLinecap="round" />
          <line x1="2" y1="2" x2="4" y2="-5" stroke={bodyColor} strokeWidth="0.5" strokeLinecap="round" />
          <circle cx="0" cy="-5" r="0.8" fill={bodyColor} />
          <circle cx="4" cy="-5" r="0.8" fill={bodyColor} />
        </svg>
      </div>
    </div>
  );
};

export default Butterfly;
