import axiosConfig from "@/configs/axiosConfig";
import WordpressBlogInterface from "@/interfaces/wordpressBlog";
import axios from "axios";

const WORDPRESS_URL = process.env.WORDPRESS_URL;

export async function fetchBlogs({
    pageId,
    postPerPage
}: {
    pageId: string | undefined,
    postPerPage: string
}) {
    return new Promise <WordpressBlogInterface[]> ( async (resolve) => {
        try {
            const response = await axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/posts?page=${pageId ? pageId : '1'}&per_page=${postPerPage}`);
            const posts: WordpressBlogInterface[] = response.data;
            resolve(posts);
        } catch (err) {
            console.log(err);
        }
    })
}

export async function totalBlogsPageCount ({postPerPage}: {
    postPerPage: string
}) {
    return new Promise<number>( async (resolve) => {
        try {
            const response = await axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=${postPerPage}`, axiosConfig);
            const postPageCountString: string = response.headers['x-wp-totalpages'];
            const postPageCount = parseInt(postPageCountString);

            resolve(postPageCount);
        } catch (err) {
            console.log(err);
        }
    })
}

export async function getSingleBlog ({slug}: {
    slug: string
}) {
    return new Promise<WordpressBlogInterface>( async (resolve) => {
        try {
            const response = await axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}`, axiosConfig)
            const singleBlog: WordpressBlogInterface = response.data[0];
            resolve(singleBlog);
        } catch (err) {
            console.log(err);
        }
    })
}