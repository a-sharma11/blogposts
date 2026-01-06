---
layout: post
title: "Break Functional and Orchestration Responsibilities for Better Testability"
date: 2019-04-10 10:00:00 -0000
categories: microservices
---

Microservices follow Unix's first principle: **"Make one program do one thing well."** We create small services, each with its own identity and CI/CD pipeline. This gives us loose coupling and faster delivery.

But here's the thing: in reality, workflows often span multiple services. And that's where testing gets tricky.

## The Common Problem

Let's say you have a workflow that spans three services:

<div style="text-align: center; margin: 2rem 0;">
  <img src="{{ '/assets/diagrams/microservices-workflow.svg' | relative_url }}" alt="Microservices Workflow Diagram" style="max-width: 100%; height: auto; border-radius: var(--radius-md);"/>
</div>

Service-1 receives the request, gets data from dependencies, runs business logic, produces intermediate result #A, then calls Service-2. Service-2 does the same and calls Service-3. Finally, Service-3 returns the final response #C.

This is probably the most common pattern in microservices. And from a high level, there's nothing wrong with it. But let's talk about testing.

## The Testing Problem

Say your team owns Service-1, and you want to write component tests to test it in isolation. What should you actually test?

Is it the final output #C? **No!** #C comes from a downstream service. To test Service-1, you should test #A—the intermediate result that Service-1 produces.

But here's the problem: #A isn't the output of Service-1. It's an intermediate state that gets passed to Service-2. If you're asserting on #C, you're not really testing Service-1. You're testing the entire workflow.

This breaks the AAA paradigm (Arrange, Act, Assert) that we all know how to work with. We know how to test outputs, but when the important thing isn't the output, testing becomes messy.

## What Unix Teaches Us

Unix's second principle says: **"Expect the output of every program to become input to another, as yet unknown, program."**

Think about this command:

```bash
ls -a | grep "gear"
```

Here, `ls` lists directories and outputs them. That output becomes input to `grep`, which filters for "gear". 

**Whose responsibility is it to pass data from `ls` to `grep`?**

It's not `ls`'s responsibility. `ls` just produces a list of directory names—that's its job. The pipe command (`|`) handles the orchestration.

If Team-A owns `ls` and Team-B owns `grep`, they can test their programs independently because each returns the most important thing it does as **output**. Then we can apply the AAA paradigm.

## The Solution: Separate Concerns

When Service-1 orchestrates the workflow by making mutating calls to Service-2, we make Service-1 less testable. We lose #A because it's not the output, and we can't test the service in isolation.

**Break functional and orchestration responsibilities for better testability.**

### Functional Services

A functional service should:
- Take an input request
- Talk to dependencies to **GET** data (not mutate)
- Run business logic
- Produce a result
- Use its own data store if needed
- **Return the result back to the caller**

What it should **not** do: orchestrate the workflow.

### Orchestration Services

Move orchestration into a separate service using:
- **Choreographer model**: A dedicated service coordinates the workflow
- **Event-based**: Services read from queues and publish events

Here are the two main approaches:

<div style="text-align: center; margin: 2rem 0;">
  <img src="{{ '/assets/diagrams/orchestration-models.svg' | relative_url }}" alt="Orchestration Models: Choreographer vs Event-based" style="max-width: 100%; height: auto; border-radius: var(--radius-md);"/>
</div>

## The Benefits

When you separate these concerns:

1. **Functional services are much more testable** in isolation. They fit perfectly within the Testing Pyramid—you can run lots of tests locally, quickly, without overhead.

2. **Orchestration services are light on business logic**, which also makes them easier to test.

3. **Keeps your integration test suite small**. We all know integration tests can be slow and unreliable. This helps keep your CD pipelines fast.

4. **More confidence in the overall workflow** because individual services have been tested thoroughly.

## The Bottom Line

Just like Unix programs, microservices should do one thing well and return their most important work as output. When you separate functional responsibilities from orchestration, testing becomes straightforward, and you can move faster with confidence.

It's not about making things more complex—it's about making them simpler to test and maintain.

