// app/page.tsx

"use client";
import Link from "next/link";

type Blurb = {
  key: string;
  content: string;
};


export default function Home() {
  const blurbCard:Blurb[] = [
    {
      key: "1",
      key: "Improve workflow",
      content: "Technology is a force multiplier. I enjoy building tools intended to be used in day-to-day operations of small and medium businesses that make your operations more productive."
    },
    {
      key: "2",
      key: "Streamline information",
      content: "Collection, categorization, and visualization of raw data is fulfilling for me. The software I build intends to give you the building blocks to make informed decisions."
    },
    {
      key: "3",
      key: "Improve workflow",
      content: "I will work with what you have to the best of my ability. Utilizing open-source applications, we can build something together that will pay for itself before you know it."
    },
  ]

  return (
    <main className="content">
      <div className="hero-section">
        <div className="hero-content flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold mb-4">mmmaske</h2>
          <p>Professional Developer. Amateur Systems Administrator. All-around Computer Dude.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-400">
            You&apos;ve reached my homepage. I am an I.T. professional, and I enjoy working up efficient and inventive solutions to wasteful problems.
          </p>
          <p className="text-lg text-gray-400 mt-4">
            Specializing in backend and web development, I&apos;ve implemented applications for both small and medium businesses ranging from static single-page-apps to point-of-sale stations to multiple department encompassing business automation systems.
          </p>
          <p className="text-lg text-gray-400 mt-4">
            When I&apos;m not coding, I tinker with servers and network infrastructure as a hobby. I manage my own web servers, automate tasks with scripts, and enjoy optimizing systems for functionality and effective improvement in my day-to-day.
          </p>
          <p className="text-lg text-gray-400 mt-4">
            I can be reached at <Link href="mailto:admin@mmmaske.com?subject=Hello">admin@mmmaske.com</Link> for any immediate concerns.
          </p>
        </section>

        {/* What I Do Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blurbCard.map(blurb => (
              <div className="bg-red-950/50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{blurb.key}</h3>
                <p className="text-gray-400">{blurb.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
