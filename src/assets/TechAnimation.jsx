export const TechAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Pulsating Core */}
      <div
        className="w-24 h-24 rounded-full animate-ping-slow"
        style={{ backgroundColor: "black" }}
      ></div>

      {/* Spinning Tech Rings */}
      <div
        className="absolute w-32 h-32 rounded-full border animate-spin-fast"
        style={{ borderColor: "var(--color-background)" }}
      ></div>
      <div
        className="absolute w-48 h-48 rounded-full border animate-spin-reverse"
        style={{ borderColor: "var(--color-background)" }}
      ></div>
      <div
        className="absolute w-64 h-64 rounded-full border animate-spin-slower"
        style={{ borderColor: "var(--color-background)" }}
      ></div>

      {/* Floating Dots */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-float"
          style={{
            backgroundColor: "var(--color-background)",
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        ></div>
      ))}
    </div>
  );
};
