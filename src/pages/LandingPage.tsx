import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Butterfly from "@/components/Butterfly";
import FloatingHearts from "@/components/FloatingHearts";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"enter" | "landed" | "exit">("enter");

  useEffect(() => {
    // Butterfly enters, then "lands" after 2.5s
    const timer = setTimeout(() => setPhase("landed"), 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setPhase("exit");
    setTimeout(() => navigate("/letters"), 800);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent to-blush">
      <FloatingHearts />

      {/* Main text */}
      <div
        className="relative z-10 text-center px-6 animate-fade-in-up"
        style={{ animationDelay: "0.5s", animationFillMode: "both" }}
      >
        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground mb-4 leading-tight">
          Something for you{" "}
          <span className="inline-block relative">
            &lt;3
            {/* Butterfly lands near the heart */}
            <Butterfly
              size={50}
              className={`
                ${phase === "enter" ? "animate-butterfly-enter" : ""}
                ${phase === "exit" ? "opacity-0 -translate-y-20 -translate-x-20 scale-50" : ""}
              `}
              style={{
                top: "-35px",
                right: "-30px",
                transition: phase === "exit" ? "all 0.8s ease-in" : undefined,
              }}
            />
          </span>
        </h1>
        <p
          className="font-serif-display text-muted-foreground text-lg md:text-xl italic animate-fade-in-up"
          style={{ animationDelay: "1.5s", animationFillMode: "both" }}
        >
          A little something made with all my love
        </p>
      </div>

      {/* Next button */}
      {phase !== "enter" && (
        <button
          onClick={handleNext}
          className={`
            fixed bottom-8 right-8 z-20
            px-6 py-3 rounded-full
            bg-primary text-primary-foreground
            font-script text-lg
            animate-glow-pulse
            hover:scale-105 transition-transform
            ${phase === "exit" ? "opacity-0 transition-opacity duration-300" : "animate-fade-in-up"}
          `}
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Open my heart →
        </button>
      )}
    </div>
  );
};

export default LandingPage;
