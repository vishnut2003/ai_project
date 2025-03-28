import { NextResponse } from "next/server";

export const SITEMAP_BASEURL = "https://ailawgpt.com";

export async function GET() {
    try {
        const sitemaps: string[] = [
            `${SITEMAP_BASEURL}/pages/sitemap.xml`,
            `${SITEMAP_BASEURL}/blogs/sitemap.xml`,
        ];
        const sitemapIndexXML = await buildSitemapIndex(sitemaps);
        return new NextResponse(sitemapIndexXML, {
            headers: {
                "Content-Type": "application/xml",
                "Content-Length": Buffer.byteLength(sitemapIndexXML).toString(),
            },
        });
    } catch (err) {
        console.log(err);
        return NextResponse.error();
    }
}

async function buildSitemapIndex(sitemaps: string[]) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>';
    xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    for (const sitemapURL of sitemaps) {
        xml += "<sitemap>";
        xml += `<loc>${sitemapURL}</loc>`;
        xml += "</sitemap>";
    }

    xml += "</sitemapindex>";
    return xml;
}