import type { Metadata } from "next";
import { Space_Grotesk, Public_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "PATRIOT STUFF | Built for the Bold",
  description: "Patriotic gear, coffee, and lifestyle for those who never stopped believing in the mission.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇺🇸</text></svg>",
  },
  openGraph: {
    title: "PATRIOT STUFF | Built for the Bold",
    description: "Patriotic gear, coffee, and lifestyle for those who never stopped believing in the mission.",
    url: "https://patriot-stuff.com",
    siteName: "Patriot Stuff",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${publicSans.variable}`}>
      <body className="font-body bg-ps-bg text-ps-on-surface antialiased grain-overlay">
        {children}
      </body>
    </html>
  );
}
