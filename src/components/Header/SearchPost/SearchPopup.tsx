'use client';

import WordpressBlogInterface from "@/interfaces/wordpressBlog";
import { RiCloseLargeLine, RiMenuSearchLine, RiRefreshLine, RiSearchLine } from "@remixicon/react";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

function PostSearchPopup({ closeAction }: {
    closeAction: () => void,
}) {

    const [searchText, setSearchText] = useState<string>("");
    const [posts, setPosts] = useState<WordpressBlogInterface[]>([]);
    const [inProgress, setInProgress] = useState<boolean>(false);

    async function fetchPosts(e: FormEvent) {
        e.preventDefault();
        if (!searchText) {
            return;
        }
        setInProgress(true);
        const response = await axios.post('/api/blogs/get-search-query', { searchText })
        const posts: WordpressBlogInterface[] = response.data.posts;
        setPosts(posts);
        setInProgress(false);
    }

    return (
        <motion.div
            className='fixed md:absolute top-0 md:top-[70px] right-0 w-full md:w-[500px] max-w-screen-sm h-full md:h-max z-50 bg-secodary-color shadow-2xl shadow-black/50 py-5 px-7 md:rounded-md md:border border-white/30'
            initial={{
                scale: 0.6,
            }}
            animate={{
                scale: 1,
            }}
        >

            <div>
                {/* Search Bar */}
                <div
                    className='flex gap-5 justify-between w-full items-center border-b border-white/20 pb-5'
                >
                    <form
                        className='flex gap-5 w-full'
                        onSubmit={fetchPosts}
                    >
                        <RiMenuSearchLine
                            size={25}
                        />
                        <input
                            type="text"
                            placeholder='Search Blogs...'
                            className='text-base bg-transparent outline-none w-full'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button>
                            {
                                inProgress ?
                                    <RiRefreshLine
                                        size={20}
                                        className="animate-spin"
                                    />
                                    : <RiSearchLine
                                        size={20}
                                    />
                            }
                        </button>
                    </form>

                    <button
                        onClick={closeAction}
                    >
                        {
                            <RiCloseLargeLine
                                size={20}
                            />
                        }
                    </button>
                </div>

                {/* Search result */}
                <div
                    className='min-h-[300px] max-h-[300px] overflow-auto py-5'
                >
                    {
                        posts.length < 1 ?
                            <div
                                className="flex justify-center items-center h-full"
                            >
                                <p>Nothing found...</p>
                            </div>
                            : posts.map((post, index) => (
                                <div
                                    className="flex gap-3 items-start"
                                    key={index}
                                >
                                    <div
                                        className="w-[100px] rounded-md overflow-hidden"
                                    >
                                        <Image
                                            alt="featured image"
                                            src={post.featured_media_src_url}
                                            width={100}
                                            height={100}
                                            style={{
                                                width: "100%",
                                                aspectRatio: 1 / 0.9
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="w-full"
                                    >
                                        <div>
                                            <h2>{post.title.rendered}</h2>
                                            <p
                                                className="m-0 text-sm opacity-50"
                                            >{post.date?.split('T')[0].split("-").join("/")}</p>
                                            <Link
                                                href={`/blogs/${post.slug}`}
                                                className="text-sm font-semibold"
                                            >
                                                View
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>

        </motion.div>
    )
}

export default PostSearchPopup;