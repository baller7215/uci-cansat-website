import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";


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
      {/* <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </Head> */}
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* {children} */}
        <main className='root'>
          {/* <Navbar /> */}
          <div className='root-container'>
            <div className="wrapper">
                { children }
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
