import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Follow-up Board",
  description: "Manage contacts, statuses, and follow-up dates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
