---
title: "OpenMemory: The Long-Term Memory Your AI Agents Actually Deserve"
description: "OpenMemory is a free, local, open-source cognitive memory engine that turns your AI agents from goldfish into assistants with real memory. Here's how I use it with MCP and OpenCode."
author: Lenin AGC
date: 2025-03-25 09:00:00
cover: /images/blog/post13_img0.png
categories: [AI, Development]
tags: [agents, memory, mcp, opencode, open-source, self-hosted, coding-tools]
prev:
  text: "OpenAI WebSocket Mode: The Secret to Ultra-Fast AI Agents"
  link: "/blog/openai-websocket-mode"
next: false
---

Hey everyone! Hope you're having a great week. If you've been following my recent posts on AI agents, you know I love finding tools that actually change how I work day-to-day. Today's one of those. I've been using **[OpenMemory](https://github.com/CaviraOSS/OpenMemory)** as the long-term memory layer for my agent workflows — specifically through [OpenCode](https://opencode.ai/) and MCP — and I want to walk you through why it's worth your attention.

The problem it solves is simple: LLMs forget everything between conversations. Every time you start a new chat, it's like meeting someone with total amnesia. And most so-called "memory solutions" aren't really memory — they're just RAG (Retrieval-Augmented Generation) with a fancy name.

OpenMemory is different.

## What is OpenMemory?

OpenMemory describes itself as a "cognitive memory engine" for LLMs and agents. It's not a vector database with marketing copy. It's an actual memory system, inspired by how the human brain organizes knowledge.

The key difference is that it understands *what kind of thing* you're remembering:

- **Episodic**: events that happened ("the user mentioned they prefer dark mode")
- **Semantic**: facts and knowledge ("Python is a programming language")
- **Procedural**: skills and processes ("to deploy, run `npm run build`")
- **Emotional**: detected feelings and tones
- **Reflective**: the agent's own insights and conclusions

On top of all that, it's **completely self-hosted and local-first**. You can run it with SQLite on your own machine without depending on any external service.

## Why RAG Isn't Enough

A typical RAG pipeline does this: take text, chunk it, embed it into a vector store, and retrieve by similarity. It works fine for Q&A over documents, but it doesn't understand:

- Whether something is a fact, a preference, or an event
- How recent or important the information is
- How it relates to other memories
- What was true at a specific point in time

OpenMemory handles all of that through its **Temporal Knowledge Graph**: every memory has `valid_from` and `valid_to` timestamps, so you can reason about "what was true three weeks ago?" instead of just "what's similar to this query?".

## Up and Running in 10 Seconds

Getting started with OpenMemory is surprisingly straightforward.

**Python:**

```bash
pip install openmemory-py
```

```python
from openmemory.client import Memory

mem = Memory()

# Store a memory
await mem.add("user is allergic to peanuts", user_id="u1")

# Search relevant memories
results = await mem.search("allergies", user_id="u1")
```

**Node / JavaScript:**

```bash
npm install openmemory-js
```

```javascript
import { Memory } from "openmemory-js"

const mem = new Memory()
await mem.add("user prefers short answers", { user_id: "u1" })
const results = await mem.search("preferences", { user_id: "u1" })
```

No cloud config, no third-party API keys, no waiting 3 seconds for a remote service to warm up. Just code.

## The Workflow I Actually Use: MCP + OpenCode

This is the part I want to focus on, because it's what I actually use day-to-day.

[OpenCode](https://opencode.ai/) is a terminal-based AI coding assistant that speaks MCP natively. OpenMemory ships its own MCP server, so you can connect the two with a few lines of config and suddenly your coding sessions have persistent memory — across projects, across restarts, across everything.

### Step 1: Start the OpenMemory server

If you're using the self-hosted backend (recommended for multi-session use):

```bash
# One-click deploy or run locally
docker run -p 8080:8080 caviraoss/openmemory-server
```

Or spin it up with the one-click deploy linked in the [GitHub repo](https://github.com/CaviraOSS/OpenMemory).

### Step 2: Wire it into OpenCode via MCP

In your OpenCode config (or any MCP-compatible client), add the OpenMemory server:

```json
{
  "mcpServers": {
    "openmemory": {
      "type": "remote",
      "url": "http://localhost:8080/mcp",
      "oauth": false,
      "headers": {
        "x-api-key": "your-secret-api-key-here"
      },
      "enabled": true
    }
  }
}
```

That's really it. From this point on, OpenCode can call these MCP tools automatically:

- `openmemory_store` — save something worth remembering
- `openmemory_query` — retrieve relevant context before a response
- `openmemory_get` — fetch a specific memory by ID
- `openmemory_reinforce` — signal that a memory is important and should decay slower
- `openmemory_list` — browse what's been stored

### The Memory-First Workflow

Here's the discipline I've settled on after using this daily. I codified it in my project's `AGENTS.md` so every AI agent that touches the repo follows the same pattern:

1. **Retrieve first** — before any non-trivial task, the agent queries OpenMemory for prior context: past decisions, unresolved issues, user preferences.
2. **Apply** — use those memories to avoid re-deciding things that were already settled in an earlier session.
3. **Persist** — after a decision or completed task, store a concise summary so the next session can pick up where you left off.
4. **Structure** — prefer factual memories for stable truths ("this project uses `pnpm`") and contextual memories for richer narrative ("we chose SQLite over Postgres because the deployment target is a single VPS").
5. **Sanitize** — never store secrets, credentials, tokens, or sensitive personal data.

This retrieve → apply → persist loop is the real power of OpenMemory. It turns your coding agent from something that starts from scratch every time into something that genuinely builds context over time.

### What This Looks Like in Practice

Let's say you tell OpenCode something like:

> "This project always uses `pnpm`, not `npm`. And we deploy to Vercel."

With OpenMemory connected, that gets stored as a semantic memory tied to your user context. Next session — different terminal, different day — when you ask OpenCode to help with a deploy command, it queries OpenMemory first and already knows your setup. No re-explaining.

In my case, I also store things like:
- project conventions and constraints
- architecture decisions and why they were made
- which commands to prefer and which to avoid
- task completion summaries so follow-up sessions have context
- bug root-cause discoveries so we don't re-investigate the same issues

I even have it as a rule in my `AGENTS.md`: if OpenMemory is unavailable, the agent should still proceed using the repo state and fresh investigation — but it should explicitly note the reduced context so future sessions can recover.

### Also Great With Claude and Other MCP Clients

The same `.mcp.json` config works for Claude Desktop, Cursor, and Windsurf. For Claude specifically:

```bash
claude mcp add --transport http openmemory http://localhost:8080/mcp
```

But honestly, the combo with OpenCode is where it shines for me — it's terminal-native, fast, and the memory layer makes it feel like a real pair programmer that actually pays attention.

## Other Integrations Worth Knowing

If you're not using OpenCode/MCP, OpenMemory also has first-class support for LangChain, CrewAI, AutoGen, and a direct OpenAI client wrapper. You can drop it into any of those as a shared long-term store with minimal setup. Check the [GitHub README](https://github.com/CaviraOSS/OpenMemory) for concrete examples.

## Pulling Data From Your Sources

Another feature I found really useful is the **Connectors**. You can ingest data from external sources directly into the agent's memory:

```python
github = mem.source("github")
await github.connect(token="ghp_...")
await github.ingest_all(repo="owner/repo")
```

Supported connectors include: GitHub, Notion, Google Drive, Google Sheets, Google Slides, OneDrive, and a generic web crawler. Perfect for giving an agent deep context about a codebase or knowledge base without having to write it out manually.

## Backing Up and Porting Your Memories

One thing that surprised me is how portable OpenMemory's data is. Under the hood it's just SQLite files sitting on a Docker volume. That means you can back them up, version them in your repo, and restore them on a different machine with a single `tar` command.

Here's the gist of how I do it:

**Create a backup** (read-only from the Docker volume):

```bash
mkdir -p docs/open-memories
docker run --rm \
  -v openmemory_openmemory_data:/source:ro \
  -v "$PWD/docs/open-memories":/backup \
  alpine sh -c 'cd /source && tar czf /backup/openmemory-backup-$(date +%Y%m%d-%H%M%S).tgz .'
```

**Restore on a new machine:**

```bash
docker run --rm \
  -v openmemory_openmemory_data:/target \
  -v "$PWD/docs/open-memories":/backup \
  alpine sh -c 'cd /target && tar xzf /backup/openmemory-backup-YYYYMMDD-HHMMSS.tgz'
```

I keep my latest backup committed to the repo so I can clone the project on any machine, run `docker compose up`, restore the memory snapshot, and my agent sessions continues right where they left off. It's like carrying your agent's brain in a tarball.

A few rules I follow:
- Always restore the **full** memory set — don't cherry-pick individual memories
- If the target already has memories, create a safety backup before overwriting
- If memories are missing after a restore, re-run the full restore before trying anything else

## Memory Hygiene: What Not to Store

This is important and easy to overlook. Since OpenMemory is so frictionless, it's tempting to just store everything. But you should be intentional about what goes in:

- ✅ **Store**: architecture decisions, user preferences, task summaries, bug root causes, project conventions
- ❌ **Never store**: API keys, tokens, passwords, payment details, personal data, or sensitive credentials

Memory is meant to supplement your repo's documentation — not replace it, and definitely not become a security liability. I explicitly enforce this in my `AGENTS.md` instructions so the AI agents themselves follow the same hygiene rules.

## The Numbers

If you're wondering whether it's worth it over a SaaS alternative, here's the comparison from the project:

| Metric | OpenMemory | Typical SaaS |
|---|---|---|
| Query latency | 110ms | ~350ms |
| Cost / 1M tokens | $0.35 | $2.50+ |
| Monthly cost | ~$6 | $90+ |
| Throughput | 40 ops/s | 10 ops/s |

**2-3x faster and 6-10x cheaper**. And your data never leaves your own infrastructure.

## My Thoughts

What I love most about OpenMemory is that it attacks the right problem. It's not just "store embeddings more efficiently" — it's a rethinking of how an agent should model knowledge, time, and the relative importance of information.

The **decay engine** is particularly clever: instead of just deleting old memories with a TTL, it simulates adaptive forgetting per sector. Episodic memories (events) decay faster than semantic ones (facts) — just like human memory works.

In practice, building the full loop — MCP config, memory-first retrieval, structured persistence, Docker backups, and hygiene rules — has completely changed how I interact with AI coding tools. It's the difference between an assistant that starts from zero every session and one that genuinely accumulates understanding of your codebase, your preferences, and your past decisions over time.

I've been running this stack for weeks now and I can't go back. The agent remembers my project patterns, knows my deploy targets, recalls why we made certain architecture choices, and picks up where it left off after a reboot. That's the promise of "AI that learns" — and OpenMemory actually delivers on it.

It's open-source, under active development (heads up: it's currently being rewritten into v2), and fully self-hostable. You can get started on [GitHub](https://github.com/CaviraOSS/OpenMemory) or check out the [landing page](https://openmemory.cavira.app/).

Are you using OpenCode or any MCP-compatible tool? Have you tried giving it persistent memory? I'd love to hear how you're setting things up.

Happy coding!
