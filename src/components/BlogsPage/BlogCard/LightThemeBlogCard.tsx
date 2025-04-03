import WordpressBlogInterface from "@/interfaces/wordpressBlog"
import Image from "next/image"
import Link from "next/link"

const LightThemeBlogCard = ({ post }: {
    post: WordpressBlogInterface
}) => {

    return (
        <div className="flex flex-col gap-5 p-6 hover:bg-[#00000010] rounded-3xl md:hover:scale-105 transition-all">
            <Link
                href={`/blogs/${post.slug}`}
                className="w-full"
            >
                <Image
                    src={post.featured_media_src_url}
                    alt={post.title.rendered}
                    width={400} height={220}
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '20px',
                        aspectRatio: 2 / 1.2
                    }}
                />
            </Link>

            <div className="flex flex-col gap-2">

                {/* Post Title */}
                <div className="w-full truncate">
                    <Link
                        href={`/blogs/${post.slug}`}
                        className="text-2xl font-semibold text-black"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    ></Link>
                </div>

                {/* Post except */}
                <div
                    className="text-sm font-extralight pl-4 border-l-2 border-primary-color pt-2 line-clamp-3 leading-6"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></div>
            </div>
        </div>
    )
}

export default LightThemeBlogCard