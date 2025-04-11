import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { bodyFont, displayFont } from "@/lib/fonts";
import { MainLayout } from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "YUYA – Minimalistic Portfolio for Creatives",
  description: "Minimalist portfolio template designed for creatives, designers, developers, and other professionals who appreciate simplicity, elegance, and intuitive design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <ClientBody>
        <MainLayout>{children}</MainLayout>
      </ClientBody>
    </html>
  );
}
