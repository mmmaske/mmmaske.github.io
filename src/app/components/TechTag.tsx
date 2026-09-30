interface TechTagProps {
  name: string;
  context?: string;
}

export default function TechTag({ name, context }: TechTagProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded" style={{ backgroundColor: "var(--elevated)", color: "var(--accent-2)", border: "1px solid var(--border)" }}>
      <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
      {name}
      {context && (
        <span style={{ color: "var(--muted)" }}>/ {context}</span>
      )}
    </span>
  );
}
