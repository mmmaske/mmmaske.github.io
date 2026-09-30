// app/writing/[slug]/page.tsx

import HeroSection from "../../components/HeroSection";
import SectionDivider from "../../components/SectionDivider";
import TechTag from "../../components/TechTag";

interface PostData {
  title: string;
  date: string;
  tags: string[];
  content: string;
}

const posts: Record<string, PostData> = {
  "running-a-personal-cloud-behind-cgnat": {
    title: "Running a Personal Cloud Behind CGNAT with Docker, Tailscale and Cloudflare Tunnel",
    date: "2026-09-01",
    tags: ["CGNAT", "Cloudflare Tunnel", "Tailscale", "Docker", "ownCloud"],
    content: `## The Problem

I wanted to run useful Internet-accessible services from home without renting a VPS. My ISP uses CGNAT, which means traditional port forwarding is unavailable. This is a real constraint that shapes every infrastructure decision.

## The Approach

The setup uses three layers:

1. **Cloudflare Tunnel** for public access to selected services
2. **Tailscale** for private/LAN access to internal services
3. **Docker** for containerized service deployment

The goal is a public cloud endpoint under my own domain while maintaining appropriate private access.

## What I Tried

I configured Cloudflare Tunnel as the public entry point, set up Tailscale for the private network, used DNS for domain routing, and ran ownCloud Infinite Scale in Docker with proper networking configuration.

## What Broke

Several things went wrong along the way:

- Origin protocol behavior caused certificate validation failures when Cloudflare Tunnel forwarded requests
- Container hostname vs IP addressing created connectivity issues
- Public share links behaved incorrectly and needed to be recreated
- WebDAV configuration required specific origin setup

## The Fix

Resolved origin certificate validation by configuring proper TLS termination. Recreated public shares after fixing the link behavior. Established a clear separation between public and private access paths.

## What I Learned

CGNAT workarounds with Cloudflare Tunnel are reliable and practical for self-hosting without a VPS. The key insight: keep public services and private infrastructure segregated. Don't unnecessarily expose admin or private services to the Internet.

<!-- more -->

## Technologies
`,
  },
  "mqtt-media-control-home-assistant": {
    title: "I Put MQTT Between My Desktop and Home Assistant. Here's What Happened.",
    date: "2026-08-15",
    tags: ["MQTT", "Home Assistant", "Node.js", "MPRIS", "playerctl"],
    content: `## The Goal

Connect Home Assistant to desktop browser media playback using MQTT as the communication layer.

## The Architecture

The custom bridge connects:
- Home Assistant
- MQTT (Eclipse Mosquitto)
- The workstation
- Browser media playback
- MPRIS / playerctl

The workstation browser can expose media controls through MPRIS, while MQTT provides the communication path to Home Assistant.

## What I Tried

Built a Node.js-based bridge that subscribes to MQTT topics for media commands and translates them into MPRIS actions on the workstation. The other direction reads browser media status and publishes it to MQTT for Home Assistant automation.

## What Broke

- MPRIS player detection was unreliable when multiple media players were running
- MQTT message ordering for rapid control changes (play/pause/play could get out of sync)
- Browser tab needed to be active for MPRIS to report status correctly

## The Fix

Added message debouncing on the MQTT side and explicit state synchronization on connection. Made player detection iterate through available MPRIS endpoints rather than assuming a single one.

## What I Learned

MQTT is excellent for device/control bridges. The asynchronous messaging model handles intermittent connectivity well. But state synchronization requires explicit design — you can't just push events and hope the other side stays in sync.

## Technologies
`,
  },
  "multi-host-docker-homelab": {
    title: "Managing Two Docker Hosts as One Infrastructure Environment",
    date: "2026-07-20",
    tags: ["Docker", "Dockhand", "Hawser", "LAN"],
    content: `## The Goal

Manage multiple Docker hosts as a single personal infrastructure environment. Two machines, ~45 total containers, one management plane.

## The Setup

- **not-a-server**: ~32 containers, runs Dockhand, hosts the majority of infrastructure
- **not-a-workstation**: ~13 containers, development machine and second infrastructure node
- **Dockhand**: Container management interface running on not-a-server
- **Hawser Standard**: Connects Dockhand to not-a-workstation over the LAN

## What I Tried

Configured Dockhand as the management plane with Hawser Standard handling remote Docker administration on the second host. Set up authentication between management components and ensured LAN service connectivity.

## What Broke

- Authentication between Dockhand and Hawser required careful configuration
- Network connectivity for remote Docker access needed specific firewall rules
- Service discovery across hosts was not automatic — needed explicit configuration

## The Fix

Established authenticated Hawser connections, configured proper network rules, and documented which services run on which host for clarity.

## What I Learned

Multi-host Docker management creates a practical architecture with real tradeoffs. Authentication between management components is critical. And knowing which service runs where matters when troubleshooting.

## Technologies
`,
  },
};

export function generateStaticParams() {
  return [
    { slug: 'running-a-personal-cloud-behind-cgnat' },
    { slug: 'mqtt-media-control-home-assistant' },
    { slug: 'multi-host-docker-homelab' }
  ];
}


export default function WritingSlugPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Post not found</h1>
      </div>
    );
  }

  return (
    <div>
      <HeroSection title={post.title} subtitle={post.date} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SectionDivider />

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <TechTag key={tag} name={tag} />
          ))}
        </div>

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
