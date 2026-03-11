import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Patriot Stuff | American Made. Patriot Proud.",
  description: "Shop patriot merchandise, apparel, and gifts. Veteran-friendly, American-made designs shipped nationwide.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇺🇸</text></svg>"
  },
  openGraph: {
    title: "Patriot Stuff | American Made. Patriot Proud.",
    description: "Shop patriot merchandise, apparel, and gifts. Veteran-friendly, American-made designs shipped nationwide.",
    url: "https://patriot-stuff.com",
    siteName: "Patriot Stuff",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <body className="font-body bg-patriot-cream text-patriot-navy antialiased">
        {/* TODO: Add Google Analytics GA4 script here */}
        {children}
      </body>
    </html>
  );
}
