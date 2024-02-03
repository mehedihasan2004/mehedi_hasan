import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StarsCanvas } from "@/components/shared";
import { Navbar } from "@/components/shared/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehedi Hasan",
  description: "Mehedi Hasan's Portfolio",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] text-gray-200 max-w-[1444px] mx-auto overflow-x-hidden overflow-y-scroll border-l-2 border-r-2 border-blue-800`}
      >
        <StarsCanvas />
        <header />
        <main className="size-full relative">
          <Navbar />
          {children}
        </main>
        <footer />
      </body>
    </html>
  );
};

export default RootLayout;
