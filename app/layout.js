import { Roboto } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Sky Cast",
  description: "Weather App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
