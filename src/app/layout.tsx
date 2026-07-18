import type { Metadata } from "next";
import {
  IBM_Plex_Serif,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Playfair_Display,
  Inter,
} from "next/font/google";
import "./globals.css";

// Serif: display voice — engineering-editorial authority.
const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Sans: body — technical readability, IBM Plex Sans has engineering heritage.
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Mono: dimensional annotations, section markers, technical labels.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Playfair Display: editorial display serif for the Hyperscale direction.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Inter: modern sans, pairs with Playfair for the Hyperscale direction.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yashkumar Shah — Sr. Fire Protection Design Engineer",
  description:
    "Fire protection design for the buildings that shouldn't burn. Sr. Fire Protection Design Engineer with 9+ years across hyperscale data centres, healthcare, aviation and commercial developments in Europe and the US.",
  metadataBase: new URL("https://yashkumarshah.com"),
  openGraph: {
    title: "Yashkumar Shah — Sr. Fire Protection Design Engineer",
    description:
      "Fire protection design for the buildings that shouldn't burn. Ireland-based, working across Europe and the US.",
    url: "https://yashkumarshah.com",
    siteName: "Yashkumar Shah",
    type: "website",
    locale: "en_IE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSerif.variable} ${plexSans.variable} ${plexMono.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
