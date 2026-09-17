import type { ReactNode } from "react";

export type ContactIconName =
  | "add" | "analytics" | "bell" | "calendar" | "contacts"
  | "dashboard" | "delete" | "download" | "edit" | "help"
  | "menu" | "search" | "settings" | "tasks";

const paths: Record<ContactIconName, ReactNode> = {
  add: <path d="M12 5v14M5 12h14" />,
  analytics: <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
  contacts: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  dashboard: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  delete: <><path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6" /></>,
  download: <path d="M12 3v12m-5-5 5 5 5-5M5 21h14" />,
  edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.7 2.2c-.8.45-1.2.8-1.2 1.8M12 17h.01" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.5 1a8 8 0 0 0-1.7-1L14.4 3h-4.8l-.4 3a8 8 0 0 0-1.7 1L5 6 3 9.5 5.1 11a7 7 0 0 0 0 2L3 14.5 5 18l2.5-1a8 8 0 0 0 1.7 1l.4 3h4.8l.4-3a8 8 0 0 0 1.7-1l2.5 1 2-3.5-2.1-1.5a7 7 0 0 0 .1-1Z" /></>,
  tasks: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="m8 12 2 2 5-5" /></>,
};

export function ContactIcon({ name, className = "h-5 w-5" }: { name: ContactIconName; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
