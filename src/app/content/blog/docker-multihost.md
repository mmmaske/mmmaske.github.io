---
title: "Managing Two Docker Hosts as One Infrastructure Environment"
date: "2026-07-20"
tags: ["Docker", "Dockhand", "Hawser", "LAN"]
---

## The Goal

Manage multiple Docker hosts as a single personal infrastructure environment. Two machines, ~45 total containers, one management plane.

## The Setup

- **not-a-server**: ~32 containers, runs Dockhand, hosts the majority of infrastructure
- **not-a-workstation**: ~13 containers, development machine and second infrastructure node
- **Dockhand**: Container management interface running on not-a-server
- **Hawser Standard**: Connects Dockhand to not-a-workstation over the LAN

## What I Tried

Configured Dockhand as the management plane with Hawser Standard handling remote Docker administration on the second host. Set up authentication between management components.

## What Broke

- Authentication between Dockhand and Hawser required careful configuration
- Network connectivity for remote Docker access needed specific firewall rules
- Service discovery across hosts was not automatic

## The Fix

Established authenticated Hawser connections, configured proper network rules, and documented which services run on which host.

## What I Learned

Multi-host Docker management creates a practical architecture with real tradeoffs. Authentication between management components is critical. Knowing which service runs where matters when troubleshooting.
