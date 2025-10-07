import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import tigerIcon from "./images/icon_tiger.png";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TIGERKON WEBSITE",
  // Use Next.js recommended metadata shape for icons. Point to files in the `public/` folder.
icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },              // từ public/favicon.ico
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",                       // từ public/apple-touch-icon.png
    shortcut: "/icon.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
