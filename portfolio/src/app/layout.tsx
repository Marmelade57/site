import type { Metadata } from "next";

import { Pacifico } from "next/font/google";
import "./globals.css";
import "@/style/commun.css";

import Menu from "../components/menu";



/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

const pacifico = Pacifico({
  weight:"400",
  style: "normal",
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Margaux HALLER",
  description: "Portfolio de Margaux Haller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning={true} data-lt-installed="true"
>
      <body className={`${pacifico.variable} antialiased`}
        /* className={`${geistSans.variable} ${geistMono.variable} antialiased`} */
      >
        <Menu />
      <main className="w-auto">
        <section>
        {children}
        </section>
        </main>
        {/* <script type="module" src="/lib/setDraggable.js"></script> */}
      </body>
    </html>
  );
}
