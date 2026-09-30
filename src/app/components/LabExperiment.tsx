interface LabExperimentProps {
  title: string;
  goal: string;
  experiment: string;
  tried: string;
  broke?: string;
  fix: string;
  learned: string;
  tags?: string[];
}

export default function LabExperiment({ title, goal, experiment, tried, broke, fix, learned, tags }: LabExperimentProps) {
  const sections = [
    { label: "Goal", content: goal },
    { label: "Experiment", content: experiment },
    { label: "What I Tried", content: tried },
    ...(broke ? [{ label: "What Broke", content: broke }] : []),
    { label: "Fix", content: fix },
    { label: "What I Learned", content: learned },
  ];

  return (
    <article className="py-10 md:py-14" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "var(--text)" }}>
            {title}
          </h2>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded" style={{ backgroundColor: "var(--elevated)", color: "var(--accent-3)", border: "1px solid var(--border)" }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.label} className="grid md:grid-cols-[140px_1fr] gap-4">
              <h3
                className="text-xs font-mono uppercase tracking-widest pt-1"
                style={{ color: "var(--accent-3)" }}
              >
                {section.label}
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--text)" }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
