import { AuthKitProvider } from "@workos-inc/authkit-nextjs";
import { GoogleAnalytics } from '@next/third-parties/google'

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rubik = localFont({
  src: './fonts/RubikFont.ttf',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: "LegallYours",
  description: "Get instant legal drafts with our AI-powered law chatbot. Ask questions, draft legal documents, and simplify your legal needs seamlessly. Start now!",
  verification: {
    google: 'gkssNx_aviEPb8KcfQLRDvP8dtP7ZAegAje5s4Ia1HY'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <GoogleAnalytics gaId="G-HGGSWKXE3Y"/>
        <AuthKitProvider>
          {children}
        </AuthKitProvider>
      </body>
    </html>
  );
}
