// app/components/ProjectCard.tsx

import React from 'react';
import Image from 'next/image';

// Define the shape of the data that the component will accept
interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkHref: string;
  linkText?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  linkHref,
  linkText = 'View Project',
}) => {
  return (
    <div className="project-card">
      {/* The image is rendered from the passed-in props */}
      <Image
        src={imageSrc}
        alt={`Image for ${title}`}
        style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '1rem' }}
      />
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={linkHref}>
        {linkText} <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
};

export default ProjectCard;
