
import { Metadata } from "next";
import { siteConfig } from "@/app/lib/siteConfig";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/global.css";
import PostHogClientProvider from "@/app/components/PostHogClientProvider";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Navbar from "./ui/nav-bar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import SparkleTrail from "@/app/components/SparkleTrail";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} – Smart Money for Smart Spenders`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url), 
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SparkleTrail />
        <Navbar />
        <PostHogClientProvider />
        <GoogleAnalytics GA_ID="G-267Z40X0H3" />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
