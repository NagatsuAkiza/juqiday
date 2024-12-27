import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import PlayMusic from "@/components/PlayMusic";

const poppins = Poppins({ subsets: [], weight: ["100", "200", "300", "400", "500", "600"] });

export const metadata: Metadata = {
  icons: {
    icon: ["/favicon.ico"]
  },
  title: "Juqi Day 🎂",
  description: "Made by Akiza ❄️"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gradient-to-r from-green-400 via-green-500 to-green-600`}>
        <PlayMusic />
        {children}
      </body>
    </html>
  );
}
