import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const segoeUI = localFont({
  src: [
    {
      path: "../../public/fonts/SegoeUI-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/SegoeUI-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/SegoeUI-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/SegoeUI.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-segoe",
});

export const metadata: Metadata = {
  title: "Sebarin",
  description: "Sebarin undangan digital dengan mudah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${segoeUI.variable}`}>{children}</body>
    </html>
  );
}
