import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { Suspense } from 'react'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ModuleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Suspense fallback={<p>Loading feed...</p>}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}
