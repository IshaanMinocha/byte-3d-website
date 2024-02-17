import React, { useState, useEffect, useRef } from 'react';
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const EasterEggPopup = () => {
    const [keyPressCount, setKeyPressCount] = useState(0);

    const triggerKey = 'i';
    const countThreshold = 3;
    const timeLimit = 1000;

    const TARGET_TEXT = "Made by Ishaan Minocha";
    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 50;

    const CHARS = "!@#$%^&*():{};|,.<>/?";


    const intervalRef = useRef(null);

    const [text, setText] = useState(TARGET_TEXT);

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = TARGET_TEXT.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    const randomChar = CHARS[randomCharIndex];

                    return randomChar;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);

        setText(TARGET_TEXT);
    };

    useEffect(() => {
        let timer;

        const handleKeyDown = (event) => {
            if (event.key === triggerKey) {
                setKeyPressCount((prevCount) => prevCount + 1);

                clearTimeout(timer);
                timer = setTimeout(() => {
                    setKeyPressCount(0);
                }, timeLimit);

                if (keyPressCount === countThreshold - 1) {
                    document.getElementById('easterEggPopup').style.display = 'block';
                    setKeyPressCount(0);
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [keyPressCount]);

    const handleClose = () => {
        document.getElementById('easterEggPopup').style.display = 'none';
    };

    return (
        <div id="easterEggPopup" className="hidden fixed top-0 left-0 w-full h-full bg-dark bg-opacity-50 z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light p-8 rounded shadow-md text-center">
                <h2 className='text-5xl font-bold text-dark m-5'>toh mai mil hi gaya</h2>
                <a href="https://github.com/IshaanMinocha" target='_blank'>
                    <motion.button
                        whileHover={{
                            scale: 1.025,
                        }}
                        whileTap={{
                            scale: 0.975,
                        }}
                        onMouseEnter={scramble}
                        onMouseLeave={stopScramble}
                        className="group relative overflow-hidden rounded-lg border-[1px] border-slate-500 bg-slate-700 px-4 py-2 font-mono font-medium uppercase text-slate-300 transition-colors hover:text-indigo-300 w-fit m-5"
                    >
                        <div className="relative z-10 flex items-center gap-2">
                            <FiLock />
                            <span>{text}</span>
                        </div>
                        <motion.span
                            initial={{
                                y: "100%",
                            }}
                            animate={{
                                y: "-100%",
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 1,
                                ease: "linear",
                            }}
                            className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
                        />
                    </motion.button>
                </a>
                <div className="absolute top-2 right-2 cursor-pointer" onClick={handleClose}>
                    ❌
                </div>
            </div>
        </div>
    );
};

const Easter = () => {
    return (
        <EasterEggPopup />
    );
};

export default Easter;

