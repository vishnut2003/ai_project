import { Metadata } from "next";

export const metadata: Metadata = {
    robots: "noindex, nofollow",
}

export default function SEOPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    console.log("SEO Page Layout...")
    return children;
}