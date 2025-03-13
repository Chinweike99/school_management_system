import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Studentpage from "./students/page";
// import "../../../src/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex`}
      >
        {/* Dashboard {children} */}

        {/* LEFT */}
        <div>Left</div>
        <Studentpage />

        {/* RIGHT */}
        <div>RIght</div>
      </body>
    </html>
  );
}
