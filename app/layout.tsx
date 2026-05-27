import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Antonio, Inter_Tight } from "next/font/google";

const gelasio = localFont({
  src: "../public/fonts/Gelasio-VariableFont_wght.ttf",
  variable: "--font-gelasio",
});

const ibmPlexMono = localFont({
  src: [
    {
      path: "../public/fonts/IBMPlexMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IBMPlexMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IBMPlexMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-ibm-mono",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
});

export const metadata: Metadata = {
  title: "Basal Strength",
  description: "Diagnostic strength assessment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${antonio.variable} ${gelasio.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}