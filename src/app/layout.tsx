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
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold tracking-tight text-teal-600">
              BUBONA
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="/shop" className="hover:text-teal-600">Shop</a>
              <CartBadge />
              <a href="/lookbook" className="hover:text-teal-600">Lookbook</a>
              <a href="/about" className="hover:text-teal-600">About</a>
              <a href="/token" className="hover:text-teal-600">Token</a>
            </nav>
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