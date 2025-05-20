import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        {children}
      </body>
    </html>
  );
}
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
export const metadata = {
  title: "Mint Mogul – Smart Money for Smart Spenders",
  description:
    "Discover financial tools, digital products, and tips built for high-level spenders and savvy earners.",
  openGraph: {
    title: "Mint Mogul",
    description: "Smart financial tools and digital assets for high spenders.",
    url: "https://mintmogul.com",
    siteName: "Mint Mogul",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mintmogul",
    creator: "@mintmogul",
  },
};
