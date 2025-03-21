import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Studentpage from "./student/page";
import Link from "next/link";
import Menubar from "../components/Menubar";
import Navbar from "../components/Navbar";
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

    <div className="flex h-screen">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] border-1 border-gray-400">
        <Link href={"/"} className="flex justify-center items-center">
        <span className="lg:hidden sm:block">SM</span>
        <span className="hidden lg:block">School Management</span>
        </Link>
        <Menubar />
        
      </div>


      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#dee0e6] overflow-scroll p-3">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
