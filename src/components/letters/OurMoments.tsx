import React, { useState } from "react";

{/* EDIT HERE: Replace these placeholder image URLs with your own photos! */}
const photos = [
  { src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop", caption: "Our first adventure together 🌅" },
  { src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=300&fit=crop", caption: "That perfect sunset we watched 🌇" },
  { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop", caption: "Dancing under the stars ✨" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop", caption: "Lazy Sunday mornings ☕" },
  { src: "https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?w=400&h=300&fit=crop", caption: "Always laughing with you 😂" },
];

const OurMoments: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % photos.length);
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="font-script text-3xl md:text-4xl text-primary">
        Our Moments
      </h2>
      <p className="text-sm text-muted-foreground font-serif-display italic">
        Memories I hold close to my heart
      </p>

      <div className="relative w-full max-w-sm overflow-hidden rounded-xl shadow-lg">
        <img
          src={photos[current].src}
          alt={photos[current].caption}
          className="w-full h-56 object-cover transition-opacity duration-500"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <p className="text-white font-serif-display text-sm text-center">
            {photos[current].caption}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center font-script text-lg"
        >
          ‹
        </button>
        <span className="text-muted-foreground text-sm font-serif-display">
          {current + 1} / {photos.length}
        </span>
        <button
          onClick={next}
          className="w-9 h-9 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center font-script text-lg"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary scale-125" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurMoments;
