// Define the type for a single project object
type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  techStack: string[];
};
export const projects: Project[] = [
  {
    id: 1,
    title: 'Laundromat POS System',
    description: 'A custom point-of-sale system for a laundromat, including hardware integration.',
    longDescription: 'This was a rewarding project where I developed a comprehensive point-of-sale system to help my family\'s laundromat manage daily operations. A key feature was the hardware interface that communicates directly with the laundry machines, allowing staff to remotely start cycles and track usage. The system also handles transactions, customer data, and reporting, significantly improving efficiency.',
    imageSrc: 'https://placehold.co/600x400/1C1C1C/FF3030?text=Laundromat+POS',
    techStack: ['Node.js', 'React', 'MongoDB', 'Hardware I/O'],
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website to showcase my skills and projects.',
    longDescription: 'This very website is a project itself! I built it from the ground up using modern web development practices. It is a single-page application (SPA) that features a responsive design, dynamic content, and smooth transitions. The goal was to create a clean, minimalist design that focuses on the content and provides a seamless user experience across all devices.',
    imageSrc: 'https://placehold.co/600x400/1C1C1C/1B998B?text=Portfolio+Site',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
  },
  {
    id: 3,
    title: 'E-commerce API',
    description: 'A robust and scalable RESTful API for an e-commerce platform.',
    longDescription: 'I designed and built a headless API for a fictional e-commerce store. It handles product management, user authentication, orders, and payment processing. I focused on creating a secure, high-performance, and well-documented API that can be easily consumed by any frontend application, whether it be a web store or a mobile app.',
    imageSrc: 'https://placehold.co/600x400/1C1C1C/4F90F7?text=E-commerce+API',
    techStack: ['Python', 'Django', 'PostgreSQL', 'Docker'],
  },
];