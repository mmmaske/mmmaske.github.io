# Mark Maske — Portfolio Source Document

> **Purpose:** Source material for an AI agent building Mark Maske's professional portfolio, project pages, technical blog content, and supporting site copy.
>
> **Status:** Working draft compiled from known information as of September 23, 2026. Facts marked `TBD` should be confirmed before being presented as portfolio claims.

---

## 1. Professional Identity

**Name:** Mark Maske

**Professional profile:** Backend / business-automation / POS developer with a strong interest in infrastructure, self-hosting, automation, distributed systems, and practical problem solving.

**Education:** Bachelor's degree in ICT, San Beda University.

**Core values:** Honesty, preparedness, resourcefulness, empathy.

**Preferred professional positioning:**
- Backend engineering
- Business automation
- Systems integration
- Linux and self-hosted infrastructure
- Docker/containerization
- Messaging and event-driven systems
- Practical automation
- Troubleshooting and problem solving

The portfolio should emphasize **evidence of things built and solved**, rather than simply listing technologies.

---

## 2. Career / Work Background

### Current / Recent Work

**Role:** Software Engineer  
**Company:** `<COMPANY>`  
**Start date:** July 2025

### Career History

Mark has approximately **13 years of professional software-development experience**, beginning with his first job around 2013.

His earlier career focused primarily on **web development**, with a specialization in:
- backend development
- digitizing manual business processes
- business process automation
- building internal business systems

#### Logistics / Business Operations Platform

At a logistics company, Mark worked on a web-based business system covering multiple areas of the company's operations.

Major modules included:

**HR and Payroll**
- Employee onboarding
- Payroll processing
- Pay calculations
- Tax calculations

**Operations**
- Contract tracking
- Status updates
- Maritime process tracking
- Trucking process tracking

**Accounting and Finance**
- Chart of accounts
- Bookkeeping
- Credit/debit transactions
- Cheque tracking

**Purchasing**
- Quote tracking
- Approval workflows
- Purchase tracking

This is a strong example of Mark's recurring professional focus: taking complicated, partly manual business processes and turning them into integrated software workflows.

#### Family Laundromat POS

Mark currently maintains a point-of-sale system for his family's laundromat business.

The system includes:
- Customer information entry
- Sales records
- Wash/dry transaction data
- Payment processing
- Change calculation
- Staff shift tracking
- Inventory handling

This project is especially useful as evidence of end-to-end practical software development because Mark has direct exposure to the business domain and continues to maintain the system over time.

### Current Work


A normal week consists of working at a desk with teammates to complete engineering tasks for one of the company's clients: a banking contractor.

The client's platform reads banking data such as accounts, transactions, goals, and points. The engineering work involves turning that data into usable microservices and custom hooks that satisfy client-specific business rules.

In this context, a custom hook can react when a customer's transaction satisfies a business rule and then modify/update parts of the client's data. For example, a qualifying transaction on a particular date might award points that the customer can later redeem through another service.

A significant part of the work involves building **baseline/template services** that serve as starting points for client-specific microservices. These are customized to fulfill specific functions within the client's engine and provide banks with the data needed to drive their features.

Another significant area is **event-driven Kafka processing**, including a pipeline that aggregates notification data.

### Professional Technology Stack

- Java
- JavaScript
- PostgreSQL / PSQL
- Light Spring Boot usage
- Apache Kafka
- MQTT / messaging
- Docker
- Bash
- Makefiles
- HTML
- CSS
- Git

### Professional Engineering Themes

- Microservices
- Reusable service baselines
- Client-specific customization
- Event-driven architecture
- Kafka pipelines
- Message aggregation
- Banking data integration
- Backend data services
- API/hooks integration
- Business-rule-triggered data modifications
- Transaction-driven workflows
- Cross-service/business-feature integration
- Latency reduction
- Batch processing
- Distributed systems
- Collaborative software development

### Professional Problem-Solving Examples

#### Kafka Notification Aggregation

One banking client needed aggregation of messages arriving through a Kafka queue.

The important constraint was that each message required a JWT, while the client imposed rate limits on JWT usage. Processing every message independently therefore introduced unnecessary latency and limited throughput.

The aggregation approach allows multiple messages to share a single JWT, enabling batch processing and reducing token-related overhead.

Mark was the **secondary programmer** on the implementation. The bank designed the solution; Mark's team implemented it and provided documentation intended to help troubleshoot/debug the system.

The implementation worked on the team's machines and was deployed for the client. The client did not provide specific production-performance feedback, so the portfolio should **not invent or imply measured production improvements**.

This can be presented publicly as an anonymized distributed-systems implementation story without exposing the client's identity or proprietary implementation details.

---

## 3. Technical Profile

### Professional vs Personal Stack

**Professional:**
- Java
- JavaScript
- PostgreSQL
- Kafka
- MQ
- Docker
- Bash
- Makefile
- HTML
- CSS
- Git

**Home / personal:**
- HTML
- CSS
- JavaScript
- Docker
- PHP
- Git
- Linux
- MQTT / messaging

The portfolio should distinguish professional experience from homelab experimentation rather than implying production experience with every technology deployed at home.


### Backend

Known / relevant:
- Java
- Spring Boot
- REST/backend services
- Business automation
- POS software
- PostgreSQL
- Apache Kafka / messaging
- Database integration

### Infrastructure

Strong hands-on experience with:
- Ubuntu/Linux
- Docker
- Docker Compose
- Container networking
- Reverse proxies / ingress concepts
- Cloudflare Tunnel
- Tailscale
- CGNAT-aware networking
- DNS
- Authentication/access control
- Storage
- Monitoring
- Self-hosting
- Service isolation
- LAN vs public-service separation

### Messaging / Integration

- Eclipse Mosquitto
- MQTT
- Home Assistant integrations
- MQTT-based device/control bridges
- Event/message-driven automation
- `playerctl` / MPRIS integration through MQTT
- Scripts and small integration services

### Web / Frontend

Known / relevant:
- React
- Next.js
- Dynamic portfolio/site development
- Web application integration
- GitHub Pages

The current/old portfolio was a Next.js site hosted on GitHub Pages and is considered disposable/janky. The desired replacement is a more capable dynamic portfolio plus general technology/blog content.

---

# 4. Homelab / Personal Infrastructure

The homelab is an important portfolio asset because it demonstrates real-world infrastructure work outside a formal job environment.

## Main Server: `not-a-server`

**Hardware:**
- Fujitsu Esprimo D588
- Intel Core i5-9500, 6 cores
- Intel UHD 630
- ~8 GB RAM
- Ubuntu Linux
- ~1 TB secondary storage
- ~232 GB root filesystem

**OS / software:**
- Ubuntu 24.04 LTS
- Docker Engine 29.8.0
- Docker Compose
- Tailscale
- Cloudflare Tunnel
- Git / shell tooling

The machine is deliberately used instead of renting a VPS. The ISP uses CGNAT, so traditional inbound port forwarding is unavailable.

### Infrastructure Philosophy

A recurring design goal is to keep **public services and private infrastructure segregated**.

Public-facing services can be exposed through Cloudflare Tunnel where appropriate.

Private/admin services are intended to remain accessible through Tailscale/LAN rather than being unnecessarily exposed to the public Internet.

This setup provides portfolio-worthy examples of:
- CGNAT workarounds
- Zero-trust-ish access patterns
- private/public service separation
- container networking
- DNS
- secure remote access
- self-hosting without a VPS

---

## 5. Docker Environment

The current homelab has two Docker hosts.

### `not-a-server`

Approximately **32 containers**.

It hosts the majority of the infrastructure and self-hosted applications.

### `not-a-workstation`

Approximately **13 containers**.

This is a separate Ubuntu workstation used as another Docker host.

### Management

**Dockhand** is used to manage both Docker environments.

`not-a-server` runs Dockhand and connects to `not-a-workstation` using Hawser Standard over the LAN.

This creates a small multi-host container-management environment suitable for demonstrating:
- Docker host management
- remote Docker administration
- LAN service connectivity
- authentication between management components
- multi-machine homelab architecture

---

# 6. Notable Self-Hosted Services

The exact active service list changes over time, but known services/projects include:

### Infrastructure / Administration

- Dockhand
- Hawser
- Docker / Docker Compose
- Tailscale
- Cloudflare Tunnel
- AdGuard Home
- Uptime Kuma
- Dashy
- Speedtest Tracker

### Automation / Smart Home

- Home Assistant
- Eclipse Mosquitto
- MQTT integrations
- Custom MQTT bridge scripts
- ESP32-related experimentation
- Tasker on Android
- Device/control automation

### Media

- Jellyfin
- Jellyseerr
- Radarr / related *arr services
- Stash
- Piped
- Mumble
- Browser/media-control integrations

### Documents / Productivity

- ownCloud Infinite Scale (`ocis`)
- Paperless-ngx
- Memos
- Stirling-PDF
- LibreOffice-related document tooling

### AI

- Ollama
- Open WebUI
- Local-model experimentation
- Home Assistant AI/conversation-agent experimentation
- AI coding/agent tools

### Monitoring / Cameras

- Shinobi
- MySQL
- Uptime Kuma

### Development / Experimental

- Java/FPM application environment
- Kubernetes experimentation
- Tor / onion-site experimentation
- SOCKS5 proxy experimentation
- OpenClaw container experimentation
- Various custom scripts and integration services

---

# 7. Public Web / Domain Infrastructure

The user owns a Cloudflare-managed domain and is moving away from the old static GitHub Pages portfolio.

Desired direction:

- Dynamic personal portfolio
- Professional project showcase
- General technology blog / notes
- Public-facing technical documentation where useful
- Potential public ownCloud functionality
- Strong separation between public web services and private homelab services

Cloudflare Tunnel is used because the home ISP is behind CGNAT.

A notable project involved exposing ownCloud Infinite Scale through the public domain while preserving private/LAN access and troubleshooting origin protocol/certificate behavior.

---

# 8. ownCloud Infinite Scale Project

A notable infrastructure project involves running **ownCloud Infinite Scale (`ocis`)** in Docker.

Challenges encountered included:
- Public access through Cloudflare
- Tailscale access
- HTTPS vs HTTP origin behavior
- Container hostname vs IP addressing
- Origin certificate validation
- Public share links
- Web UI vs direct-download behavior
- Recreating public shares when links behaved incorrectly

The final goal is a public cloud endpoint under the user's own domain while maintaining appropriate private access.

This could become a portfolio case study titled something like:

> **Running a Personal Cloud Behind CGNAT with Docker, Tailscale and Cloudflare Tunnel**

Potential technical topics:
- CGNAT
- Cloudflare Tunnel
- Docker networking
- Tailscale
- ownCloud Infinite Scale
- WebDAV
- public share links
- TLS termination
- origin connectivity

---

# 9. Home Assistant / MQTT Automation

Home Assistant is hosted on `not-a-server`.

Eclipse Mosquitto is used as the MQTT broker.

The setup is more than a stock Home Assistant installation: the user writes custom integration scripts and uses MQTT as a general-purpose messaging layer.

Known examples include:

### Workstation Media Control

A custom bridge connects:
- Home Assistant
- MQTT
- the workstation
- browser media playback
- MPRIS / `playerctl`

The workstation browser can expose media controls through MPRIS, while MQTT provides the communication path to Home Assistant.

This demonstrates:
- MQTT
- Node.js
- Linux process control
- asynchronous messaging
- browser/media integration
- custom Home Assistant integration

### Smart Lighting

Home Assistant automations include custom lighting behavior, including a red → purple → blue → purple → red color cycle.

### Alarm / Morning Automation

An automation concept is being developed where Home Assistant asks for the next morning's alarm time and then activates lights at the specified time.

### Mobile + Home Automation

Android Tasker is being explored as another endpoint for Home Assistant.

Potential architecture:

`Android / Tasker ↔ MQTT / Home Assistant ↔ Home infrastructure`

---

# 10. ESP32 / Mobile Connectivity Experiments

A current area of exploration is placing an ESP32 in a car or on a bike and allowing it to connect through the user's phone hotspot.

This is potentially interesting as an embedded/IoT project.

Potential themes:
- ESP32
- Wi-Fi
- mobile hotspot networking
- MQTT
- Home Assistant
- intermittent connectivity
- telemetry
- remote commands
- low-power embedded systems

**Project details:** `TBD`

---

# 11. Tor / Onion Infrastructure

The user has experimented with hosting an onion site in Docker.

The setup uses an `onion-tor` container rather than installing Tor system-wide.

Goals explored:
- Hosting an onion site
- Reading the generated onion hostname from the container
- Using the Tor container as a SOCKS5 proxy
- Understanding Tor relays and exit nodes
- Keeping the Tor deployment isolated in Docker

This can demonstrate:
- privacy-network concepts
- containerized networking
- proxying
- service isolation
- Linux/Docker administration

---

# 12. AI / Local AI Infrastructure

The user runs local AI infrastructure.

Known components:
- Ollama
- Open WebUI
- Home Assistant AI/conversation-agent integration
- AI coding agents
- experimentation with autonomous agent tools
- containerized testing of OpenClaw

The user is interested in using AI as an engineering tool rather than simply consuming hosted chat products.

A potentially useful portfolio theme:

> **Building a Local AI Stack for a Self-Hosted Homelab**

Topics:
- local inference
- model serving
- API integration
- Docker
- resource constraints
- agent isolation
- local/private AI
- automation

---

# 13. Resource-Constrained Infrastructure

The main server is intentionally modest in hardware.

This has produced practical experience with:
- RAM constraints
- swap behavior
- CPU-only workloads
- container resource consumption
- deciding which workloads belong on which machine
- shutting down heavy services when resources are needed elsewhere
- distributing containers between `not-a-server` and `not-a-workstation`

A Java/FPM application environment was recently installed for work testing and was found to be resource-heavy enough that it could be stopped when not needed.

This is useful portfolio evidence because the infrastructure is not an oversized lab: design decisions are made around actual constraints.

---

# 14. Kubernetes Learning

Kubernetes is being explored primarily for self-study.

The goal is learning Kubernetes concepts without pretending that the existing homelab needs Kubernetes for production.

Potential learning topics:
- containers vs orchestration
- deployments
- services
- networking
- storage
- ingress
- resource limits
- cluster architecture

**Current Kubernetes setup/status:** `TBD`

---

# 15. Workstation: `not-a-workstation`

**Hardware:**
- MSI PRO B650-P WIFI
- AMD Ryzen 5 7600X
- Radeon RX 6650 XT 8 GB
- 32 GB DDR5
- integrated GPU also available

**OS / desktop:**
- Ubuntu 25.10
- Hyprland
- Wayland
- Dank Material Shell

**AI:**
- Ollama
- ROCm-capable GPU setup
- Models stored on a separate drive

**Docker:**
- Approximately 13 containers
- Jellyfin
- Immich
- Other self-hosted/experimental services

The workstation doubles as a development machine and a second infrastructure node.

---

# 16. Portfolio Website Direction

The existing portfolio is an older Next.js/GitHub Pages project and is considered disposable.

The new site should be more than a resume.

Desired content model:

### About

A concise explanation of:
- backend engineering
- automation
- infrastructure
- self-hosting
- practical problem solving

### Projects

Projects should show:
1. What problem existed
2. What was built
3. Why the architecture was chosen
4. What technologies were used
5. What went wrong
6. How it was debugged
7. What the final result looks like

### Technical Blog / Notes

Potential topics:
- Docker
- Linux
- MQTT
- Home Assistant
- Cloudflare Tunnel
- Tailscale
- CGNAT
- ownCloud
- local AI
- Docker networking
- Kafka
- backend engineering
- homelab lessons
- troubleshooting writeups

### Infrastructure / Homelab

A dedicated section could visualize or document the homelab without exposing sensitive information.

Possible content:
- architecture diagram
- server specs
- services
- networking model
- public/private boundary
- automation architecture

---

# 17. Strong Potential Portfolio Case Studies

These are candidates, not rankings.

## Case Study A — Homelab Behind CGNAT

**Theme:** Running useful Internet-accessible services from home without a VPS.

Technologies:
- Ubuntu
- Docker
- Cloudflare Tunnel
- Tailscale
- DNS
- CGNAT

## Case Study B — Public ownCloud Deployment

**Theme:** Running ownCloud Infinite Scale with public access while troubleshooting container networking and TLS/origin behavior.

Technologies:
- ownCloud Infinite Scale
- Docker
- Cloudflare
- Tailscale
- WebDAV
- TLS

## Case Study C — MQTT Media Control

**Theme:** Connecting Home Assistant to desktop browser media playback through MQTT and MPRIS.

Technologies:
- Home Assistant
- Mosquitto
- MQTT
- Node.js
- `playerctl`
- MPRIS
- Linux

## Case Study D — Multi-Host Docker Homelab

**Theme:** Managing multiple Docker hosts as one personal infrastructure environment.

Technologies:
- Docker
- Dockhand
- Hawser
- LAN networking
- authentication
- Compose

## Case Study E — Local AI Infrastructure

**Theme:** Running and integrating local AI models into a personal automation environment.

Technologies:
- Ollama
- Open WebUI
- Home Assistant
- Docker
- GPU/CPU inference

## Case Study F — Containerized Onion Service

**Theme:** Hosting an onion service in an isolated container and experimenting with SOCKS5 proxying.

Technologies:
- Tor
- Docker
- SOCKS5
- Linux networking

## Case Study G — ESP32 + Mobile Hotspot IoT

**Theme:** Using an Android phone as the network bridge for an ESP32 deployed in a vehicle/bike environment.

Status: experimental / incomplete.

---

# 18. Portfolio Voice

The portfolio should sound like a real engineer, not a corporate marketing page.

Preferred characteristics:
- direct
- technically specific
- practical
- honest about tradeoffs
- comfortable discussing failures and debugging
- avoids inflated claims
- demonstrates competence through concrete examples
- personable without becoming unprofessional

Desired identity:

> **A serious software engineer who happens to have a ridiculous homelab.**

The site can combine a polished professional portfolio with the personality and depth of a technical lab notebook/blog.

A useful recurring structure:

> **Problem → Constraints → Investigation → Implementation → Result → Lessons**

The site should avoid claiming expertise merely because a technology appears in a Docker Compose file.

---

# 19. Information That Still Needs Confirmation

The following should be answered before the portfolio agent turns this source into final public claims.

## Career

1. What is your exact current job title?
2. What company do you currently work for?
3. When did you start there?
4. What does your day-to-day work actually involve?
5. What products/systems do you work on?
6. How much of your work is Java/Spring, databases, Kafka, frontend, DevOps, etc.?
7. What are 3–5 projects/features at work that you are proud of?
8. Which professional projects can be publicly described?
9. Are there technologies you use professionally that are missing from this document?
10. What seniority level do you want the portfolio to communicate?

## Professional Achievements

11. What is the most difficult production bug you've solved?
12. What is the largest system or feature you've personally owned?
13. Have you improved performance, reliability, deployment time, developer experience, or operational cost? By how much?
14. Have you designed anything from scratch?
15. Have you mentored teammates, reviewed code, written technical documentation, or led technical decisions?

## Backend / Distributed Systems

16. Tell me the Kafka problem you previously worked through: what happened, what did you discover, and what fixed it?
17. What databases do you actually use professionally?
18. What APIs/protocols do you work with regularly?
19. Do you work with authentication/authorization, queues, caching, scheduled jobs, or event-driven architecture?
20. What Java/Spring technologies do you use most?

## Homelab

21. What is the single most impressive thing you've built in the homelab?
22. What service do you rely on most?
23. What homelab project took the most debugging?
24. What have you built yourself rather than merely deployed from a Docker image?
25. Do you maintain your Compose files/configuration in Git?
26. Do you have backups/disaster-recovery procedures?
27. How do you monitor the server?
28. How do you update/patch containers?
29. Do you have any custom DNS, routing, firewall, or VLAN setup worth documenting?
30. What is the current public/private network architecture?

## Custom Software

31. List the scripts/services you've personally written for the homelab.
32. What languages are they written in?
33. Which one would make the best standalone GitHub project?
34. Are there GitHub repositories you want featured?

## Home Automation / IoT

35. What Home Assistant automations are genuinely interesting enough for a portfolio?
36. What does your MQTT architecture look like?
37. Have you designed MQTT topic structures yourself?
38. What is the intended ESP32/car/bike project?
39. Are there other ESP32/Arduino/electronics projects?

## AI

40. What do you actually use Ollama for today?
41. Which models/workflows have been useful?
42. What are you experimenting with using OpenClaw or other agents?
43. Do you want AI to be a major part of your professional identity or simply one technical interest?

## Web / Portfolio

44. What do you want visitors to do after seeing the portfolio?
45. Are you looking for employment, freelance work, consulting, or primarily a technical showcase?
46. Do you want the site to feel more like a developer portfolio, engineering blog, personal lab notebook, or a hybrid?
47. What visual style do you want?
48. Do you want the homelab architecture exposed publicly, partially documented, or mostly kept behind the scenes?
49. Do you want project source code linked directly?
50. Do you want technical writeups to be written as tutorials, incident reports, build logs, or informal notes?

---

# 20. Sensitive / Private Information Policy for the Portfolio Agent

Do **not** publish:
- private credentials
- tokens
- private IP addresses
- exact internal hostnames where unnecessary
- VPN/authentication secrets
- personal financial information
- private family information
- private employer information unless explicitly approved
- proprietary source code or confidential architecture
- infrastructure details that materially weaken security

Use sanitized examples such as:
- `server.example.com`
- `10.x.x.x`
- `<internal-service>`
- `<company-project>`

The goal is to demonstrate engineering ability without publishing an attack map of the homelab.

---

# 21. Portfolio Content Principle

The strongest story is not:

> "I know Docker, Linux, Java, MQTT, and Kubernetes."

It is:

> "I build systems, run them, break them, debug them, and improve them."

The portfolio should use the technologies as evidence supporting that story.

---

# 22. Known Unknowns

The source document intentionally does not invent:
- exact job history
- exact job title
- employer names
- employment dates
- salary
- professional project metrics
- public GitHub repositories
- exact current Docker service inventory
- exact Kubernetes architecture
- exact Cloudflare/DNS architecture
- exact backup strategy
- exact monitoring/alerting strategy
- exact security model
- exact portfolio design
- future project status

These should be filled in from the user's answers before an AI agent treats them as authoritative.


## Remaining Questions for the Portfolio Agent

### Career
1. What were the names/titles of the earlier web-development roles, if you want them listed?
2. What years did you work on the logistics platform?
3. What other employers/projects from the 13-year career are worth including?
4. Are there major school/freelance projects worth mentioning?

### Current Work
5. How do your services communicate with each other besides Kafka/MQTT?
6. Do you write unit/integration tests?
7. What CI/CD tooling does the team use?
8. What does deployment look like?
9. Do you participate in code reviews?
10. Do you interact directly with the banking client?
11. Approximately how many engineers are on your team?

### Kafka Case Study
12. Was aggregation implemented as a Kafka consumer, intermediary service, stream-processing component, or something else?
13. How were messages grouped/batched?
14. Was ordering important?
15. What happened if processing failed?
16. What parts of the implementation did you personally touch?
17. Are there non-sensitive implementation details that can be described publicly?

### Previous Experience
18. What technologies were used in the logistics platform?
19. What technologies were used in the laundromat POS?
20. Were either of those systems built substantially by you?
21. What other previous project deserves a place on the portfolio?

### Homelab
25. Which 3–5 deployed services are worth writing case studies about?
26. What is the most painful homelab problem you've debugged?
27. What's the most useful automation you've built?
28. What's the most ridiculous/interesting thing you've made the homelab do?
29. What infrastructure project are you currently working on?
30. What infrastructure project do you want to build next?

### Writing / Personality
31. Do you want your real name and a photo prominently displayed?
32. Do you want the site to mention that you're in the Philippines?
33. Do you want personal interests represented?
34. How much profanity/humor is acceptable in technical writing?
35. Should posts read more like polished tutorials or honest "here's what broke" writeups?

### Site
36. Do you want a résumé/CV page?
37. Do you want a downloadable PDF résumé?
38. Contact form, email link, or both?
39. Public homelab status page?
40. Public architecture diagram?
41. Will you eventually create public GitHub repositories specifically for the portfolio?

## Publication Safety

For professional projects, default to anonymized descriptions such as **"a banking client"** unless disclosure is explicitly approved. Never publish credentials, tokens, private IPs, internal URLs, proprietary source code, confidential architecture, or client-specific data.

## Source-of-Truth Rules for an AI Portfolio Agent

1. Treat explicit facts in this document as authoritative.
2. Treat `TBD` as unknown; never invent it.
3. Do not turn a deployed open-source service into a claim that Mark wrote it.
4. Distinguish professional experience from homelab experimentation.
5. Do not claim production experience with a technology merely because it appears in the homelab.
6. Do not invent performance metrics.
7. Do not invent employer/client names.
8. Do not expose private infrastructure details.
9. Prefer concrete engineering stories over keyword-heavy résumé language.
10. When information is missing, ask Mark rather than filling the gap with assumptions.
11. Use **Problem → Constraints → Investigation → Implementation → Result → Lessons** for case studies.
12. Communicate engineering ability through evidence rather than inflated claims.

## Current Professional Summary

Mark Maske is a software engineer with approximately 13 years of professional development experience, beginning in web development and specializing in backend systems, business-process digitization, and automation. He currently works on backend and integration systems for a banking technology client, building and customizing reusable microservice templates, data services, and event-driven processing pipelines. His professional stack includes Java, JavaScript, PostgreSQL, Kafka, MQTT, Docker, Bash, Makefiles, HTML, CSS, and Git, with some Spring Boot use. Earlier work includes a multi-module logistics operations platform covering HR/payroll, maritime and trucking operations, accounting/finance, and purchasing. He also maintains a point-of-sale system for his family's laundromat, covering customers, wash/dry sales, payments, staff shifts, and inventory. Outside work, he maintains a Docker-based homelab as a practical engineering playground for hosting, deployment, automation, networking, local AI, messaging, and self-hosted services. The homelab is less about building every application from scratch and more about learning how to deploy, integrate, operate, troubleshoot, and maintain real systems under real resource constraints.
