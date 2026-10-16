import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CartBadge from "@/components/CartBadge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bubona | Heritage Meets Tomorrow",
  description: "Solana-funded clothing brand. Wear your story. Funded and developed on Solana via Bags.fm.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bubona",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#14b8a6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8faf9]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <a href="/" className="text-xl font-semibold tracking-[-0.06em] text-slate-950">BUBONA<span className="text-teal-600">.</span></a>
            <nav className="hidden items-center gap-7 text-sm font-medium md:flex"><a href="/shop" className="transition hover:text-teal-700">Shop</a><a href="/lookbook" className="transition hover:text-teal-700">Lookbook</a><a href="/about" className="transition hover:text-teal-700">About</a><a href="/token" className="transition hover:text-teal-700">Token</a></nav>
            <div className="flex items-center gap-4 text-sm font-medium"><CartBadge /><a href="/shop" className="rounded-full bg-slate-950 px-4 py-2 text-white transition hover:bg-teal-700">Shop now</a></div>
          </div>
        </header>
        {children}
        <footer className="border-t mt-16 py-8 text-center text-sm text-slate-500">
          © 2026 Bubona. Funded on Solana. Powered by Shopify + Solana Pay. · <a href="/policies" className="underline">Policies</a>
        </footer>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(console.error);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
