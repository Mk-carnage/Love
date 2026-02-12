import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

{/* EDIT HERE: Replace these placeholder reasons with your own! */}
const reasons = [
  "The way you laugh at my terrible jokes 😄",
  "How your eyes light up when you're excited ✨",
  "Your warm hugs that make everything better 🤗",
  "The way you always know what to say 💬",
  "Your kindness to everyone you meet 🌸",
  "How you make ordinary moments feel magical 🪄",
  "Your beautiful smile that brightens my day ☀️",
  "The way you hold my hand 🤝",
  "Your patience and understanding 💗",
  "Simply because you are you 💕",
];

const WhyILoveYou: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="font-script text-3xl md:text-4xl text-primary">
        Why I Love You
      </h2>
      <p className="text-sm text-muted-foreground font-serif-display italic">
        Just a few of the million reasons...
      </p>
      <ScrollArea className="h-[300px] w-full max-w-md">
        <ol className="space-y-3 px-2">
          {reasons.map((reason, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg bg-accent/40 p-3 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}
            >
              <span className="text-primary font-bold font-script text-lg">{i + 1}.</span>
              <span className="font-serif-display text-sm text-foreground/85">{reason}</span>
            </li>
          ))}
        </ol>
      </ScrollArea>
    </div>
  );
};

export default WhyILoveYou;
