import React from "react";
import localFont from "next/font/local";
import "./globals.css";

//INTERNAL IMPORTING
import { NavBar, Footer } from "../../Components/index"
import { CrowdFundingProvider } from "../../Context/Lock";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Croud Funding",
  description: "Decentralised CrowdFunding DApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <CrowdFundingProvider>
        <NavBar />
          {children}
        <Footer />
      </CrowdFundingProvider>
      </body>
    </html>
    );
}
