---
title: "Running a Personal Cloud Behind CGNAT with Docker, Tailscale and Cloudflare Tunnel"
date: "2026-09-01"
tags: ["CGNAT", "Cloudflare Tunnel", "Tailscale", "Docker", "ownCloud"]
---

## The Problem

I wanted to run useful Internet-accessible services from home without renting a VPS. My ISP uses CGNAT, which means traditional port forwarding is unavailable. This is a real constraint that shapes every infrastructure decision.

## The Approach

The setup uses three layers:

1. **Cloudflare Tunnel** for public access to selected services
2. **Tailscale** for private/LAN access to internal services
3. **Docker** for containerized service deployment

The goal is a public cloud endpoint under my own domain while maintaining appropriate private access.

## What I Tried

I configured Cloudflare Tunnel as the public entry point, set up Tailscale for the private network, used DNS for domain routing, and ran ownCloud Infinite Scale in Docker with proper networking configuration.

## What Broke

- Origin protocol behavior caused certificate validation failures
- Container hostname vs IP addressing created connectivity issues
- Public share links behaved incorrectly
- WebDAV configuration required specific origin setup

## The Fix

Resolved origin certificate validation by configuring proper TLS termination. Recreated public shares after fixing link behavior. Established a clear separation between public and private access paths.

## What I Learned

CGNAT workarounds with Cloudflare Tunnel are reliable and practical for self-hosting without a VPS. The key insight: keep public services and private infrastructure segregated.
