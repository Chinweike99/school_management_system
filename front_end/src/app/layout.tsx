import type { Metadata } from "next";
import { Geist, Outfit, Afacad, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] }); // Adjust weights as needed
const afacad = Afacad({ subsets: ['latin'], weight: ['400', '700'] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
