import React from "react";
import ParticleRing from "./ParticleRing";


const ParticleRingAbout = ({ title }) => {
  const content = (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium pointer-events-none">
      <div className="bg-gray-900 bg-opacity-50 p-4">
        <h1 className="text-4xl">
          {title}
        </h1>
        <div className="container mx-auto px-4 py-12 h-[500 px] " style={{ overflowY: "scroll" }} >
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
  );

  return (
    <ParticleRing content={content}/>
  );
};

export default ParticleRingAbout;