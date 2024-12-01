import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "F-Sktk | في سكتك",
  icons: [
    {
      url: "/favicon.png",
      href: "/favicon.png",
    },
  ],
  description:
    "F-Sktk is a car pooling app in Cairo, Egypt, connecting drivers with passengers. Whether you own a car or need a ride, F-Sktk offers a convenient, eco-friendly, and cost-effective way to share transportation and reduce traffic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
