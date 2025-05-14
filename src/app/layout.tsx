import { AuthKitProvider } from "@workos-inc/authkit-nextjs";
import { GoogleAnalytics } from '@next/third-parties/google';

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rubik = localFont({
  src: './fonts/RubikFont.ttf',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: "AI Legal Assistant Chatbot for Instant Document Drafting | Legallyours",
  description: "Explore Legallyours AI-powered legal assistant for drafting documents, contracts & more. Ask questions, create accurate legal drafts, and simplify your legal needs effortlessly.",
  verification: {
    google: 'qQHvXhb40X__9tqlbPRJPn6Dq4Xj_Kr3KykHAy0wuWM',
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <GoogleAnalytics gaId="G-KRTTLX1SDE" />
        <AuthKitProvider>
          {children}
        </AuthKitProvider>
      </body>
    </html>
  );
}
