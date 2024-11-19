import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { redirect } from "next/navigation";



const BlogsPagination = ({ id }: { id: string }) => {

    var intID = parseInt(id);
    if(intID<=0){
      redirect("/blogs/1")
    }
    return (
    
      <Pagination>
        <PaginationContent>
          <div className="px-3">
          <PaginationItem>
            <PaginationPrevious href={`/blogs/${intID - 1}`} />
          </PaginationItem>
          </div>
            {intID > 1 && (
            <div className="px-3">
              <PaginationItem>
              <PaginationLink className="text-white outline" href={`/blogs/${intID - 1}`}>
                {intID - 1}
              </PaginationLink>
              </PaginationItem>
            </div>
            )}
          
      
          <PaginationItem>
            <PaginationLink className="text-black" isActive href={`/blogs/${intID}`}>{intID}</PaginationLink>
          </PaginationItem>
          
          
          
          <div className="px-3">
          <PaginationItem>
            <PaginationLink className="text-white outline"  href={`/blogs/${(intID+1)}`}>{(intID+1)}</PaginationLink>
          </PaginationItem>
          </div>
          <div className="px-3">
          <PaginationItem>
            <PaginationNext  href={`/blogs/${intID + 1}`} />
          </PaginationItem>
          </div>
        </PaginationContent>
      </Pagination>
    
  );
};

export default BlogsPagination;

