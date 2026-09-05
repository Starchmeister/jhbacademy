import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jhbchristianacademy.co.za"),
  title: "JHB Christian Academy",
  description:
    "JHB Christian Academy — affordable, Christ-centered education from Grade R to Grade 12 in Johannesburg.",
  openGraph: {
    title: "JHB Christian Academy",
    description:
      "Affordable, Christ-centered education from Grade R to Grade 12 in Johannesburg. Admissions now open.",
    url: "/",
    siteName: "JHB Christian Academy",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JHB Christian Academy",
    description:
      "Affordable, Christ-centered education from Grade R to Grade 12 in Johannesburg. Admissions now open.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
        <ScrollReveal />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
