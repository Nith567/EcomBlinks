import "./globals.css";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import NavBar from "@/components/UI/Home/Nav";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "wooEcom Solana Blinks",
  description: "wooEcommerce store blinks generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
