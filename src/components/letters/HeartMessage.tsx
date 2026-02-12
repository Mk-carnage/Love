import React from "react";

const HeartMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 max-w-md mx-auto">
      <h2 className="font-script text-3xl md:text-4xl text-primary">
        A Message From My Heart
      </h2>

      <div className="bg-warm-white rounded-xl p-6 shadow-inner border border-border/50 w-full">
        <div className="font-serif-display text-foreground/85 text-sm leading-relaxed space-y-4 italic">
          {/* EDIT HERE: Replace this placeholder message with your own heartfelt words! */}
          <p>My dearest love,</p>
          <p>
            Every day with you feels like a beautiful dream I never want to wake up from. 
            You've painted my world in colors I didn't know existed, and filled my heart 
            with a warmth that words can barely capture.
          </p>
          <p>
            I love the way you make me feel — safe, cherished, and endlessly grateful. 
            From the big adventures to the quiet moments in between, every second spent 
            with you is my favorite.
          </p>
          <p>
            Thank you for being my person, my best friend, and my greatest love. 
            I can't wait for all the tomorrows we'll share together.
          </p>
          <p className="text-right mt-6">
            Forever yours, <br />
            <span className="font-script text-primary text-xl">
              {/* EDIT HERE: Put your name! */}
              Your Love 💕
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeartMessage;
