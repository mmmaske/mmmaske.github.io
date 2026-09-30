// app/lab/page.tsx

import HeroSection from "../components/HeroSection";
import SectionDivider from "../components/SectionDivider";
import LabExperiment from "../components/LabExperiment";
import ScreenshotPlaceholder from "../components/ScreenshotPlaceholder";

export default function LabPage() {
  return (
    <div>
      <HeroSection
        title="Lab"
        subtitle="Homelab infrastructure, self-hosted services, and infrastructure experiments."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider />

        <section className="grid md:grid-cols-[2fr_1fr] gap-8 mb-12">
          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>Not-a-Server</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Fujitsu Esprimo D588 — Intel Core i5-9500, ~8 GB RAM, Ubuntu 24.04 LTS, Docker Engine 29.8.0. Runs the majority of infrastructure and self-hosted applications. Deliberately used instead of a VPS — the ISP uses CGNAT, so traditional port forwarding is unavailable.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>Not-a-Workstation</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              MSI PRO B650-P WIFI — AMD Ryzen 5 7600X, 32 GB DDR5, Radeon RX 6650 XT. Ubuntu 25.10 with Hyprland/Wayland. Also runs ~13 Docker containers and doubles as a development machine.
            </p>
          </div>
        </section>

        <SectionDivider label="Currently Running" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
          {[
            "Dockhand", "Hawser", "Tailscale", "Cloudflare Tunnel",
            "AdGuard Home", "Uptime Kuma", "Dashy", "Speedtest Tracker",
            "Home Assistant", "Mosquitto", "Jellyfin", "Open WebUI",
            "Ollama", "Paperless-ngx", "Stirling-PDF", "ownCloud Infinite Scale",
            "Jellyseerr", "Radarr", "Mumble", "Piped",
            "Shinobi", "Memos", "Immich", "and more",
          ].map((service) => (
            <div key={service} className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }}>
              <span className="inline-block w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
              <span className="text-xs font-mono truncate" style={{ color: "var(--text)" }}>{service}</span>
            </div>
          ))}
        </div>

        <SectionDivider label="Experiments" />

        <LabExperiment
          title="Personal Cloud Behind CGNAT"
          goal="Run useful Internet-accessible services from home without a VPS, using Cloudflare Tunnel for public access and Tailscale for private access."
          experiment="Set up ownCloud Infinite Scale in Docker, exposed through Cloudflare Tunnel while maintaining Tailscale access for private/LAN use."
          tried="Configured Cloudflare Tunnel as the public entry point, Tailscale as the private network, DNS for domain routing, and Docker networking for service isolation."
          broke="Had to troubleshoot origin protocol behavior, certificate validation, container hostname vs IP addressing, public share link behavior, and WebDAV configuration."
          fix="Resolved origin certificate validation issues, configured proper TLS termination, recreated public shares, and established stable public/private access separation."
          learned="CGNAT workarounds with Cloudflare Tunnel are reliable for self-hosting without a VPS. Keeping public and private services segregated is essential for security and clarity."
          tags={["CGNAT", "Cloudflare Tunnel", "Tailscale", "Docker", "DNS", "ownCloud"]}
        />

        <SectionDivider />

        <LabExperiment
          title="Multi-Host Docker Management"
          goal="Manage multiple Docker hosts as one personal infrastructure environment."
          experiment="Set up Dockhand on not-a-server connecting to not-a-workstation using Hawser Standard over the LAN."
          tried="Configured Dockhand as the management plane, Hawser Standard for remote Docker administration, and LAN connectivity between hosts."
          broke="Had to work through authentication between management components and network connectivity for remote Docker access."
          fix="Established authenticated Hawser connections and proper network configuration for cross-host Docker management."
          learned="Multi-host Docker management with Dockhand/Hawser creates a practical homelab architecture with proper authentication and service isolation."
          tags={["Docker", "Dockhand", "Hawser", "LAN Networking"]}
        />

        <SectionDivider />

        <LabExperiment
          title="Local AI Stack"
          goal="Run local AI models integrated into a self-hosted automation environment."
          experiment="Deployed Ollama for model serving and Open WebUI for chat interface, integrated with Home Assistant."
          tried="Set up Ollama with CPU inference on constrained hardware, Open WebUI for the API/UI layer, and Home Assistant AI/conversation-agent integration."
          broke="CPU-only inference is slow for larger models. Memory constraints on not-a-server (~8 GB) require careful model selection. Resource allocation between services is an ongoing balancing act."
          fix="Use smaller, quantized models suitable for the hardware. Run heavier models on the workstation's ROCm-capable GPU when needed."
          learned="Local AI is viable on modest hardware with the right model selection. Resource constraints force disciplined choices about what runs where."
          tags={["Ollama", "Open WebUI", "Home Assistant", "Docker", "GPU"]}
        />

        <SectionDivider />

        <section>
          <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text)" }}>Infrastructure Architecture</h2>
          <ScreenshotPlaceholder label="Architecture Diagram" width={800} height={500} />
          <p className="text-sm mt-3" style={{ color: "var(--muted)" }}>
            Abstract service map — no private IPs, hostnames, or network details exposed.
          </p>
        </section>

        <SectionDivider />
      </div>
    </div>
  );
}
