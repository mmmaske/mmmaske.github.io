interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function HeroSection({ title, subtitle, children }: HeroSectionProps) {
  return (
    <section className="relative py-16 md:py-24 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
          style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-lg md:text-xl max-w-2xl"
            style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)" }}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
