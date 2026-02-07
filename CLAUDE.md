# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
# Install dependencies (using Bun, the configured package manager)
bun install

# Development server (localhost:3000)
bun run dev

# Production build
bun run build

# Run production server
bun run start

# Lint code
bun run lint
```

## Architecture Overview

This is a Next.js 16 application using the App Router pattern with React 19 and TypeScript.

**Key technologies:**
- Next.js 16 with App Router (not Pages Router)
- React 19 with Server Components by default
- Tailwind CSS v4 for styling
- TypeScript with strict mode enabled

**Project structure:**
- `app/` - Next.js App Router directory containing pages and layouts
- `public/` - Static assets served at root path

**Path aliases:** Use `@/` to import from the project root (e.g., `import { Component } from '@/app/components'`).

## Conventions

**Routing:** Files in `app/` directory define routes. `page.tsx` files render at their directory path, `layout.tsx` files wrap child routes.

**Styling:** Use Tailwind utility classes. Dark mode is supported via CSS variables and `prefers-color-scheme` media query.

**Components:** Server Components by default in the app directory. Add `'use client'` directive at the top of files that need client-side interactivity.
