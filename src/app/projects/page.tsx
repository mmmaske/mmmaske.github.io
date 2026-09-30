// app/projects/page.tsx

import HeroSection from "../components/HeroSection";
import SectionDivider from "../components/SectionDivider";
import CaseStudy from "../components/CaseStudy";

export default function ProjectsPage() {
  return (
    <div>
      <HeroSection
        title="Projects"
        subtitle="Case studies on systems built, broken, debugged, and improved."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider />

        <CaseStudy
          title="Laundromat Point-of-Sale System"
          problem="A family laundromat needed an integrated system to handle customer transactions, machine control, staff shifts, and inventory — replacing manual processes and paper records."
          constraints="Direct exposure to the business domain. Hardware integration with laundry machines. Ongoing maintenance over years. Budget-conscious family business."
          approach="Built a custom POS system covering customer entry, wash/dry transactions, payment processing, change calculation, staff tracking, and inventory. Created a hardware interface to control laundry machines remotely."
          implementation="Full-stack development using PHP with Apache/MariaDB backend, HTML/CSS interface. Hardware integration layer for machine control. Continued maintenance and iterative improvement."
          result="The system is still in use today, running daily operations for the family business. It replaced manual processes and gave the business reliable transaction tracking and machine control."
          lessons="End-to-end development with direct domain knowledge produces software that actually works in production. Maintaining a system over years reveals what design decisions matter most."
          tags={["PHP", "Apache/MariaDB", "HTML", "CSS", "jQuery", "Hardware I/O"]}
        />

        <SectionDivider />

        <CaseStudy
          title="Banking Event Aggregation Pipeline"
          problem="A banking client needed to aggregate messages arriving through a Kafka queue. Each message required a JWT for processing, but the client imposed rate limits on JWT usage. Processing every message independently introduced unnecessary latency and limited throughput."
          constraints="JWT rate limits imposed by the client. Throughput and latency sensitivity. Bank designed the solution; implementation team executed and documented."
          approach="Aggregation approach allowing multiple messages to share a single JWT, enabling batch processing and reducing token-related overhead."
          implementation="Secondary programmer on the implementation. Worked within the bank's designed architecture to build and deploy the aggregation pipeline."
          result="Implemented and deployed for the client. The aggregation pattern reduced repeated authentication overhead when processing streams of client events."
          lessons="When a shared resource has rate limits, batching and sharing that resource across consumers is a fundamental throughput optimization. The approach generalizes to any rate-limited external dependency."
          tags={["Java", "Kafka", "PostgreSQL", "Spring Boot"]}
        />

        <SectionDivider />

        <CaseStudy
          title="Logistics Operations Platform"
          problem="A logistics company needed a web-based business system covering multiple areas of operations — from HR and payroll to maritime tracking, accounting, and purchasing — that integrated previously manual processes into software workflows."
          constraints="Multi-module system requiring integration across distinct business domains. Legacy process digitization. Multiple stakeholder requirements."
          approach="Built a comprehensive web-based system with modules covering HR/payroll, operations, accounting/finance, and purchasing. Each module digitized and integrated existing manual processes."
          implementation="Developed employee onboarding, payroll processing, pay and tax calculations, contract tracking, maritime and trucking process tracking, chart of accounts, bookkeeping, credit/debit transactions, cheque tracking, quote tracking, approval workflows, and purchase tracking."
          result="Integrated business system covering the company's core operations, turning complicated partly-manual processes into integrated software workflows."
          lessons="Real business systems are not monoliths — they are networks of interconnected processes spanning departments. Taking a holistic view while respecting each domain's complexity is key to successful enterprise software."
          tags={["PHP", "Apache/MariaDB", "HTML", "CSS", "jQuery"]}
        />

        <SectionDivider />
      </div>
    </div>
  );
}
