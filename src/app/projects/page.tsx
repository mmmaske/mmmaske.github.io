// app/projects/page.tsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Define the type for a single project object
type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  techStack: string[];
  demoLink?: string; // Made the demoLink property optional
};

// A simple data file to hold project information
// app/projects/data.js
const projectData: Project[] = [
  {
    id: 1,
    title: 'QuickPOS System',
    description: 'A custom point-of-sale system for a laundromat, including hardware integration.',
    longDescription: 'This was a rewarding project where I developed a comprehensive point-of-sale system to help my family\'s laundromat manage daily operations. A key feature was the hardware interface that communicates directly with the laundry machines, allowing staff to remotely start cycles and track usage. The system also handles transactions, customer data, and reporting, significantly improving efficiency.',
    imageSrc: '/quickpos.png',
    techStack: ['PHP', 'CodeIgniter', 'jQuery', 'MySQL', 'Bash Scripting', 'Hardware I/O'],
  },
  {
    id: 2,
    title: 'mmmaske.com',
    description: 'A modern, responsive portfolio website to showcase my skills and projects.',
    longDescription: 'This very website is a project itself! I built it from the ground up using modern web development practices. It is a single-page application (SPA) that features a responsive design, dynamic content, and smooth transitions. The goal was to create a clean, minimalist design that focuses on the content and provides a seamless user experience across all devices.',
    imageSrc: '/mmmaske.svg',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'GitHub Pages'],
    demoLink: 'https://mmmaske.com',
  },
  {
    id: 3,
    title: 'Wedding RSVP and Information Site',
    description: 'Easily distributable e-vite.',
    longDescription: 'My wife and I were married April of 2024. I designed and built a single-page-app as an invitation and RSVP form, utilizing Google Sheets API as a backend and Semaphore REST API for realtime SMS notifications for replies.',
    imageSrc: '/nups.png',
    techStack: ['HTML', 'CSS', 'jQuery', 'REST API'],
    demoLink: 'https://mmmaske.com/nups',
  },
];


// Define the types for the props of the ProjectDetailsPage component
type ProjectDetailsPageProps = {
  project: Project;
  onBack: () => void;
};

// A component to display a single project's details
// app/projects/ProjectDetailsPage.tsx
const ProjectDetailsPage = ({ project, onBack }: ProjectDetailsPageProps) => (
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-400">
    <button
      onClick={onBack}
      className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      Go Back to Projects
    </button>
    <div className="bg-red-950/50 rounded-xl shadow-lg border border-gray-700 p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={project.imageSrc}
            width={600}
            height={400}
            alt={project.title}
            className="w-full h-auto rounded-lg"
            unoptimized
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-white">{project.title}</h2>
          <p className="text-lg mb-4">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((tech: string, index: number) => (
              <span key={index} className="bg-gray-800 text-gray-200 text-sm px-4 py-2 rounded-full ring-1 ring-gray-700">
                {tech}
              </span>
            ))}
          </div>
          {/* Conditional rendering of the demo link button */}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200"
            >
              View Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

// New component for the specialized mmmaske.com project page
const MmmaskeProjectDetails = ({ project, onBack }: ProjectDetailsPageProps) => (
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-400">
    <button
      onClick={onBack}
      className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      Go Back to Projects
    </button>
    <div className="bg-red-950/50 rounded-xl shadow-lg border border-gray-700 p-8">
      <div className="text-center">
        <Image
          src={project.imageSrc}
          width={400}
          height={400}
          alt={project.title}
          className=""
          unoptimized
        />
        <h2 className="text-4xl font-bold mb-4 text-white">{project.title}</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">{project.longDescription}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {project.techStack.map((tech: string, index: number) => (
            <span key={index} className="bg-gray-800 text-gray-200 text-sm px-4 py-2 rounded-full ring-1 ring-gray-700">
              {tech}
            </span>
          ))}
        </div>
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  </div>
);


// Define the types for the props of the ProjectCard component
type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
};

// A component for a single project card
// app/projects/ProjectCard.tsx
const ProjectCard = ({ title, description, imageSrc, onClick }: ProjectCardProps) => {
  return (
    <div
      className="relative group bg-red-950/50 rounded-xl overflow-hidden shadow-lg border border-gray-800 cursor-pointer hover:border-indigo-600 transition-all duration-300 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="w-full h-40 md:h-56 overflow-hidden">
        <Image
          src={imageSrc}
          width={600}
          height={400}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};


// The main page component for the projects section
// app/projects/page.tsx
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Conditionally render the detailed project page based on the selected project ID
  if (selectedProject) {
    // If the selected project is 'mmmaske.com' (id: 2), render the special component
    if (selectedProject.id === 2) {
      return <MmmaskeProjectDetails project={selectedProject} onBack={() => setSelectedProject(null)} />;
    }
    // Otherwise, render the generic ProjectDetailsPage
    return <ProjectDetailsPage project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  // Otherwise, render the main projects grid
  return (
    <main className="content">
      {/* The hero section for the projects page */}
      <div className="hero-section">
        <div className="hero-content flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg">A collection of my work and personal projects.</p>
        </div>
      </div>

      {/* The grid to display all project cards */}
      <div className="project-grid grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
    </main>
  );
}
