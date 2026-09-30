// app/about/page.tsx

import HeroSection from "../components/HeroSection";
import SectionDivider from "../components/SectionDivider";
import TechTag from "../components/TechTag";
import Image from "next/image";

const professionalStack = ["Java", "Spring Boot", "PostgreSQL", "Kafka", "MQTT", "Docker", "Bash", "Makefile", "HTML", "CSS", "Git"];
const personalStack = ["HTML", "CSS", "JavaScript", "Docker", "PHP", "Git", "Linux", "MQTT", "Home Assistant"];

export default function AboutPage() {
  return (
    <div>
      <HeroSection
        title="About"
        subtitle="Backend systems, infrastructure, and practical engineering."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider />

        <section className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-start">
          <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden" style={{ borderRadius: "4px", border: "1px solid var(--border)" }}>
            <Image
              src="/mmmaske.svg"
              width={284}
              height={120}
              alt="mmmaske"
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: "var(--text)" }}>
              Mark Maske is a backend and integration software engineer with approximately 13 years of professional development experience. He specializes in backend systems, business-process digitization, automation, and distributed infrastructure.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              His career began in web development and evolved through building multi-module business systems — covering HR, payroll, accounting, maritime operations, and point-of-sale. He currently works on backend and integration systems for a banking technology client, building reusable microservice templates, data services, and event-driven processing pipelines.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              Outside work, he maintains a Docker-based homelab with roughly 45 containers across two hosts, self-hosted services, MQTT home automation, and local AI infrastructure. The engineering theme: build systems, run them, break them, debug them, improve them.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <TechTag name="Pulsar" context="current employer" />
              <TechTag name="San Beda University" context="ICT degree" />
              <TechTag name="Mid-senior" context="level" />
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Professional Stack</h2>
            <div className="flex flex-wrap gap-2">
              {professionalStack.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Personal / Homelab</h2>
            <div className="flex flex-wrap gap-2">
              {personalStack.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section>
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Core Values</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Honesty", "Preparedness", "Resourcefulness", "Empathy"].map((value) => (
              <div key={value} className="p-4" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }}>
                <span className="font-mono text-sm" style={{ color: "var(--accent)" }}>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider label="Contact" />

        <p className="text-sm" style={{ color: "var(--muted)" }}>
          <a href="mailto:admin@mmmaske.com" className="hover:underline" style={{ color: "var(--accent-2)" }}>admin@mmmaske.com</a>
        </p>
      </div>
    </div>
  );
}
