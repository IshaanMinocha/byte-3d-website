import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utlis";
import achbff from "../Assets/ach_bff.png"
import achsih from "../Assets/ach3.jpg"
import achiiit from "../Assets/ach5.jpg"
import achiit from "../Assets/ach6.jpeg"
import acht from "../Assets/ach7.png"
import achhwm from "../Assets/ach8.png"


const ParticleRingAchievements = ({ title }) => {
  const achievements = [
    {
      id: 1,
      image: achsih,
      heading: 'SIH 2023 Winners',
      projectLink: 'https://example.com/project2'
    },
    {
      id: 2,
      image: achbff,
      heading: `BFF '23 and Bitbox '23 Winners`,
      projectLink: 'https://example.com/project1'
    },
    {
      id: 3,
      image: achiiit,
      heading: `Empowher '23 Runner Ups`,
      projectLink: 'https://example.com/project2'
    },
    {
      id: 4,
      image: achiit,
      heading: `HackXtreme '23 Winners`,
      projectLink: 'https://example.com/project2'
    },
    {
      id: 5,
      image: acht,
      heading: `TechnoHacks Runner Ups`,
      projectLink: 'https://example.com/project2'
    },
    {
      id: 6,
      image: achhwm,
      heading: `HackWithMAIT 4.0 Winners`,
      projectLink: 'https://example.com/project2'
    },
    // {
    //   id: 4,
    //   image: achiiit,
    //   heading: `Empowher '23 Winners`,
    //   projectLink: 'https://example.com/project2'
    // },
    // Add more achievements as needed
  ];
  return (
      
      <div className=" text-slate-200 font-medium pointer-events-none flex justify-center items-center ">
        <div className="bg-gray-950 bg-opacity-70 md:p-4 xl:w-[1000px] lg:w-[890px] md:w-[680px] p-3 w-full border-[2px] border-black">
          <h1 className="text-3xl sm:text-4xl w-fit p-4 bg-blue-950 mx-auto rounded-lg">
            {title}
          </h1>
          <div className="container mx-auto px-4 py-8">
            <div className="flex gap-2 flex-wrap justify-center" >
              {achievements.map((achievement) => (
                <div key={achievement.id} className="border-[1px] bg-slate-700 md:w-[210px] w-[250px] border-black rounded-lg shadow-md overflow-hidden">
                  <img src={achievement.image} alt={achievement.heading} className="w-full bg-cover h-36 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl  mb-2">{achievement.heading}</h2>
                    {/* <a href={achievement.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a> */}
                  </div>
                </div>
              ))}
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

export default ParticleRingAchievements;