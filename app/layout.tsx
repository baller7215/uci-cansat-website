import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Providers } from "./providers";
import { StickyBanner } from "@/components/ui/sticky-banner";


// TODO: RUN WHEN CACHING HAS ERRORS
// rm -rf .next
// npm run build



const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "UCI CanSat",
  description: "Design. Build. Launch. Compete",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* <StickyBanner className="bg-gradient-to-r from-[var(--color-rhino)] to-[var(--color-lightBlack)]">
          <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <p className="text-[var(--color-whiteIce)] text-center text-sm sm:text-base font-medium">
              Help UCI CanSat reach new heights by donating to our Zotfunder to fund materials, testing, and travel.
            </p>
            <a
              href="https://zotfunder.give.uci.edu/project/48727"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-4 py-1.5 sm:px-6 sm:py-2 rounded-full bg-[var(--color-orange)] text-[var(--color-whiteIce)] font-semibold text-sm sm:text-base hover:bg-[var(--color-orange)]/90 transition-colors duration-300"
            >
              Donate Now
            </a>
          </div>
        </StickyBanner> */}
        {/* {children} */}
        <main className='root'>
          {/* <Navbar /> */}
          <div className='root-container'>
            <Providers>
              <div className="wrapper">
                  { children }
                  <Analytics />
                  <SpeedInsights />
              </div>
            </Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
