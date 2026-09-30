interface ResumeBlockProps {
  entries: Array<{
    role: string;
    company: string;
    location?: string;
    period: string;
    responsibilities: string[];
    technologies?: string[];
  }>;
}

export default function ResumeBlock({ entries }: ResumeBlockProps) {
  return (
    <div className="space-y-10">
      {entries.map((entry, index) => (
        <div key={index} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
          <div className="space-y-1">
            <p className="font-mono text-sm" style={{ color: "var(--accent)" }}>{entry.period}</p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {entry.location && <span>{entry.location} — </span>}
              {entry.company}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--text)" }}>
              {entry.role}
            </h3>
            <ul className="space-y-2">
              {entry.responsibilities.map((resp, i) => (
                <li key={i} className="leading-relaxed" style={{ color: "var(--text)" }}>
                  {resp}
                </li>
              ))}
            </ul>
            {entry.technologies && entry.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {entry.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded" style={{ backgroundColor: "var(--elevated)", color: "var(--accent-2)", border: "1px solid var(--border)" }}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
