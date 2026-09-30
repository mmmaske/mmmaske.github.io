---
title: "I Put MQTT Between My Desktop and Home Assistant. Here's What Happened."
date: "2026-08-15"
tags: ["MQTT", "Home Assistant", "Node.js", "MPRIS", "playerctl"]
---

## The Goal

Connect Home Assistant to desktop browser media playback using MQTT as the communication layer.

## The Architecture

The custom bridge connects:
- Home Assistant
- MQTT (Eclipse Mosquitto)
- The workstation
- Browser media playback
- MPRIS / playerctl

## What I Tried

Built a Node.js-based bridge that subscribes to MQTT topics for media commands and translates them into MPRIS actions on the workstation. The other direction reads browser media status and publishes it to MQTT for Home Assistant automation.

## What Broke

- MPRIS player detection was unreliable with multiple media players running
- MQTT message ordering for rapid control changes got out of sync
- Browser tab needed to be active for MPRIS to report status

## The Fix

Added message debouncing on the MQTT side and explicit state synchronization on connection. Made player detection iterate through available MPRIS endpoints.

## What I Learned

MQTT is excellent for device/control bridges. The asynchronous messaging model handles intermittent connectivity well. But state synchronization requires explicit design.
