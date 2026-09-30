// app/page.tsx

"use client";

import HeroSection from "./components/HeroSection";
import SectionDivider from "./components/SectionDivider";
import CaseStudy from "./components/CaseStudy";
import Link from "next/link";
import TechTag from "./components/TechTag";

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Backend systems for messy real-world problems."
        subtitle="Backend & Integration Software Engineer — Business systems · APIs · Messaging · Automation"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <TechTag name="Java" context="Spring Boot" />
          <TechTag name="Kafka" context="event-driven pipelines" />
          <TechTag name="PostgreSQL" context="data services" />
          <TechTag name="Docker" context="containerized infrastructure" />
          <TechTag name="MQTT" context="messaging & automation" />
          <TechTag name="Cloudflare Tunnel" context="CGNAT access" />
          <TechTag name="Tailscale" context="private network" />
        </div>
      </HeroSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider />

        <section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 py-8">
          <h2
            className="text-2xl md:text-3xl font-bold md:sticky md:top-24 md:self-start"
            style={{ color: "var(--text)" }}
          >
            What I Do
          </h2>
          <div className="space-y-6">
            <p className="leading-relaxed text-lg" style={{ color: "var(--text)" }}>
              I take complicated, partly manual business processes and turn them into integrated software workflows. My work sits at the intersection of backend engineering, business automation, and distributed systems.
            </p>
            <p className="leading-relaxed text-lg" style={{ color: "var(--muted)" }}>
              Currently building and customizing reusable microservice templates, data services, and event-driven processing pipelines for a banking technology client. Previously, I spent years digitizing operations across HR, payroll, accounting, maritime logistics, and retail POS.
            </p>
            <p className="leading-relaxed text-lg" style={{ color: "var(--muted)" }}>
              Outside work, I run a Docker-based homelab as a practical engineering playground — hosting services, experimenting with networking, automation, local AI, and self-hosted infrastructure under real resource constraints.
            </p>
          </div>
        </section>

        <SectionDivider label="Selected Work" />

        <CaseStudy
          title="Banking Event Aggregation"
          problem="A banking client needed to aggregate messages arriving through a Kafka queue. Processing every message independently introduced unnecessary latency because each required a JWT, and the client imposed rate limits on JWT usage."
          constraints="JWT rate limits from the client. Throughput and latency sensitivity. The bank designed the solution; Mark's team implemented it and provided documentation."
          approach="Aggregation approach allowing multiple messages to share a single JWT, enabling batch processing and reducing token-related overhead."
          implementation="Secondary programmer on the implementation. Worked on the team's implementation that was deployed for the client."
          tags={["Java", "Kafka", "PostgreSQL", "Spring Boot"]}
        />

        <SectionDivider label="More Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/projects" className="block p-6 transition-all duration-200 hover:border" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>View All Projects</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>Case studies on the laundromat POS, logistics platform, and homelab infrastructure experiments.</p>
          </Link>
          <Link href="/lab" className="block p-6 transition-all duration-200 hover:border" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>Explore the Lab</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>Homelab infrastructure, self-hosted services, Docker, CGNAT workarounds, and automation experiments.</p>
          </Link>
          <Link href="/work" className="block p-6 transition-all duration-200 hover:border" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>Career History</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>13 years of professional development across web, backend, business automation, and integration systems.</p>
          </Link>
          <Link href="/writing" className="block p-6 transition-all duration-200 hover:border" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>Technical Writing</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>Write-ups on Docker, MQTT, Cloudflare Tunnel, Tailscale, local AI, and infrastructure troubleshooting.</p>
          </Link>
        </div>

        <SectionDivider />
      </div>
    </div>
  );
}
