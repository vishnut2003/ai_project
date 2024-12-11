import WordpressBlogInterface from '@/interfaces/wordpressBlog'
import Image from 'next/image'
import React from 'react'
import "./SingleBlogStyle.css"

const ContentSection = ({blogContent}: {
    blogContent: WordpressBlogInterface
}) => {
  return (
    <div className='w-full flex flex-col gap-6'>

        {/* blog image */}
        <Image 
        alt={blogContent.title.rendered}
        src={blogContent.featured_media_src_url}
        width={600}
        height={0}
        className='w-[60%] h-auto rounded-lg'
        />

        {/* blog title */}
        <h1 className='text-2xl font-semibold'>{blogContent.title.rendered}</h1>

        {/* Blog content */}
        <div dangerouslySetInnerHTML={{__html: blogContent.content.rendered}}></div>
    </div>
  )
}

export default ContentSection