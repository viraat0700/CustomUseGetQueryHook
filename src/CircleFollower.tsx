import { useState, useEffect } from "react";
const CircleFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        style={{
          height: 50,
          width: 50,
          left: position.x - 25,
          top: position.y - 25,
          backgroundColor: "blue",
          borderRadius: "50%",
          pointerEvents: "none",
          position: "absolute",
          transition: "top 0.10s, left: 0.10s",
        }}
      ></div>
    </>
  );
};

export default CircleFollower;
