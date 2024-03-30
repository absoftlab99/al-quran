import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header";

const inter = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Al Quran",
  description: "Design & Develop by Weprodevs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} w-[1400px m-auto]`}>
        <Header></Header>
        {children}
        
        </body>
    </html>
  );
}
