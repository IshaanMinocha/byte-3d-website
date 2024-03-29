import React, { useState, useEffect } from 'react';
import { projectsData } from '../Data/projectsData';

const ProjectCard = ({ projectName, projectPhoto, githubLink, liveLink, onCardClick }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 cursor-pointer" onClick={onCardClick}>
      <img className="w-full" src={projectPhoto} alt={projectName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projectName}</div>
        <div className="flex justify-between">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live</a>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, closeModal, projectName, projectDescription, techStack, contributors, screenshots }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex">
      <div className="relative p-8 bg-white w-4/5 max-w-screen-lg m-auto rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">{projectName}</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.364 5.636a.999.999 0 0 0-1.414 0L12 10.586 7.05 5.636A.999.999 0 1 0 5.636 7.05L10.586 12 5.636 16.95a.999.999 0 1 0 1.414 1.414L12 13.414l4.95 4.95a.999.999 0 1 0 1.414-1.414L13.414 12l4.95-4.95a.999.999 0 0 0 0-1.414z"/></svg>
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Project Description</h3>
          <p className="text-lg">{projectDescription}</p>
          <h3 className="text-lg font-semibold mt-4">Techstack</h3>
          <p className="text-lg">{techStack}</p>
          <h3 className="text-lg font-semibold mt-4">Contributors</h3>
          <ul>
            {contributors.map((contributor, index) => (
              <li key={index}>{contributor}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-4">Screenshots</h3>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className="w-full h-auto" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects({ setProgress }) {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])


  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Projects</h1>
      {projectsData.map(category => (
        <div key={category.category}>
          <h2 className="text-xl font-semibold my-2">{category.category}</h2>
          <div className="flex flex-wrap justify-center">
            {category.projects.map(project => (
              <ProjectCard
                key={project.id}
                projectName={project.name}
                projectPhoto={project.photo}
                githubLink={project.github}
                liveLink={project.live}
                onCardClick={() => openModal(project)}
              />
            ))}
          </div>
        </div>
      ))}
      <Modal
        isOpen={modalOpen}
        closeModal={closeModal}
        projectName={selectedProject ? selectedProject.name : ''}
        projectDescription={selectedProject ? selectedProject.description : ''}
        techStack={selectedProject ? selectedProject.techStack : ''}
        contributors={selectedProject ? selectedProject.contributors : []}
        screenshots={selectedProject ? selectedProject.screenshots : []}
      />
    </div>
  );
}