import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrindTrack",
  description: "Training, coding, Quran, diet, and discipline tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
