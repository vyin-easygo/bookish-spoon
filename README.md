# Notification Feed – Pair Programming Exercise

Welcome! In this session you'll build a `<NotificationFeed />` component from scratch.

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

> **Environment:** React + TypeScript. If you prefer a different setup, let your interviewer know.

## The Brief

Build a **Product Grade** `<NotificationFeed />` component that:

1. **Renders a list of notifications**, visually distinguishing between read and unread items
2. **Displays each notification** with its type icon/indicator, title, body, relative timestamp (e.g. "5 min ago"), and avatar when available
3. **Allows the user to mark a single notification as read** by clicking on it
4. **Supports an `onNotificationClick(id: string)` callback prop** so the parent can respond to interactions

## Data Shape

```ts
type Notification = {
  id: string;
  type: "message" | "mention" | "system" | "alert";
  title: string;
  body: string;
  timestamp: string; // ISO 8601
  read: boolean;
  avatarUrl?: string; // present for message/mention, absent for system/alert
};
```

## Starter Data

A set of sample notifications is provided in `src/data/notifications.ts`. Use this as your data source.

## Ground Rules

- **AI tools are welcome.** Copilot, ChatGPT, whatever matches your normal workflow. However only in Ask mode and not agent mode. Inline auto completes have been disabled.
- **Libraries are welcome.** Install anything you'd reach for in a real project. Just be ready to explain why.
- **There is no design file.** Use your judgment — we care about structure and decisions more than pixel polish.
- **Think aloud.** We want to understand your reasoning, not just the output.

## What We're Looking For

- A production level working component that meets the requirements above
- Clean, readable, well-typed code
- Reasonable component structure
- Your thought process and the decisions you make along the way

Good luck — have fun with it.
