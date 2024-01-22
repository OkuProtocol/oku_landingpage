import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oku| Powered by M3tering Protocol",
  description: "payment infrastructure powered by M3tering Protocol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
