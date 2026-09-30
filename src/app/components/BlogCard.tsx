interface BlogCardProps {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  slug: string;
}

export default function BlogCard({ title, date, tags, excerpt, slug }: BlogCardProps) {
  return (
    <a
      href={`/writing/${slug}`}
      className="block p-6 transition-all duration-200 hover:border"
      style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>{date}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
        {excerpt}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded" style={{ backgroundColor: "var(--elevated)", color: "var(--accent-2)", border: "1px solid var(--border)" }}>
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
