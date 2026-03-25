---
title: "Better Context, Less Chaos: How I Deal With LLM Nondeterminism"
description: "Reading Siddhant Khare's AI fatigue article made me question my own workflow. This is the approach I use to get less random output from LLMs."
author: Lenin AGC
date: 2026-03-25 10:00:00
cover: /images/blog/post14_img0.png
categories: [AI, Development]
tags: [llm, context-engineering, agents, openmemory, workflow, code-review]
prev:
  text: "OpenMemory: The Long-Term Memory Your AI Agents Actually Deserve"
  link: "/blog/openmemory-long-term-memory-for-ai-agents"
next: false
---

Hey everyone. I spent some time recently reading [AI fatigue is real and nobody talks about it](https://siddhantkhare.com/writing/ai-fatigue-is-real) by Siddhant Khare, and I thought it was a genuinely interesting read. A lot of it landed for me right away, especially the part about how using AI all day can leave you weirdly tired even when you're shipping more.

The section that stuck with me most was his point about the nondeterminism problem. Same prompt, same goal, different output. Any developer who uses LLMs daily has seen that. I have too.

But while I was reading it, I started questioning something else: how much of that pain comes from the model itself, and how much comes from the way I'm asking it to work?

That question changed a lot for me.

## Siddhant is right about the uncomfortable part

One thing I liked about Siddhant's article is that he doesn't pretend the problem is imaginary. When he talks about nondeterminism, he's pointing at something very real: LLMs do not behave like the systems we were trained to trust. You can get solid code from a prompt one day and a strange variation of the same thing the next day.

That's mentally expensive. It means you stay alert all the time. It means review never really goes away. It means you can't fully relax just because the code compiles.

I agree with that part.

Still, the article pushed me to look at my own workflow a little harder. I realized I had quietly picked up some bad habits. I was throwing huge amounts of context at the model. I was asking for code too early. I was treating a bigger context window like it automatically meant better understanding.

It doesn't.

## I don't think the model is the whole story

The model is probabilistic. That part is not going away. If you want the exact same output every single time, an LLM is the wrong tool.

But I also think a lot of "random" output is self-inflicted.

If the task is vague for me, it will be vague for the LLM too. If the scope is sloppy, the answer will drift. If the context is full of noise, stale decisions, unrelated files, or half-relevant notes, the model has to guess what matters. And once it starts guessing, you get the version of nondeterminism that feels the worst: not creative variation, just unnecessary chaos.

That was the part I kept coming back to after reading Siddhant's post. I wasn't just dealing with a nondeterministic system. I was often feeding that system messy inputs and then acting surprised when the output felt unstable.

## Better context beats bigger context

This is the biggest change I've made.

I don't want the largest context possible anymore. I want the best context possible.

For coding tasks, that means context that is curated, scoped, and easy for the model to use. I care less about dumping the whole repository into the conversation and more about giving the model the exact architecture, files, constraints, and past decisions that matter for the task in front of it.

This is where tools and structure start to matter. A code graph layer like `codegraphcontext` helps me pull the real relationships in a codebase instead of guessing from filenames. A memory layer like [OpenMemory](/blog/openmemory-long-term-memory-for-ai-agents) helps keep conventions, preferences, and previous decisions available across sessions. And the model itself still matters. For planning work, I use the best model I have access to, because saving money on the planning step usually costs me more later in rewrites.

The point is not to drown the model in information. The point is to hand it context that has already been filtered by someone who understands the problem. Usually, that someone is me.

## I split the work into two phases

This is the workflow shift that helped me the most: I separate `plan` from `create`.

Before, I would ask the model to solve and implement at the same time. That feels fast, but it hides ambiguity until it's already writing code. By then, the wrong assumption is expensive.

Now I break the process in two.

In the planning phase, I want the model to understand the goal, the boundaries, and the tradeoffs. I let it iterate here. I want pushback here. I want it to surface missing information here.

Only after the plan looks sharp do I move to creation.

This is roughly the template I use:

```md
Goal:
- What exactly needs to change?

Constraints:
- What must not change?
- What conventions already exist?
- What security, performance, or product rules matter?

Context:
- Which files, modules, and prior decisions are actually relevant?

Plan:
- What steps should happen first?
- What needs verification before code is written?

Validation:
- How will I know the result is correct?
```

That first phase does two things for me. First, it exposes whether the objective is actually clear. Second, it leaves the constraints written down in a form the model can use instead of inventing around.

I still iterate in the planning phase. That's fine. I'd rather spend ten extra minutes correcting a plan than spend forty minutes reviewing code built on the wrong assumptions.

## A smaller scope gives me better output

I have a pretty simple rule now: if a task feels ambiguous to me as the developer, I assume it will be ambiguous to the LLM too.

That sounds obvious, but it changed how I prompt. I ask for smaller units of work. I define what success looks like. I name the files or systems involved. I say what should stay untouched. I try to remove places where the model has to "fill in the blanks" with invented certainty.

This doesn't remove nondeterminism. What it does is reduce the useless part of it.

I still get variation. I still get answers I don't love. But I get far fewer surprises that come from the model making up a direction I never intended in the first place.

## Review is still part of the job

On this point, I think Siddhant is completely right. Review is not going away.

I don't believe in the fantasy version of AI coding where the model writes a pile of code and I just nod at the screen. If anything, the more AI I use, the more I care about review discipline. I still want to inspect the boundaries that matter: auth, error handling, state changes, data flow, hidden side effects, migration risk.

The win for me is not "I no longer review code." The win is "I review code that is less chaotic because the path to it was clearer."

That's a big difference.

## Where I landed after reading the article

Siddhant's post was useful for me because it made me stop and question the methodology I was using. I still think his main point is right: AI fatigue is real, and nondeterministic output is part of why working with LLMs can feel draining.

But my conclusion is a little different.

I don't think the answer is to hope the model becomes magically predictable. I think the better move is to improve the way we work with it. Better context. Curated context. A code graph when I need real structure. Memory when I need continuity. The best model I can justify for the planning step. And a clean split between planning and creation.

That combination has helped me get fewer weird outputs and much better results overall.

I still review the code. I still catch bad assumptions. I still get annoyed sometimes. But I no longer expect the model to rescue a vague task with messy inputs. That's a workflow problem, not just a model problem.

And honestly, reading that article helped me see that more clearly.

How are you dealing with nondeterministic LLM output in your own workflow?
