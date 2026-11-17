import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans_Devanagari, Syne } from "next/font/google";
import { business } from "@/lib/business";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const notoHindi = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://harshchoicecenter.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0b1a16",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | चॉइस सेंटर · आधार, दस्तावेज़ व डिजिटल सेवाएँ | Laripara`,
    template: `%s | ${business.name}`,
  },
  description:
    "हर्ष चॉइस सेंटर, लारीपारा — आधार अपडेट, पैन, वोटर आईडी, प्रमाण पत्र, बिल भुगतान, प्रिंटिंग, मोबाइल रिपेयर और सभी चॉइस सेंटर सेवाएँ। फोन 070496 85265। रोज़ सुबह 6 – रात 8।",
  keywords: [
    "Harsh Choice Center",
    "हर्ष चॉइस सेंटर",
    "आधार अपडेट",
    "आधार कार्ड",
    "चॉइस सेंटर",
    "choice center Chhattisgarh",
    "पैन कार्ड",
    "राशन कार्ड",
    "बिल भुगतान",
    "Laripara",
    "Chherka B",
  ],
  authors: [{ name: business.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} — हर्ष चॉइस सेंटर, लारीपारा`,
    description:
      "आधार अपडेट, सरकारी दस्तावेज़, बिल भुगतान और सभी चॉइस सेंटर सेवाएँ। 45 मेन रोड, लारीपारा।",
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description:
      "आधार अपडेट, दस्तावेज़, बिल भुगतान और डिजिटल सेवाएँ — लारीपारा, छत्तीसगढ़।",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hi"
      className={`${manrope.variable} ${syne.variable} ${notoHindi.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
