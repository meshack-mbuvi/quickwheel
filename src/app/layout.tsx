import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "./ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quick Wheel",
  description: "Quick Wheel is a car rental sole proprietor company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Quick Wheel Logistics | Car Rental in Nairobi</title>
        <meta
          name="description"
          content="Affordable, flexible car rental services in Nairobi, Kenya. Rent by the day or week with Quick Wheel Logistics."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://quickwheel.vercel.app" />
        <meta
          name="google-site-verification"
          content="lcnJNLzFtxXyk2lD_9oVwiH6JEf0-_IF6nggA8iYO3o"
        />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="Quick Wheel Logistics" />
        <meta
          property="og:description"
          content="Flexible car rentals in Nairobi"
        />
        <meta property="og:url" content="https://quickwheel.vercel.app" />
        <meta property="og:image" content="/preview-image.jpg" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
