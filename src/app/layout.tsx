import { AuthKitProvider } from "@workos-inc/authkit-nextjs"

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rubik = localFont({
  src: './fonts/RubikFont.ttf',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: "Legall yours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <AuthKitProvider>
          {children}
        </AuthKitProvider>
      </body>
    </html>
  );
}
