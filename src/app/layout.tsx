import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/header";

export const metadata: Metadata = {
  title: "Meet Up",
  description: "Meeting scheduling app",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
