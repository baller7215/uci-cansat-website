import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Providers } from "./providers";


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
