import React from "react";

interface EnvelopeProps {
  label: string;
  color: string;
  isOpen: boolean;
  onClick: () => void;
  emoji: string;
}

const Envelope: React.FC<EnvelopeProps> = ({ label, color, isOpen, onClick, emoji }) => {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110 focus:outline-none"
    >
      {/* Envelope SVG */}
      <div className="relative" style={{ width: 100, height: 72 }}>
        {/* Envelope body */}
        <svg width="100" height="72" viewBox="0 0 100 72" fill="none" className="drop-shadow-lg">
          <rect x="2" y="16" width="96" height="54" rx="4" fill={color} stroke="hsl(340,30%,75%)" strokeWidth="1.5" />
          {/* Flap */}
          <path
            d={isOpen ? "M2 16 L50 -10 L98 16" : "M2 16 L50 44 L98 16"}
            fill={isOpen ? "hsl(340,30%,85%)" : color}
            stroke="hsl(340,30%,75%)"
            strokeWidth="1.5"
            className={`transition-all duration-500 origin-top ${isOpen ? "opacity-60" : ""}`}
          />
          {/* Heart seal */}
          {!isOpen && (
            <text x="50" y="42" textAnchor="middle" fontSize="20" className="select-none">
              {emoji}
            </text>
          )}
        </svg>
      </div>
      <span className="font-script text-sm md:text-base text-foreground/80 group-hover:text-primary transition-colors">
        {label}
      </span>
    </button>
  );
};

export default Envelope;
