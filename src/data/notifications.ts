import type { Notification } from "../types";

export const notificationsData: Notification[] = [
  {
    id: "1",
    type: "message",
    title: "Sarah Connor",
    body: "Hey, can you review the PR I just opened?",
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    read: false,
    avatarUrl: "https://i.pravatar.cc/40?u=sarah",
  },
  {
    id: "2",
    type: "mention",

    title: "Design Review",
    body: 'You were mentioned in #design-review: "Can we get @you to weigh in?"',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    read: false,
    avatarUrl: "https://i.pravatar.cc/40?u=design",
  },
  {
    id: "3",
    type: "system",
    title: "Deployment Complete",
    body: "v2.4.1 has been deployed to production successfully.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    read: true,
  },
  {
    id: "4",
    type: "alert",
    title: "CI Pipeline Failed",
    body: "Build #1847 failed on main. 2 test suites did not pass.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    read: false,
  },
  {
    id: "5",
    type: "message",
    title: "Jordan Lee",
    body: "Lunch at 12:30?",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    read: true,
    avatarUrl: "https://i.pravatar.cc/40?u=jordan",
  },
];
