import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tollywood Index — Find films worth your time",
  description: "Search, sort and explore Telugu films through a transparent seven-measure rating method.",
  icons: { icon: "/TI/favicon.svg" },
  openGraph: { title: "Tollywood Index", description: "Explore two years of Telugu cinema." },
  twitter: { card: "summary", title: "Tollywood Index", description: "Explore two years of Telugu cinema." },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
