export type Notification = {
  id: string;
  type: "message" | "mention" | "system" | "alert";
  title: string;
  body: string;
  timestamp: string;    // ISO 8601
  read: boolean;
  avatarUrl?: string;   // present for message/mention, absent for system/alert
};