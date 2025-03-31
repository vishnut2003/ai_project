import { AuthKitProvider } from "@workos-inc/authkit-nextjs";
import { GoogleAnalytics } from '@next/third-parties/google';
import Head from "next/head";
import { headers } from "next/headers"

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const rubik = localFont({
  src: './fonts/RubikFont.ttf',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: "AI Legal Assistant Chatbot for Instant Document Drafting | Legallyours",
  description: "Explore Legallyours AI-powered legal assistant for drafting documents, contracts & more. Ask questions, create accurate legal drafts, and simplify your legal needs effortlessly.",
  verification: {
    google: 'gkssNx_aviEPb8KcfQLRDvP8dtP7ZAegAje5s4Ia1HY'
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headerList = await headers();
  const currentUrl = headerList.get('x-url');
  let currentPath = '';
  if (currentUrl && URL.canParse(currentUrl)) {
    currentPath = new URL(currentUrl).pathname
  }

  let commonSchema = {};

  if (currentPath) {
    commonSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Legallyours",
      "url": "https://ailawgpt.com/",
      "logo": "https://ailawgpt.com/_next/image?url=%2Flegallyours-logo.png&w=640&q=75",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "9318349265",
        "contactType": "customer service",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.instagram.com/_legallyours/",
        "https://ailawgpt.com/"
      ]
    }
  }

  return (
    <html lang="en">
      {
        !currentPath.includes('/blogs') &&
        <head>
          <script
            type="application/ld+json"
          >{JSON.stringify(commonSchema)}</script>
        </head>
      }
      <body className={`${rubik.className} antialiased`}>
        <GoogleAnalytics gaId="G-HGGSWKXE3Y" />
        <AuthKitProvider>
          {children}
        </AuthKitProvider>
      </body>
    </html>
  );
}
