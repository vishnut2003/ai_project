export const revalidate = 3600 // one hour

import { fetchBlogs, totalBlogsPageCount } from "@/utils/server/blogsHelper";
import { SITEMAP_BASEURL } from "../(sitemaps)/sitemap_index.xml/route";

export default async function sitemap() {
    try {
        const blogsCount = await totalBlogsPageCount({ postPerPage: '1' })
        const blogs = await fetchBlogs({
            pageId: '1',
            postPerPage: `${blogsCount}`,
        })

        const sitemapContent: {
            url: string,
            lastModified: Date,
            changefreq: string,
        }[] = blogs.map((blog) => ({
            url: `${SITEMAP_BASEURL}/blogs/${blog.slug}`,
            lastModified: new Date(),
            changefreq: "monthly",
        }))

        return [
            ...sitemapContent
        ]
    } catch (err) {
        console.log(err);
        console.log("Failed to generate sitemap!");
    }
}