import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Green Leaf Studio Apartments | Cavtat, Croatia",
  description: "Stay in a welcoming studio apartment in Cavtat, Croatia, 200 m from the promenade and 7 km from Dubrovnik Airport.",
  openGraph: { title: "Green Leaf Studio Apartments | Cavtat, Croatia", description: "Two comfortable garden-view studios in Cavtat, close to the promenade and Dubrovnik Airport.", siteName: "Green Leaf Studio Apartments", locale: "en_GB", type: "website", images: [{ url: "/img/home/1.jpg", width: 360, height: 542, alt: "Studio apartment in Cavtat" }] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={montserrat.variable}><body>{children}</body></html>;
}
