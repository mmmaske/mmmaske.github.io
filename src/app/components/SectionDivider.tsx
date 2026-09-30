interface SectionDividerProps {
  label?: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="flex items-center gap-4 my-12">
      <hr className="flex-1" style={{ border: "none", borderTop: "1px solid var(--border)" }} />
      {label && (
        <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--muted)" }}>
          {label}
        </span>
      )}
    </div>
  );
}
