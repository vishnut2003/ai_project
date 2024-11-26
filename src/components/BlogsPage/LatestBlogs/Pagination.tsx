import { totalBlogsPageCount } from "@/utils/server/blogsHelper"
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "@remixicon/react";
import Link from "next/link";

const Pagination = async ({ pageId }: {
    pageId: string | undefined
}) => {

    const totalPageCount = await totalBlogsPageCount({ postPerPage: '9' });
    const prevButton = pageId ? parseInt(pageId) > 1 : false
    const nextButton = pageId ? parseInt(pageId) < totalPageCount : totalPageCount !== 1

    return (
        <div className="flex justify-center gap-5">

            {/* Prev Button */
                prevButton &&
                <Link
                    className="flex justify-start items-center gap-2"
                    href={`/blogs?page=${pageId && parseInt(pageId) - 1}`}>
                    <RiArrowLeftWideLine size={30} />
                    <div className="flex flex-col items-start">
                        <p className="m-0 text-sm">Go to Page {pageId && parseInt(pageId) - 1}</p>
                        <p className="m-0 text-xs">Prev Page</p>
                    </div>
                </Link>
            }
            
            {/* Next Button */
                nextButton &&
                <Link
                    className="flex justify-start items-center gap-2"
                    href={`/blogs?page=${pageId ? parseInt(pageId) + 1 : 2}`}>
                    <div className="flex flex-col items-start">
                        <p className="m-0 text-sm">Go to Page {pageId ? parseInt(pageId) + 1 : 2}</p>
                        <p className="m-0 text-xs">Next Page</p>
                    </div>
                    <RiArrowRightWideLine size={30} />
                </Link>
            }
        </div>
    )
}

export default Pagination