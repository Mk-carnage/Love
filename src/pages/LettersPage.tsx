import React, { useState, useRef, useEffect } from "react";
import Butterfly from "@/components/Butterfly";
import FloatingHearts from "@/components/FloatingHearts";
import Envelope from "@/components/Envelope";
import WhyILoveYou from "@/components/letters/WhyILoveYou";
import OurMoments from "@/components/letters/OurMoments";
import HeartMessage from "@/components/letters/HeartMessage";

import { Dialog, DialogContent } from "@/components/ui/dialog";

const letters = [
  { id: 0, label: "Why I Love You", color: "hsl(350, 80%, 90%)", emoji: "💕", position: "top-left" },
  { id: 1, label: "Our Moments", color: "hsl(20, 70%, 92%)", emoji: "📸", position: "top-right" },
  { id: 2, label: "From My Heart", color: "hsl(330, 60%, 88%)", emoji: "💬", position: "bottom-left" },
  { id: 3, label: "A Surprise", color: "hsl(340, 50%, 92%)", emoji: "🎁", position: "bottom-right" },
];

const letterContent = [
  <WhyILoveYou key="0" />,
  <OurMoments key="1" />,
  <HeartMessage key="2" />,
  
];

const LettersPage: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [butterflyPos, setButterflyPos] = useState({ top: "50%", left: "50%" });
  const [isFlying, setIsFlying] = useState(false);
  const envelopeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (index: number) => {
    if (isFlying) return;
    
    // Calculate envelope position relative to container
    const envelope = envelopeRefs.current[index];
    const container = containerRef.current;
    if (envelope && container) {
      const eRect = envelope.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();
      const top = eRect.top - cRect.top + eRect.height / 2 - 20;
      const left = eRect.left - cRect.left + eRect.width / 2 - 25;
      setButterflyPos({ top: `${top}px`, left: `${left}px` });
    }

    setIsFlying(true);
    setTimeout(() => {
      setSelected(index);
      setIsFlying(false);
    }, 1000);
  };

  const handleClose = () => {
    setSelected(null);
    // Return butterfly to center
    setButterflyPos({ top: "50%", left: "50%" });
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent to-blush"
    >
      <FloatingHearts />

      {/* Title */}
      <h1
        className="absolute top-6 left-1/2 -translate-x-1/2 z-10 font-script text-2xl md:text-3xl text-foreground/70 animate-fade-in-up"
      >
        Choose a letter, my love 💌
      </h1>

      {/* Butterfly in center */}
      <Butterfly
        size={55}
        style={{
          top: butterflyPos.top,
          left: butterflyPos.left,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 4 Envelopes in corners */}
      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between pointer-events-none z-10">
        {/* Top row */}
        <div className="flex justify-between items-start">
          <div ref={(el) => (envelopeRefs.current[0] = el)} className="pointer-events-auto">
            <Envelope
              label={letters[0].label}
              color={letters[0].color}
              emoji={letters[0].emoji}
              isOpen={selected === 0}
              onClick={() => handleSelect(0)}
            />
          </div>
          <div ref={(el) => (envelopeRefs.current[1] = el)} className="pointer-events-auto">
            <Envelope
              label={letters[1].label}
              color={letters[1].color}
              emoji={letters[1].emoji}
              isOpen={selected === 1}
              onClick={() => handleSelect(1)}
            />
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-end">
          <div ref={(el) => (envelopeRefs.current[2] = el)} className="pointer-events-auto">
            <Envelope
              label={letters[2].label}
              color={letters[2].color}
              emoji={letters[2].emoji}
              isOpen={selected === 2}
              onClick={() => handleSelect(2)}
            />
          </div>
          
        </div>
      </div>

      {/* Content dialog */}
      <Dialog open={selected !== null} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto bg-gradient-to-b from-card to-warm-white border-primary/20">
          {selected !== null && letterContent[selected]}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LettersPage;
