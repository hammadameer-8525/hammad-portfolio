import type { Metadata } from "next";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Hammad Ameer | Software Engineering & AI Portfolio",
  description:
    "Portfolio of Hammad Ameer, a Software Engineering student at the University of Central Punjab specializing in Java, Python, AI, databases, and modern software development.",
  keywords: [
    "Hammad Ameer",
    "Software Engineer",
    "Software Engineering Student",
    "AI Portfolio",
    "University of Central Punjab",
    "Full Stack Developer",
  ],
  openGraph: {
    title: "Hammad Ameer | Software Engineering & AI Portfolio",
    description:
      "Software Engineering student building practical software and exploring intelligent systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammad Ameer | Software Engineering & AI Portfolio",
    description:
      "Software Engineering student building practical software and exploring intelligent systems.",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this rule targets the legacy Pages Router; loading fonts via a <link> in the App Router root layout is Next.js's documented pattern */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain antialiased bg-void text-text-primary">
        {children}
      </body>
    </html>
  );
}
