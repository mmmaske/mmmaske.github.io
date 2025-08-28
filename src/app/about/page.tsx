// app/about/page.tsx

"use client";

import React from "react";
import Image from "next/image";

export default function AboutPage() {
  const techStack = [
    "Next.js",
    "Angular",
    "Firebase",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Bash Scripting",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "REST APIs",
    "Serverless Functions",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Git",
    "CI/CD",
    "AWS"
  ];
  const neonColors = [
    "bg-sky-500/20 text-sky-400 ring-sky-400/20",
    "bg-teal-500/20 text-teal-400 ring-teal-400/20",
    "bg-purple-500/20 text-purple-400 ring-purple-400/20",
    "bg-fuchsia-500/20 text-fuchsia-400 ring-fuchsia-400/20",
    "bg-emerald-500/20 text-emerald-400 ring-emerald-400/20",
    "bg-lime-500/20 text-lime-400 ring-lime-400/20",
  ];

  return (
    <main className="content">
      {/* Hero section for the About page */}
      <div className="hero-section">
        <div className="hero-content flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg">A deep dive into my professional and personal journey.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start mb-12">
          {/* Use a placeholder image or your own profile picture */}
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-8">
            <Image
              src="https://placehold.co/400x400/1C1C1C/FF3030?text=Profile+Image"
              width={400}
              height={400}
              alt="Profile Picture"
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
          <div className="text-gray-400">
            <p className="text-lg">
              Hello! I&apos;m an IT professional with a deep-seated passion for technology and a knack for solving complex problems. My journey began with a simple curiosity about how things work, leading me from a hobbyist to a professional who finds joy in crafting efficient and innovative solutions. I believe that a good solution costs less by using fewer resources for a better outcome - this mindset guides my work and my personal projects.
            </p>
            <p className="text-lg mt-4">
              My interest in technology was initially sparked by my aptitude in computer classes, where I was taught the fundamentals of programming. This was paired with a deep enjoyment of playing games and immersing myself in virtual worlds. I have always been fascinated by the internet&apos;s power to connect people and provide access to so many different perspectives.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-700" />

        {/* Professional Projects Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Professional Projects</h3>
          <div className="text-gray-400">
            <p className="text-lg">
              One of my most rewarding projects was developing a point-of-sale system for my family&apos;s laundromat. This system helps them and their staff efficiently manage their daily operations. A key challenge was creating a hardware interface to communicate with the laundry machines themselves, allowing the server to control and start washing cycles remotely. This project not only solved a real-world problem but also deepened my understanding of combining software with physical systems.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-700" />

        {/* Tech Stack Section with Colorful Pills */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className={`text-sm px-4 py-2 rounded-full ring-1 ${neonColors[index % neonColors.length]} cursor-pointer`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <hr className="my-12 border-gray-700" />

        {/* Beyond the Code Section */}
        <section>
          <h3 className="text-3xl font-bold mb-6">Beyond the Code</h3>
          <div className="text-gray-400">
            <p className="text-lg">
              I find balance and motivation in my personal life, anchored by my wife and three dogs, which helps foster a dedicated and well-rounded perspective. I enjoy staying active by cycling around Metro Manila (<i>Mabuhay!</i>) as a mode of transportation and getting to see the city from a different perspective. We also love to travel and experience new cultures, which has broadened my perspective both personally and professionally.
            </p>
            <p className="text-lg mt-4">
              I also enjoy tinkering with server hardware and optimizing my home network setup. It&apos;s a rewarding challenge to build a reliable and fast system that my friends and family enjoy using.
            </p>
            <p className="text-lg mt-4">
              I&apos;m an avid reader and enjoy exploring new concepts in science and technology. Staying up-to-date with the latest trends and innovations is not just a part of my job; it&apos;s a genuine passion.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
