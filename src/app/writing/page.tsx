// app/writing/page.tsx

"use client";

import HeroSection from "../components/HeroSection";
import SectionDivider from "../components/SectionDivider";
import BlogCard from "../components/BlogCard";

const posts = [
  {
    slug: "running-a-personal-cloud-behind-cgnat",
    title: "Running a Personal Cloud Behind CGNAT with Docker, Tailscale and Cloudflare Tunnel",
    date: "2026-09-01",
    tags: ["CGNAT", "Cloudflare Tunnel", "Tailscale", "Docker", "ownCloud"],
    excerpt: "How I set up ownCloud Infinite Scale at home without a VPS — using Cloudflare Tunnel for public access and Tailscale for private access, while troubleshooting origin protocol and certificate behavior.",
  },
  {
    slug: "mqtt-media-control-home-assistant",
    title: "I Put MQTT Between My Desktop and Home Assistant. Here's What Happened.",
    date: "2026-08-15",
    tags: ["MQTT", "Home Assistant", "Node.js", "MPRIS", "playerctl"],
    excerpt: "A custom bridge connecting Home Assistant, MQTT, a workstation, browser media playback, and MPRIS/playerctl. What worked, what didn't, and what I learned about asynchronous messaging.",
  },
  {
    slug: "multi-host-docker-homelab",
    title: "Managing Two Docker Hosts as One Infrastructure Environment",
    date: "2026-07-20",
    tags: ["Docker", "Dockhand", "Hawser", "LAN"],
    excerpt: "How I set up Dockhand and Hawser to manage ~45 containers across two machines, including authentication, remote Docker administration, and LAN service connectivity.",
  },
];

export default function WritingPage() {
  return (
    <div>
      <HeroSection
        title="Writing"
        subtitle="Technical notes, infrastructure write-ups, and homelab lessons."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <SectionDivider />

        <p className="text-sm" style={{ color: "var(--muted)" }}>
          More posts coming soon. Real engineering experiences as source material.
        </p>
      </div>
    </div>
  );
}
