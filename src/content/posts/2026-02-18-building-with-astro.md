---
title: "Building this site with Astro"
date: 2026-02-18
category: "learned"
tags: ["astro", "webdev", "static-sites"]
description: "Notes on setting up a digital garden with Astro's content collections."
---

Today I set up this digital garden using [Astro](https://astro.build). Here's what stood out:

## Content Collections

Astro's content collections let you define a schema for your markdown frontmatter using Zod. This means you get type-safe content with validation — if I forget a required field or use the wrong category name, the build fails with a clear error.

## Zero JavaScript by default

Astro ships zero JS to the client unless you explicitly add interactive components. For a content site like this, that means fast page loads out of the box.

## What's next

- Add more posts as I go through my week
- Maybe add a search feature later
- Deploy to Vercel
