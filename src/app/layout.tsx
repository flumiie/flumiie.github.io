import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/stywes/globals.scss";
import { Navbar } from "@/app/componyents";
import NoSSRWrapper from '@/app/wibs/noSSRWrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "flumi's",
  description: "Welcome to my stuffs :)",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NoSSRWrapper>
          <Navbar />
          {children}
        </NoSSRWrapper>
      </body>
    </html>
  );
}

export default RootLayout;