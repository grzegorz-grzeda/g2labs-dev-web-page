---
title: "Agentic Coding In Embedded Firmware: Where It Pays Off And Where It Does Not"
excerpt: "AI agents can now work across a whole Zephyr codebase, not just complete a line. In firmware that is useful, as long as the hardware stays the final reviewer."
publishDate: 2026-10-27
tags:
  - ai
  - embedded
  - zephyr
  - workflow
draft: false
---

Earlier this year I wrote about [using AI without losing engineering rigor](/blog/using-ai-with-engineering-rigor/). Since then the tooling has moved from autocomplete to agents: tools that read the repository, run the build, read the errors, and iterate on their own.

I now use that workflow daily on Zephyr-based firmware. Here is where it actually helps, and where it still does not.

## Where agents pay off

**Navigating a large tree.** A Zephyr application pulls in the kernel, the networking stack, vendor HALs, devicetree, and Kconfig. An agent that can search all of it and explain how a symbol, a binding, or an option flows through the build saves hours of manual tracing.

**The build loop.** Kconfig dependencies, devicetree overlays, and linker errors are tedious but well-defined. An agent that runs `west build`, reads the failure, and proposes the fix is genuinely faster than doing it by hand.

**Glue and tooling.** Host-side scripts, test harnesses, log parsers, provisioning helpers, and CI configuration around the firmware are exactly the kind of code that is valuable, necessary, and rarely anyone's priority.

**Documentation and review.** Asking an agent to explain a change set, find the paths that skip error handling, or write the design note for a module produces a useful first draft and catches things a tired reviewer misses.

## Where it does not

**Timing, power, and radio behavior.** None of these are visible in the source code. An agent cannot see a current trace, a logic analyzer capture, or what the mesh does when a node reboots in the middle of a commissioning flow. The device is the reviewer, and someone has to put it on the bench.

**Security decisions.** Key storage, certificate handling, transport security, and update signing are design choices with long consequences. An agent can implement a decision well. It should not be the one making it.

**Plausible but wrong API usage.** RTOS and vendor APIs change between releases. Code that compiles and looks idiomatic can still use a deprecated call, hold a lock in the wrong context, or quietly allocate in an interrupt handler. That is why every change still gets read.

## The workflow that works

- The engineer owns the architecture, the interfaces, and the security model. The agent works inside them.
- Changes are small and reviewable, and each one is built and run on real hardware before it is trusted.
- Tests, static analysis, and CI are the agent's guard rails, not an afterthought.
- Every merged line has a human who understands it and can defend it.

Used that way, agentic coding does not replace firmware engineering. It removes a large share of the mechanical work around it, which leaves more time for the parts that actually decide whether a device ships: measurement, integration, and judgment.
