"use client";
import ScrollToTop from "@/components/ScrollToTop";
import AOS from "aos";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/scss/main.scss";
import { Nunito } from "next/font/google";
const nunitoFont = Nunito({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-nunito",
});
export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <body className={nunitoFont.variable}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
