import Image from "next/image";

interface ScreenshotPlaceholderProps {
  label: string;
  width?: number;
  height?: number;
}

const colorMap: Record<string, { bg: string; fg: string; label: string }> = {
  dashboard: { bg: "#161616", fg: "#00E5FF", label: "Dashboard" },
  terminal: { bg: "#0A0A0A", fg: "#39FF14", label: "Terminal" },
  architecture: { bg: "#1A1A2E", fg: "#00E5FF", label: "Architecture" },
  monitoring: { bg: "#161616", fg: "#FF8C00", label: "Monitoring" },
  interface: { bg: "#161616", fg: "#B347FF", label: "Interface" },
  default: { bg: "#161616", fg: "#39FF14", label: "Screenshot" },
};

export default function ScreenshotPlaceholder({ label, width = 800, height = 500 }: ScreenshotPlaceholderProps) {
  const colors = colorMap[label.toLowerCase()] || colorMap.default;
  return (
    <div
      className="relative overflow-hidden"
      style={{ width, height, backgroundColor: colors.bg, borderRadius: "4px", border: "1px solid var(--border)" }}
    >
      <Image
        src={`https://placehold.co/${width}x${height}/${colors.bg.replace("#", "")}/${colors.fg.replace("#", "")}?text=${encodeURIComponent(label)}`}
        width={width}
        height={height}
        alt={`${label} placeholder`}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      >
        <span className="font-mono text-sm px-4 py-2 rounded" style={{ backgroundColor: "rgba(0,0,0,0.6)", color: colors.fg, border: `1px solid ${colors.fg}40`, borderRadius: "4px" }}>
          {label}
        </span>
      </div>
    </div>
  );
}
