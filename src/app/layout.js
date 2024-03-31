import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Al Quran",
  description: "Design & Develop by Weprodevs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:flex md:flex-col items-center`}>
        <main className="md:w-[1024px] lg:w-[1400px] m-auto bg-base-100">
          <Header></Header>
          {children}
          <SpeedInsights></SpeedInsights>
        </main>
      </body>
    </html>
  );
}
