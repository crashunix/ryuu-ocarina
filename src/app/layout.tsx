import type { Metadata } from "next";
import { Kosugi } from "next/font/google";
import "./globals.css";

const inter = Kosugi({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "龍",
  description: "Nextjs 3D project with spline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
