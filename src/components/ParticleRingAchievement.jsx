import React from "react";
import achbff from "../Assets/ach_bff.png";
import achsih from "../Assets/ach3.jpg";
import achiiit from "../Assets/ach5.jpg";
import achiit from "../Assets/ach6.jpeg";
import acht from "../Assets/ach7.png";
import achhwm from "../Assets/ach8.png";
import ParticleRing from "./ParticleRing";


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
  const content = (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium pointer-events-none z-2" style={{}}>
      <div className="bg-gray-900 bg-opacity-50 p-4">
        <h1 className="text-4xl">
          {title}
        </h1>
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-2 flex-wrap z-20" >
            {achievements.map((achievement) => (
              <div key={achievement.id} className="border-[1px] w-[200px] border-green-400 p-2 rounded-lg shadow-md overflow-hidden">
                <img src={achievement.image} alt={achievement.heading} className="w-full bg-cover h-32 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl  mb-2">{achievement.heading}</h2>
                  {/* <a href={achievement.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a> */}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
  );

  return (
    <ParticleRing content={content} />
  );
};

export default ParticleRingAchievements;
