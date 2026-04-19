import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        background: `
          radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(94, 23, 235, 0.12),
            transparent 80%
          )
        `,
      }}
    />
  );
};

export default CustomCursor;