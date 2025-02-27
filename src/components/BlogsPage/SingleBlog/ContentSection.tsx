import WordpressBlogInterface from '@/interfaces/wordpressBlog'
import Image from 'next/image'
import React from 'react'
import "./SingleBlogStyle.css"
import SocialShareButton from './SocialShareButton'
import TableOfContent from './TableOfContent'

const ContentSection = ({ blogContent }: {
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
        className='w-full md:w-[60%] h-auto rounded-lg shadow-md shadow-gray-300'
      />

      <div
        className='w-full flex flex-col-reverse md:flex-row gap-5 justify-center'
      >
        <div
          className='w-full'
        >
          {/* blog title */}
          <h1 className='text-4xl font-semibold mb-5'>{blogContent.title.rendered}</h1>

          {/* Blog content */}
          <div dangerouslySetInnerHTML={{ __html: blogContent.content.rendered }}></div>
        </div>

        {/* Col 2 */}
        <div
          className='w-full md:w-[40%]'
        >
          <div
            className='flex flex-col gap-5 w-full sticky top-[115px]'
          >
            <div>
              <TableOfContent />
            </div>

            <div
              className='flex md:justify-end'
            >
              <SocialShareButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentSection