import type { Metadata } from "next";
import "./globals.scss";
import localFont from 'next/font/local'
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import CustomProvider from "rsuite/esm/CustomProvider";

const sfProTextFont = localFont({
  src: [
    // {
    //   path: '../assets/fonts/subset-SFProText-Black.woff2',
    //   weight: '900',
    //   style: 'normal',
    // },
    {
      path: '../assets/fonts/subset-SFProText-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../assets/fonts/subset-SFProText-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/subset-SFProText-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/subset-SFProText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/subset-SFProText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/subset-SFProText-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/subset-SFProText-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/subset-SFProText-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={sfProTextFont.className}>
        <CustomProvider theme="dark">
          <Header />
          {children}
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
