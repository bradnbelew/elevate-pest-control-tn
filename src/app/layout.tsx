import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevate-pest-control-tn.vercel.app"),
  title: {
    default: "Elevate Pest Control Nashville TN | #1 Pest Exterminator",
    template: "%s | Elevate Pest Control Nashville TN",
  },
  description:
    "Nashville's top-rated pest control company. 100% guaranteed results, eco-friendly IPM, family & pet-safe treatments. 30% off first service. Call (615) 671-6933.",
  keywords: [
    "pest control Nashville TN",
    "exterminator Nashville",
    "pest control near me",
    "rodent control Nashville",
    "termite treatment Tennessee",
    "ant control Nashville",
    "bed bug treatment Nashville",
    "mosquito control Nashville",
    "commercial pest control Nashville",
    "eco-friendly pest control Tennessee",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Elevate Pest Control",
    title: "Elevate Pest Control Nashville TN | #1 Pest Exterminator",
    description:
      "Nashville's trusted pest control experts. 100% guaranteed, eco-friendly, family & pet-safe. Call (615) 671-6933 for a FREE inspection.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Pest Control Nashville TN",
    description:
      "Nashville's trusted pest control experts. 100% guaranteed, eco-friendly, family & pet-safe.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
