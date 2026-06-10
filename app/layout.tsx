import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gitadhora.com"),
  title: "drg. Gita Dhora | Dokter Gigi Umum Jakarta",
  description:
    "drg. Gita Dhora adalah dokter gigi umum profesional di Jakarta yang menyediakan perawatan gigi komprehensif: pemeriksaan, scaling, tambal gigi, cabut gigi, dan konsultasi kesehatan gigi & mulut.",
  keywords: [
    "dokter gigi Jakarta",
    "drg Gita Dhora",
    "klinik gigi Jakarta",
    "scaling gigi",
    "tambal gigi",
    "pemeriksaan gigi",
    "dokter gigi umum",
    "perawatan gigi Jakarta",
    "gigi sehat",
    "konsultasi gigi",
  ],
  authors: [{ name: "drg. Gita Dhora" }],
  creator: "drg. Gita Dhora",
  publisher: "drg. Gita Dhora",
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://gitadhora.com",
    siteName: "drg. Gita Dhora",
    title: "drg. Gita Dhora | Dokter Gigi Umum Jakarta",
    description:
      "Perawatan gigi yang nyaman, profesional, dan berorientasi pada kebutuhan setiap pasien. Tersedia layanan pemeriksaan, scaling, tambal gigi, dan konsultasi.",
    images: [
      {
        url: "/images/hero-dentist.png",
        width: 1200,
        height: 630,
        alt: "drg. Gita Dhora - Dokter Gigi Umum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "drg. Gita Dhora | Dokter Gigi Umum Jakarta",
    description:
      "Perawatan gigi yang nyaman, profesional, dan berorientasi pada kebutuhan setiap pasien.",
    images: ["/images/hero-dentist.png"],
  },
  alternates: {
    canonical: "https://gitadhora.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-[#FCFAFF] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
