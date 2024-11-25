import axios from "axios";

export async function fetchBlogs({
    pageId
}: {
    pageId: string
}) {
    return new Promise <void> ( async (resolve, reject) => {
        const WORDPRESS_URL = process.env.WORDPRESS_URL;
        try {
            const response = await axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/posts?page=${pageId}`)
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    })
}