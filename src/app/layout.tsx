import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fmd | Flyweight markdown editor",
  description: "A minimalistic yet battery included markdown editor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container">{children}</body>
    </html>
  );
}
