---
title: "vt100logging: Colored Python Logs Without Extra Framework Weight"
excerpt: "vt100logging is a small Python package that makes console logs easier to scan while staying close to the standard logging module."
publishDate: 2026-04-24
tags:
  - python
  - logging
  - tooling
draft: false
---

Not every useful engineering product needs to be large.

[vt100logging](/products/vt100logging) is a small Python package built around a narrow but recurring problem: standard console logs are functional, but they are not always easy to scan quickly during development, debugging, or internal tool work.

The package keeps the standard `logging` module in place and adds a simpler setup path with VT100-colored output, helper functions for common levels, and optional file logging when local persistence is useful.

That is a small surface area, but it reflects the same product preference visible across other G2Labs work:

- keep the scope tight,
- solve the real repeated problem,
- and avoid unnecessary framework weight when a thin, clear layer is enough.

Public package page: https://pypi.org/project/vt100logging/

Public source repository: https://github.com/g2labs-grzegorz-grzeda/vt100logging