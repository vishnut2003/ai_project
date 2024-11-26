import WordpressBlogInterface from "@/interfaces/wordpressBlog"
import Image from "next/image"
import Link from "next/link"

const BlogCard = ({ key, post }: {
    key: number,
    post: WordpressBlogInterface
}) => {

    return (
        <div key={key} className="flex flex-col gap-5 p-6 hover:bg-[#ffffff05] rounded-3xl md:hover:scale-105 transition-all">
            <Image
                src={post.featured_media_src_url}
                alt={post.title.rendered}
                width={400} height={220}
                style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                    aspectRatio: 2/1.2
                }}
            />

            <div className="flex flex-col gap-2">

                {/* Post Title */}
                <div className="w-full truncate">
                    <Link
                        href={`/blogs/${post.slug}`}
                        className="text-2xl font-semibold"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    ></Link>
                </div>

                {/* Post except */}
                <div
                    className="text-sm font-extralight pl-4 border-l-2 border-primary-color pt-2"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></div>
            </div>
        </div>
    )
}

export default BlogCard