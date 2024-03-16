import type { Metadata } from "next";
import { Kosugi } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import { cn } from "@/lib/utils";

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
