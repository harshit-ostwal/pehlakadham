import localFont from "next/font/local";
import "./globals.css";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={`${gilroy.variable} font-Gilroy`}>
        {children}
      </body>
    </html>
  );
}
