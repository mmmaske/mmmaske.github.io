// app/contact/page.tsx

"use client";

import HeroSection from "../components/HeroSection";
import SectionDivider from "../components/SectionDivider";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <HeroSection
        title="Contact"
        subtitle="Let's build something together."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Direct Email</h2>
            <a
              href="mailto:admin@mmmaske.com"
              className="text-lg hover:underline"
              style={{ color: "var(--accent-2)" }}
            >
              admin@mmmaske.com
            </a>

            <SectionDivider />

            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Social</h2>
            <div className="space-y-2">
              <a href="https://github.com/mmmaske" target="_blank" rel="noopener noreferrer" className="block hover:underline" style={{ color: "var(--accent-2)" }}>GitHub</a>
              <a href="https://linkedin.com/in/mmmaske" target="_blank" rel="noopener noreferrer" className="block hover:underline" style={{ color: "var(--accent-2)" }}>LinkedIn</a>
              <a href="https://x.com/mmmaske" target="_blank" rel="noopener noreferrer" className="block hover:underline" style={{ color: "var(--accent-2)" }}>Twitter/X</a>
            </div>

            <SectionDivider />

            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              I&apos;m currently open to new opportunities and collaborations. Feel free to reach out anytime.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="p-6" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--accent)", borderRadius: "4px" }}>
                <h3 className="font-mono text-sm" style={{ color: "var(--accent)" }}>Message sent.</h3>
                <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>I&apos;ll get back to you at {form.email}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono mb-1" style={{ color: "var(--muted)" }}>Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm focus:outline-none"
                    style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", color: "var(--text)" }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono mb-1" style={{ color: "var(--muted)" }}>Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm focus:outline-none"
                    style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", color: "var(--text)" }}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-mono mb-1" style={{ color: "var(--muted)" }}>Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm resize-y focus:outline-none"
                    style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", color: "var(--text)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-sm font-mono transition-opacity duration-200 hover:opacity-80"
                  style={{ backgroundColor: "var(--accent)", color: "var(--bg)", borderRadius: "4px" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <SectionDivider />
      </div>
    </div>
  );
}
