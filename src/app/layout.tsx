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
  title: "Legallyours: India's First Legal AI Chatbot- Free Legal Advice",
  description: "Legallyours, First Law Bot of India serves as a virtual advocate, providing answers to legal queries about Indian Laws. AI based Free online lawyer consultation 24x7.",
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
