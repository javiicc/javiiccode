import { Analytics } from "@vercel/analytics/react";
import "@styles/globals.css";
import meta from "@/lib/config/metadata";
import { Montserrat } from "next/font/google";
import Providers from "@/components/header/Providers";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <div className="bg-gradient-radial" />
        <Providers>
          <Navbar />
          <main className="min-h-screen min-w-full flex justify-center relative z-10">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
