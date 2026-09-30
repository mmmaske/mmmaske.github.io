// app/work/page.tsx

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
      "Collaborating with teammates on engineering tasks for the banking client's platform.",
    ],
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Bash"],
  },
  {
    role: "Backend Developer / Systems Engineer",
    company: "Logistics Company",
    location: "Remote / On-site",
    period: "Prior role — years not specified",
    responsibilities: [
      "Developed a web-based business system covering HR/payroll, operations, accounting, and purchasing modules.",
      "Built employee onboarding, payroll processing, pay calculations, and tax calculation features.",
      "Implemented contract tracking, maritime process tracking, and trucking process tracking.",
      "Created chart of accounts, bookkeeping, credit/debit transactions, and cheque tracking.",
      "Built quote tracking, approval workflows, and purchase tracking in purchasing.",
    ],
    technologies: ["Apache/MariaDB", "PHP", "HTML", "CSS", "jQuery"],
  },
  {
    role: "POS System Developer / Maintainer",
    company: "Family Laundromat",
    location: "On-site",
    period: "Ongoing",
    responsibilities: [
      "Maintained and developed a point-of-sale system for the family laundromat.",
      "Implemented customer information entry, sales records, and wash/dry transaction data.",
      "Built payment processing, change calculation, staff shift tracking, and inventory handling.",
      "Created a hardware interface to communicate with laundry machines for remote cycle control.",
    ],
    technologies: ["Apache/MariaDB", "PHP", "HTML", "CSS", "jQuery"],
  },
];

export default function WorkPage() {
  return (
    <div>
      <HeroSection
        title="Work & Experience"
        subtitle="13 years of building backend systems, automating business processes, and integrating real-world infrastructure."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider />
        <ResumeBlock entries={entries} />
        <SectionDivider />
      </div>
    </div>
  );
}
