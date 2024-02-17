import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Canvas } from 'react-three-fiber';

function Error404() {

  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      window.location.replace('/home');
    }, 10000);

    return () => {
      clearInterval(timerInterval);
      clearTimeout(redirectTimeout);
    };
  }, []);

  const modelRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      '404.glb',
      (gltf) => {
        if (modelRef.current) {
          modelRef.current.scene.add(gltf.scene);
        }
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );
  }, []);


  return (
    <>
      <div className="relative overflow-hidden">
        <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
          <p className="text-center text-9xl font-black text-light">
            404
          </p>
          {/* <img className='w-80 mx-auto' src="404.gif" alt="" /> */}
          {/* <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight intensity={0.5} position={[0, 10, 5]} />
            <primitive object={modelRef.current} />
          </Canvas> */}
          <p className="text-center text-3xl text-neutral-400">
            The Matrix glitched. We are sending you back to the BYTE realm!
          </p>
          <div className="text-2xl mb-6 text-center text-neutral-400">
            Redirecting to <Link className="font-semibold text-light text-3xl rounded-full hover:bg-light/10 p-2" to="/home">Home</Link> in {timer} seconds.
          </div>
        </div>
        <motion.div
          initial={{ transform: "translateX(-10%) translateY(-10%)" }}
          animate={{
            transform: "translateX(10%) translateY(10%)",
          }}
          transition={{
            repeat: Infinity,
            duration: 0.2,
            ease: "linear",
            repeatType: "mirror",
          }}
          style={{
            backgroundImage: 'url("black-noise.png")',
          }}
          className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
        />
      </div>
    </>
  )
}

export default Error404
