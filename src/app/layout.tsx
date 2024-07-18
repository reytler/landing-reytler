import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aulas de programação",
  description: "Aprenda a programar de forma descomplicada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
