import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clearsocial.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ClearSocial | Dance, Spoken Word and Electronic Soul",
    template: "%s | ClearSocial",
  },
  description:
    "ClearSocial is a music collective blending dance, spoken word, poetry, and electronic soul.",
  openGraph: {
    title: "ClearSocial",
    description:
      "Dance music, spoken word, and sensual electronic stories from the edge of the room.",
    url: siteUrl,
    siteName: "ClearSocial",
    images: [
      {
        url: "/images/hero-logo-atmosphere.jpg",
        width: 1200,
        height: 800,
        alt: "ClearSocial logo atmosphere",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
