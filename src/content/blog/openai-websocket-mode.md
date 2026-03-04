---
title: "OpenAI WebSocket Mode: The Secret to Ultra-Fast AI Agents"
description: "Discover how OpenAI's new WebSocket mode is transforming agentic loops by slashing latency and making multi-step reasoning 40% faster."
author: Lenin AGC
date: 2024-05-21 09:00:00
cover: /images/blog/post12_img0.png
categories: [AI, Infrastructure]
tags: [openai, websocket, agents, performance, development]
prev:
  text: "Agent Skills: Giving AI Agents a Memory for Tasks"
  link: "/blog/exploring-skills-sh"
next: false
---

Hey everyone! Hope you're all having a productive week. If you've been following my recent deep dives into AI agents, you know I'm obsessed with making them faster and more reliable. Today, I want to talk about a recent update from OpenAI that is a total game-changer for anyone building complex agentic loops: **WebSocket Mode**.

If you've ever built an AI agent that needs to make multiple tool calls in a row—think a coding assistant fixing a bug or an orchestrator planning a trip—you've probably felt the "lag." Every time the agent thinks, acts, and gets a result, there’s this overhead. OpenAI's new WebSocket mode specifically targets this pain point.

## Why WebSockets?

Traditional AI interactions happen over standard HTTP. It's simple, but it's stateless. This means every single turn in a conversation requires you to send the *entire* history back to the server. For a long-running agent with 20+ steps, that's a lot of redundant data flying back and forth.

**WebSocket Mode** changes the game by keeping a persistent, bidirectional connection open. OpenAI says this can make long-chain executions up to **40% faster**.

## How It Works (The Cool Stuff)

The magic lies in how it handles state. Instead of re-sending everything, the server keeps a "connection-local" cache. You just send the new bits—incremental inputs like a tool's output or the next user instruction—and reference the prior state using a `previous_response_id`.

Here is a quick look at what a `response.create` event looks like over a WebSocket:

```python
ws.send(json.dumps({
    "type": "response.create",
    "model": "gpt-4o", # Or the latest reasoning models
    "previous_response_id": "resp_123...",
    "input": [
        {
            "type": "function_call_output",
            "call_id": "call_abc...",
            "output": "Successfully fixed the bug!"
        }
    ]
}))
```

It’s cleaner, faster, and much more "agent-native."

## Key Takeaways for Developers

- **Lower Latency:** Drastic reduction in continuation overhead.
- **Stateful but Private:** The in-memory cache is ephemeral and works perfectly with `store=false` (Zero Data Retention) settings.
- **60-Minute Limit:** Connections stay alive for an hour, which is plenty for even the most complex tasks, but you'll need to handle reconnection logic.
- **Sequential Execution:** While it's bidirectional, it still processes responses one at a time per connection to maintain order.

## My Thoughts

I’m really excited about this because it shifts the focus from "how do we manage this massive prompt history" to "how can we make the agent loop feel instant." It pairs perfectly with things like **Agent Skills** (which I talked about [in my last post](/blog/exploring-skills-sh)) because it provides the high-performance infrastructure needed for those standardized capabilities to truly shine.

If you're building agents that do more than just answer simple questions, I’d highly recommend checking out the [official guide](https://developers.openai.com/api/docs/guides/websocket-mode).

What are you building with agents lately? Let me know!

Happy coding!
