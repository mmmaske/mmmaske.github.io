// app/cv/page.tsx

import HeroSection from "../components/HeroSection";
import SectionDivider from "../components/SectionDivider";
import ResumeBlock from "../components/ResumeBlock";

const entries = [
  {
    role: "Software Engineer",
    company: "Pulsar",
    location: "Remote",
    period: "July 2025 – Present",
    responsibilities: [
      "Building and customizing reusable microservice templates and baseline services for a banking technology client.",
      "Developing event-driven processing pipelines using Apache Kafka, including notification data aggregation.",
      "Creating custom hooks that react to business rule triggers and modify client data in real time.",
      "Working with PostgreSQL, Java, and Spring Boot to build backend data services and API integrations.",
    ],
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Bash"],
  },
  {
    role: "Backend Developer",
    company: "Logistics Company",
    location: "Remote / On-site",
    period: "Prior role",
    responsibilities: [
      "Developed a web-based business system covering HR/payroll, operations, accounting, and purchasing modules.",
      "Built employee onboarding, payroll processing, pay calculations, tax calculations, contract tracking, and more.",
    ],
    technologies: ["Apache/MariaDB", "PHP", "HTML", "CSS", "jQuery"],
  },
  {
    role: "POS System Developer / Maintainer",
    company: "Family Laundromat",
    location: "On-site",
    period: "Ongoing",
    responsibilities: [
      "Maintained and developed a point-of-sale system including customer entry, transactions, payments, staff tracking, and inventory.",
      "Created a hardware interface for laundry machine control.",
    ],
    technologies: ["Apache/MariaDB", "PHP", "HTML", "CSS", "jQuery"],
  },
];

const skills = [
  { name: "Java", context: "Spring Boot, backend services" },
  { name: "PostgreSQL", context: "Data services, queries" },
  { name: "Kafka", context: "Event-driven pipelines" },
  { name: "Docker", context: "Containerized infrastructure" },
  { name: "Bash", context: "Automation, scripting" },
  { name: "MQTT", context: "Messaging, home automation" },
  { name: "PHP", context: "Legacy web systems" },
  { name: "HTML/CSS", context: "Frontend, interfaces" },
  { name: "Git", context: "Version control, collaboration" },
  { name: "Tailscale", context: "Private networking" },
  { name: "Cloudflare Tunnel", context: "Public access, CGNAT" },
  { name: "Linux/Ubuntu", context: "Server administration" },
];

export default function CvPage() {
  return (
    <div>
      <HeroSection
        title="Curriculum Vitae"
        subtitle="Mark Maske — Software Engineer"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[200px_1fr] gap-4 mb-12">
          <p className="font-mono text-sm" style={{ color: "var(--accent)" }}>Updated September 2026</p>
          <p style={{ color: "var(--muted)" }}>San Beda University — Bachelor&apos;s in ICT</p>
        </div>

        <SectionDivider label="Professional Summary" />
        <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text)" }}>
          Backend and integration software engineer with approximately 13 years of professional development experience, beginning in web development and specializing in backend systems, business-process digitization, and automation. Currently building reusable microservice templates, data services, and event-driven processing pipelines for a banking technology client.
        </p>

        <SectionDivider label="Experience" />
        <ResumeBlock entries={entries} />

        <SectionDivider label="Technical Skills" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
          {skills.map((skill) => (
            <div key={skill.name} className="p-3" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }}>
              <div className="font-mono text-sm" style={{ color: "var(--accent-2)" }}>{skill.name}</div>
              <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>{skill.context}</div>
            </div>
          ))}
        </div>

        <SectionDivider label="Contact" />
        <div className="space-y-2">
          <a href="mailto:admin@mmmaske.com" className="block hover:underline" style={{ color: "var(--accent-2)" }}>admin@mmmaske.com</a>
        </div>

        <SectionDivider label="Download" />
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          PDF résumé available on request.
        </p>
      </div>
    </div>
  );
}
