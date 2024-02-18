import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utlis";

const ParticleRingAbout = ({ title }) => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium pointer-events-none">
        <div className="bg-gray-900 bg-opacity-50 p-4">

          <h1 className="text-4xl">

            {title}
          </h1>
          <div className="container mx-auto px-4 py-12 h-[500 px] " style={{overflowY: "scroll"}} >
            <h1 className="text-3xl font-semibold text-green-500 mb-6">Our Vision</h1>
            <p className="text-lg leading-relaxed mb-8">
              To be a pioneering force in fostering innovation, research, and technological advancement, shaping a brighter future for society.
            </p>
            <h1 className="text-3xl font-semibold text-green-500 mb-6">Our Mission</h1>
            <p className="text-lg  leading-relaxed">
              Our mission is to cultivate a dynamic environment that nurtures creativity, collaboration, and critical thinking, empowering individuals to pioneer groundbreaking solutions and make a meaningful impact in the world of technology.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRingAbout;