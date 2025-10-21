import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Baby Bean Physical Therapy | Infant PT in Fort Mill, SC",
    template: "%s | Baby Bean Physical Therapy"
  },
  description: "Expert pediatric physical therapy for infants and babies in Fort Mill, SC and Charlotte Metro Area. Specializing in torticollis, plagiocephaly, developmental delays, and motor milestone support. Licensed therapist Jill Mathews provides gentle, evidence-based care.",
  icons:{
    icon: '/favicon.ico',
  },
  keywords: [
    "infant physical therapy",
    "pediatric physical therapy", 
    "baby physical therapy",
    "torticollis treatment",
    "plagiocephaly therapy",
    "flat head syndrome",
    "developmental delays",
    "motor milestones",
    "Fort Mill SC",
    "Tega Cay SC",
    "Charlotte NC",
    "Rock Hill SC",
    "Charlotte Metro Area",
    "Charlotte physical therapy",
    "baby development",
    "infant massage",
    "virtual visits",
    "home visits",
    "Jill Mathews"
  ],
  authors: [{ name: "Jill Mathews, DPT" }],
  creator: "Baby Bean Physical Therapy",
  publisher: "Baby Bean Physical Therapy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.babybeanpt.com'),
  alternates: {
    canonical: 'https://www.babybeanpt.com',
  },
  openGraph: {
    title: "Baby Bean Physical Therapy | Expert Infant PT Care",
    description: "Specialized physical therapy for babies. Expert treatment for torticollis, plagiocephaly, and developmental delays in Fort Mill, SC.",
    url: 'https://www.babybeanpt.com',
    siteName: 'Baby Bean Physical Therapy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/ma.jpg',
        width: 1200,
        height: 630,
        alt: 'Jill Mathews - Licensed Pediatric Physical Therapist',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baby Bean Physical Therapy | Expert Infant PT Care',
    description: 'Specialized physical therapy for babies in Fort Mill, SC and Charlotte Metro Area.',
    images: ['/ma.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_TOKEN,
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
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
