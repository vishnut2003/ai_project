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
          <PaginationItem>
            <PaginationPrevious href={`/blogs/${intID - 1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="text-black" isActive href={`/blogs/${intID}`}>{id}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext  href={`/blogs/${intID + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    
  );
};

export default BlogsPagination;

