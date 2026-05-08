import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { CoachDrawer } from "@/components/CoachDrawer";
import { CoachFab } from "@/components/CoachFab";

export const metadata: Metadata = {
  title: "烽峻提分技巧库",
  description: "大连 2026 中考冲刺。围绕分科提分技巧，每个技巧来自历年真题溯源。",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "烽峻",
  },
};

export const viewport: Viewport = {
  themeColor: "#5BC0BE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-paper text-ink-900 font-sans">
        <Nav />
        <main className="mx-auto max-w-3xl px-4 pb-24 pt-4 md:max-w-5xl md:pb-8 md:pt-8">
          {children}
        </main>
        <CoachFab />
        <CoachDrawer />
      </body>
    </html>
  );
}
