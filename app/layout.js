import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

export const gilroy = localFont({
  src: [
    { path: "./fonts/Gilroy-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/Gilroy-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Gilroy-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Gilroy-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Gilroy-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Gilroy-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--Gilroy",
});

export const metadata = {
  title: "Pehla Kadham",
  copyright: "Copyright © 2024 · All Rights Reserved",
  title: {
    template: '%s | Pehla Kadham',
    default: "Pehla Kadham",
  },
  description: "Pehla Kadham",
  twitter: {
    card: "summary_large_image",
    title: "Pehla Kadham",
    url: "https://pehlakadham.org.in",
    site: "@PehlaKadham",
    creator: "@PehlaKadham",
    description: "Pehla Kadham",
    images: [
      "https://pehlakadham.org.in/favicon.ico",
      "https://pehlakadham.org.in/Sangyatra.png",
      "https://pehlakadham.org.in/Verra.png",
      "https://pehlakadham.org.in/android-chrome-192x192.png",
      "https://pehlakadham.org.in/apple-touch-icon.png",
      "https://pehlakadham.org.in/favicon-16x16.png",
      "https://pehlakadham.org.in/favicon-32x32.png",
      "https://pehlakadham.org.in/PehlaKadham.png",
      "https://pehlakadham.org.in/android-chrome-512x512.png",
    ]
  },
  openGraph: {
    title: "Pehla Kadham",
    url: "https://pehlakadham.org.in",
    description: "Pehla Kadham",
    images: [
      "https://pehlakadham.org.in/favicon.ico",
      "https://pehlakadham.org.in/Sangyatra.png",
      "https://pehlakadham.org.in/Verra.png",
      "https://pehlakadham.org.in/android-chrome-192x192.png",
      "https://pehlakadham.org.in/apple-touch-icon.png",
      "https://pehlakadham.org.in/favicon-16x16.png",
      "https://pehlakadham.org.in/favicon-32x32.png",
      "https://pehlakadham.org.in/PehlaKadham.png",
      "https://pehlakadham.org.in/android-chrome-512x512.png",
    ],
    siteName: "Pehla Kadham",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <Link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${gilroy.variable} font-Gilroy`}>
        {children}
      </body>
    </html>
  );
}
