import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";



const BlogsPagination = ({ id }: { id: string }) => {
  
  return (
    
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`/blogs/${parseInt(id) - 1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="text-black" isActive href={`/blogs/${id}`}>{id}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`/blogs/${parseInt(id) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    
  );
};

export default BlogsPagination;

