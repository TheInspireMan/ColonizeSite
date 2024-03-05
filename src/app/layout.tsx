import type { Metadata } from "next";
import "./globals.css";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Colonize",
  description: "Colonize",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>

      <footer className="flex bg-black text-white text-center py-4 justify-center items-center h-24 gap-5">
        <p>&copy; 2024 Colonize. All Rights Reserved.</p>
        <Link href="/"><FaYoutube className="w-6 h-6"/></Link>
    </footer>

    </html>
  );
}
