import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Card = () => {
    return (
        <div className="py-20">
            <TiltCard />
        </div>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
    const ref = useRef(null);
    const controls = useAnimation();

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [hoveredAcronym, setHoveredAcronym] = useState("");

    const handleHover = (acronym) => {
        setHoveredAcronym(acronym);
        controls.start({ scale: 1.2 });
    };

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
        <>
                
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
                className="relative w-screen h-40 rounded-xl font-mono text-light"
            >

                <p
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="text-center text-9xl font-bold"
                >
                    <motion.span
                        onMouseEnter={() => handleHover("Brains")}
                        onMouseLeave={() => handleHover("BYTE")}
                        className="hover:text-green-400 rounded-md px-2 py-1 hover:animate-pulse"
                        animate={controls}
                    >
                        {hoveredAcronym === "Brains" ? "Brains" : "B"}
                    </motion.span>
                    .
                    <motion.span
                        onMouseEnter={() => handleHover("Yielding")}
                        onMouseLeave={() => handleHover("BYTE")}
                        className="hover:text-green-400 rounded-md px-2 py-1 hover:animate-pulse"
                        animate={controls}
                    >
                        {hoveredAcronym === "Yielding" ? "Yielding" : "Y"}
                    </motion.span>
                    .
                    <motion.span
                        onMouseEnter={() => handleHover("Technical")}
                        onMouseLeave={() => handleHover("BYTE")}
                        className="hover:text-green-400 rounded-md px-2 py-1 hover:animate-pulse"
                        animate={controls}
                    >
                        {hoveredAcronym === "Technical" ? "Technical" : "T"}
                    </motion.span>
                    .
                    <motion.span
                        onMouseEnter={() => handleHover("Endeavours")}
                        onMouseLeave={() => handleHover("BYTE")}
                        className="hover:text-green-400 rounded-md px-2 py-1 hover:animate-pulse"
                        animate={controls}
                    >
                        {hoveredAcronym === "Endeavours" ? "Endeavours" : "E"}
                    </motion.span>.
                </p>
            </motion.div>
        </>
    );
};

export default Card;