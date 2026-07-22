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
  title: "Yashkumar Shah — Design Lead, Fire Protection",
  description:
    "Fire protection design for the buildings that should not burn. Design Lead, Fire Protection at Writech Industrial Services with 9+ years across hyperscale data centres, healthcare, aviation and commercial developments in Europe and the US.",
  metadataBase: new URL("https://yashkumarshah.com"),
  openGraph: {
    title: "Yashkumar Shah — Design Lead, Fire Protection",
    description:
      "Fire protection design for the buildings that should not burn. Ireland-based, working across Europe and the US.",
    url: "https://yashkumarshah.com",
    siteName: "Yashkumar Shah",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/headshot.webp",
        width: 1024,
        height: 1024,
        alt: "Portrait of Yashkumar Shah, Design Lead — Fire Protection at Writech Industrial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashkumar Shah — Design Lead, Fire Protection",
    description:
      "Fire protection design for the buildings that should not burn. Ireland-based, working across Europe and the US.",
    images: ["/headshot.webp"],
  },
};

// Pre-hydration theme bootstrap. Runs synchronously in <head> before any
// paint so the correct light/dark palette is applied on first render.
// Precedence: localStorage.hsTheme > OS prefers-color-scheme > light as
// the site's default landing state (per client). Kept in lockstep with
// the runtime rule in ThemeToggle so both agree on first paint.
const THEME_BOOTSTRAP = `
(function(){
  try {
    var stored = localStorage.getItem('hsTheme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // The pre-hydration script below writes `data-theme` on this
      // element before React hydrates, so its attributes drift from
      // the SSR-rendered HTML. suppressHydrationWarning silences the
      // mismatch on this element only (attributes, not children).
      suppressHydrationWarning
      className={`${plexSerif.variable} ${plexSans.variable} ${plexMono.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
      </head>
      {/* Base bg/text come from globals.css (Hyperscale palette).
          Draft directions under /preview get their ivory-paper backdrop
          from src/app/preview/layout.tsx. */}
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
