import axios from "axios";

export async function fetchBlogs({
    pageId
}: {
    pageId: string
}) {
    return new Promise <void> ( async () => {
        const WORDPRESS_URL = process.env.WORDPRESS_URL;
        try {
            await axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/posts?page=${pageId}`);
        } catch (err) {
            console.log(err);
        }
    })
}