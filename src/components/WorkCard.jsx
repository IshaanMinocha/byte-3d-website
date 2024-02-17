import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const WorkCard = ({ image, content, info}) => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-[32rem] w-[24rem] rounded-xl bg-gradient-to-br from-yellow to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-light shadow-lg"
      >
        <img src={image}
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto mb-10"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-dark text-3xl font-bold"
        >
          {content}
        </p>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-violet text-xl font-semibold"
        >
          {info}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkCard;