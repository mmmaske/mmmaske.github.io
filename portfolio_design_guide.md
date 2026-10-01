# Mark Maske Portfolio — Aesthetic & Design Guide

**Status:** Design source of truth for the portfolio implementation agent  
**Primary goal:** Make a technically credible engineer look interesting enough that a hiring manager thinks: **“Damn. We need to interview this guy.”**

## 1. Design Direction

Combine **cyberpunk/homelab energy**, **brutalist engineering aesthetics**, **professional editorial clarity**, and **a little gremlin personality**.

The site should feel like it was made by a real engineer who happens to run an absurd amount of infrastructure at home—not like a generic developer template.

Visual references may include industrial control panels, network equipment, terminal interfaces, observability dashboards, technical documentation, old-school hacker aesthetics, and brutalist web design. Borrow the visual language without making the site confusing or gimmicky.

**Guiding principle:**

> Technical enough to be interesting. Human enough to be approachable. Professional enough to get hired. Weird enough to be memorable.

## 2. Visual Personality

Desired impression:

**“Serious engineer. Slightly unhinged homelab. Knows what they're doing.”**

Avoid the feel of a corporate consultant, generic frontend developer, crypto landing page, fake hacker movie interface, AI-generated SaaS template, or résumé printed onto HTML.

Humor should be confident and dry, not constant. Occasional lines such as:

> Infrastructure — It started as a server. It became a lifestyle problem.

are encouraged when appropriate.

## 3. Color System

### Default: Dark

Use a **near-black** base rather than pure black.

Conceptual palette:

- Background: near-black / charcoal
- Surface: slightly lighter charcoal
- Elevated surface: dark gray
- Primary text: soft white
- Secondary text: muted gray
- Borders: subtle gray
- Primary accent: neon green
- Secondary accent: electric cyan
- Optional tertiary accent: electric purple
- Warning: restrained orange
- Error: restrained red

Exact values are implementation decisions.

### Neon rule

Neon is an **accent**, not a background.

Good: thin neon borders, status indicators, links, selected navigation, tiny glows, diagram nodes, code highlights, hover states.

Bad: giant neon gradients, glowing text everywhere, bright backgrounds, every component using a different accent, constant pulsing.

The site should look good for 30 minutes without hurting the visitor's eyes.

## 4. Light Mode

Provide an optional light theme. It should use a warm/off-white background, dark charcoal text, muted gray surfaces, restrained borders, and adjusted versions of the accent colors.

Dark mode is the identity. Light mode is the preference/accessibility option.

## 5. Typography

The implementation agent may choose exact fonts.

Prioritize:

1. Excellent readability
2. Strong headings
3. Distinct technical/monospace typography
4. Good rendering across platforms
5. Clear hierarchy

A good system can combine a modern sans-serif for body/UI, an expressive or strong sans-serif for major headings, and monospace for technical details.

**Do not make the entire website monospace.** Monospace should signal technical information, not become a gimmick.

## 6. Layout Philosophy

Use a strong grid. Layouts should feel deliberately engineered.

Prefer:

- asymmetric layouts
- strong horizontal rules
- large headings
- dense technical cards next to generous whitespace
- occasional full-width sections
- carefully aligned metadata
- deliberate visual hierarchy

Avoid endless centered text, repetitive three-column cards, excessive rounded cards, generic SaaS UI, giant empty hero areas, and component soup.

Use mostly square or lightly rounded corners. Avoid turning everything into pills.

## 7. Homepage

The homepage should immediately communicate:

1. who Mark is
2. what kind of engineering he does
3. why his experience is interesting
4. where the visitor should go next

Do **not** use:

> Hi, I'm Mark 👋

A possible direction is a strong statement such as:

> **Backend systems for messy real-world problems.**

with supporting context:

> Backend & Integration Software Engineer  
> Business systems · APIs · Messaging · Automation

A technical visual motif can accompany this: small system nodes, message flow, service labels, subtle grid, project telemetry, or a code fragment.

This must **not** become a fake terminal.

## 8. Integrated Technical Aesthetic

Technical elements should appear throughout the site but remain understandable to non-technical visitors.

For example, instead of a project card that only says:

> Project Name — Java, Docker, PostgreSQL

prefer contextual presentation:

> **Banking Event Aggregation**  
> Kafka → aggregation → token reuse → downstream processing  
> `Java` `Kafka` `PostgreSQL`  
> **Problem:** reduce repeated authentication overhead while processing a stream of client events.

A non-technical visitor understands the problem; an engineer notices the interesting technical part.

## 9. Technical Visualization

Use technical visuals selectively:

- simplified architecture diagrams
- event/message flow diagrams
- service relationship diagrams
- MQTT message flows
- before/after architecture
- database relationship fragments
- annotated screenshots
- terminal screenshots
- observability screenshots
- deliberately abstract infrastructure diagrams

### Security rule

Do **not** publish a detailed blueprint of the home network.

Never expose public IPs, internal IP ranges, credentials, tokens, sensitive hostnames, private domain mappings, or a complete service/network map.

Technical visuals should demonstrate engineering thinking, not provide an attacker's reconnaissance map.

## 10. Project Presentation

Use a combination of two formats.

### Case Study

For substantial professional or personal projects:

**Problem → Constraints → Approach → Implementation → Result → Lessons**

Demonstrate engineering judgment. Never fabricate metrics. If no measured performance improvement exists, describe the qualitative result instead.

### Engineering Lab

For homelab experiments:

**Goal → Experiment → What I Tried → What Broke → Fix → What I Learned**

This works especially well for Cloudflare Tunnel, Tailscale, MQTT, Home Assistant, Docker infrastructure, AI tooling, Tor experiments, and Kubernetes learning.

The site should make experimentation look like engineering rather than a collection of random Docker containers.

## 11. Professional vs Personal Work

Clearly distinguish:

### Professional Experience
Things Mark actually did professionally.

### Personal Engineering
Things Mark built, maintained, designed, or actively experimented with.

### Open-Source Infrastructure
Software Mark deployed/configured but did not author.

Never imply that deploying an open-source application means Mark wrote it.

## 12. Homelab Section

The homelab should be a significant personality element without becoming the entire portfolio.

It should communicate:

> “This guy actually likes understanding how systems work.”

Possible visual elements include an abstract service map, host cards, infrastructure timeline, selected experiments, screenshots, architecture fragments, and a “currently experimenting with” area.

Do not present the homelab as a giant technology inventory.

## 13. Technology Display

**No skill bars. No percentage ratings.**

Never use:

> Java ██████████ 95%

or arbitrary proficiency scores.

Instead, use contextual technology tags such as:

`Java` `Kafka` `PostgreSQL` `Docker`

and explain where and why they were used.

Technology should be attached to evidence.

## 14. No Giant Logo Wall

Do not build a giant grid of React/Java/Docker/PostgreSQL/etc. logos.

Logos may appear occasionally where they improve comprehension.

Technical ability should be demonstrated through projects, architecture, writing, decisions, explanations, screenshots, and results—not a pile of logos.

## 15. Photography

Use Mark's existing casual photo.

It should feel authentic rather than corporate.

Do not turn it into a fake executive headshot, aggressively AI-retouch it, or make the entire site revolve around it.

Possible treatment:

- small portrait beside About
- editorial-style portrait card
- photograph integrated into an asymmetric layout
- subtle monochrome treatment if appropriate

## 16. Screenshots

Screenshots are encouraged because they demonstrate actual work.

Good uses include project interfaces, dashboards, architecture views, terminal output, Home Assistant, Docker management, custom software, and monitoring.

Screenshots should be intentionally cropped, consistently framed, legible, and stripped of secrets/private information.

Every screenshot should answer:

> “Why am I looking at this?”

## 17. Motion & Interaction

Motion can be bold, but the rule is:

> **Animated, not annoying.**

Use smooth page transitions, subtle parallax, animated grid elements, network/message movement, hover transformations, reveal animations, subtle glow changes, scrolling technical metadata, and occasional interactive diagrams.

Avoid constant flashing, aggressive glitch effects, infinite movement everywhere, blocking animations, long loading sequences, or motion that makes navigation difficult.

Respect `prefers-reduced-motion`.

## 18. Fake Terminal Rule

**Do not build a fake terminal.**

A terminal aesthetic is welcome. A UI pretending to execute commands is not.

Do not create fake command sequences such as `$ whoami` unless the interaction actually performs a meaningful action.

Technical visual language should support the content rather than cosplay as a hacker.

## 19. Microcopy

Microcopy is a major opportunity for personality.

Occasional examples:

> Built because the normal way wasn't interesting enough.

> Production experience, questionable homelab decisions.

> It worked. Then I learned why.

> Infrastructure is just software with more cables.

Keep this sparse. Most content should remain clear and professional.

## 20. Navigation

Keep navigation conventional enough that nobody has to learn the website.

Likely structure:

- Home
- Work / Experience
- Projects
- Lab
- Writing
- About
- Contact

The exact information architecture can evolve.

Avoid gimmicky navigation such as terminal commands, draggable windows, desktop operating-system metaphors, hidden menus, or intentionally confusing navigation.

Personality belongs in the presentation, not in making visitors hunt for information.

## 21. Writing / Blog Design

Technical writing should feel like an engineering notebook crossed with a polished technical publication.

Articles should emphasize:

- what problem existed
- what was tried
- what failed
- why it failed
- what changed
- what was learned

Prefer titles like:

> **I Put MQTT Between My Desktop and Home Assistant. Here's What Happened.**

over generic tutorial titles such as:

> **Understanding MQTT: A Beginner's Guide**

The writing should feel based on real experience.

Code blocks should be readable, copyable, syntax highlighted, and theme-aware. Line numbers should only be used when useful.

## 22. Responsive Design

Mobile is a first-class experience.

Do not simply shrink the desktop layout.

On mobile:

- preserve strong typography
- simplify diagrams or make them horizontally scrollable
- keep screenshots legible
- use simple navigation
- reduce decorative animation where appropriate
- wrap technical metadata cleanly
- avoid comically tall cards

Do not hide important content just because the screen is small.

## 23. Accessibility

Accessibility is part of engineering quality.

Requirements:

- sufficient contrast
- keyboard navigation
- visible focus states
- semantic HTML
- alt text for meaningful images
- appropriate treatment of decorative images
- reduced-motion support
- accessible labels
- no information conveyed only through color
- reasonable font sizes
- no tiny terminal text

Neon accents must never be the sole way to communicate state.

## 24. Performance

The portfolio should feel fast.

Prefer optimized images, lazy-loaded screenshots, restrained dependencies, efficient animations, progressive enhancement, static/server-rendered content where appropriate, and minimal client-side JavaScript unless it provides meaningful interaction.

Do not turn the portfolio into a demonstration of how much JavaScript a browser can execute.

## 25. Explicit Anti-Patterns

Do not use:

- “Hi, I'm Mark 👋”
- fake terminal interfaces
- skill bars
- percentage ratings
- giant React logos
- giant technology-logo grids
- generic corporate language
- meaningless buzzwords
- “passionate developer” filler
- generic motivational quotes
- stock photos
- excessive gradient blobs
- AI-generated corporate illustrations
- résumé dumping
- fake statistics
- fabricated performance metrics
- fabricated client results
- fake production experience
- unnecessary glassmorphism
- excessive rounded cards
- excessive neon
- excessive glitch effects
- endless animated backgrounds
- a portfolio that looks like a SaaS landing page

## 26. Content Hierarchy

Prioritize evidence.

### Tier 1 — Who Mark is
Backend / Integration Software Engineer focused on business systems, automation, APIs, messaging, and distributed backend systems.

### Tier 2 — Professional evidence
Real work involving banking integrations, microservices, Kafka, business rules, data, APIs, and client-specific systems.

### Tier 3 — Long-term engineering experience
Previous work with business systems, logistics, HR/payroll, accounting, purchasing, operations, and POS.

### Tier 4 — Personal engineering
Laundromat POS, homelab, MQTT, Home Assistant, Docker, Cloudflare/Tailscale, AI tooling, and infrastructure experiments.

### Tier 5 — Writing
Use real engineering experiences as the source.

## 27. Hiring Manager Test

Every major page should pass:

> If a hiring manager spends 30–60 seconds here, do they understand what kind of engineer Mark is and see evidence that he can solve real problems?

The site should make the visitor want to inspect the projects and experience rather than forcing them through a résumé.

Desired reaction:

> **“Damn. We need to interview this guy.”**

The site should achieve this through evidence, not by explicitly claiming that Mark is exceptional.

## 28. Implementation Philosophy

When exact values are unspecified, the implementation agent should make independent aesthetic decisions while preserving these priorities:

1. **Credibility**
2. **Clarity**
3. **Personality**
4. **Technical depth**
5. **Visual experimentation**
6. **Performance**

If an effect looks cool but reduces clarity, remove it.

If a component looks impressive but communicates nothing, remove it.

If a technical detail is interesting but exposes sensitive infrastructure, abstract it.

If a joke reduces credibility, cut it.

If a boring design choice makes the engineering evidence easier to understand, choose the boring design.

## 29. One-Sentence Creative Brief

> **Build a dark, near-black, cyberpunk/brutalist engineering portfolio with restrained neon accents, real technical evidence, strong editorial typography, occasional gremlin humor, tasteful motion, and enough homelab flavor to make Mark memorable without turning the site into a fake hacker terminal.**
