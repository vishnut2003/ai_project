// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { redirect } from "next/navigation";

// async function countPosts(){
//   const countRes = await fetch(process.env.WORDPRESS_BASE_URL!+"/categories")

//   if(!countRes.ok){
//     throw new Error("Failed to count posts");
//   }
//   return countRes.json();

// }

// const BlogsPagination =async ({ id }: { id: string }) => {
//   const countPost = parseInt(await countPosts());
//   if(countPost%6==0){
//     var limitCount = countPost/6;
//   }
//   else{
//     var exceptionlimitCount = (countPost/6)+1;
//   }
//     var intID = parseInt(id);
//     if(intID<=0){
//       redirect("/blogs/1")
//     }
//     return (
    
//       <Pagination>
//         <PaginationContent>
//           <div className="px-3">
//           <PaginationItem>
//             <PaginationPrevious href={`/blogs/${intID - 1}`} />
//           </PaginationItem>
//           </div>
//             {intID > 1 && (
//             <div className="px-3">
//               <PaginationItem>
//               <PaginationLink className="text-white outline" href={`/blogs/${intID - 1}`}>
//                 {intID - 1}
//               </PaginationLink>
//               </PaginationItem>
//             </div>
//             )}
          
      
//           <PaginationItem>
//             <PaginationLink className="text-black" isActive href={`/blogs/${intID}`}>{intID}</PaginationLink>
//           </PaginationItem>
          
          
          
//           <div className="px-3">
//           <PaginationItem>
//             <PaginationLink className="text-white outline"  href={`/blogs/${(intID+1)}`}>{(intID+1)}</PaginationLink>
//           </PaginationItem>
//           </div>
//           <div className="px-3">
//           <PaginationItem>
//             <PaginationNext  href={`/blogs/${intID + 1}`} />
//           </PaginationItem>
//           </div>
//         </PaginationContent>
//       </Pagination>
    
//   );
// };

// export default BlogsPagination;


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

async function countPosts() {
  const countRes = await fetch(`${process.env.WORDPRESS_BASE_URL}/categories`);

  if (!countRes.ok) {
    throw new Error("Failed to count posts");
  }
  const countData = await countRes.json();
  return countData[0].count; 
}

const BlogsPagination = async ({ id }: { id: string }) => {
  const countPost = await countPosts();
  const limitCount = Math.ceil(countPost / 6);

  const intID = parseInt(id);
  if (intID <= 0) {
    redirect("/blogs/1");
  }

  const isNextDisabled = intID >= limitCount;

  return (
    <Pagination>
      <PaginationContent>
        <div className="px-3">
          <PaginationItem>
            {intID > 1 && <PaginationPrevious href={`/blogs/${intID - 1}`} />}
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
          <PaginationLink className="text-black" isActive href={`/blogs/${intID}`}>
            {intID}
          </PaginationLink>
        </PaginationItem>
        {intID < limitCount && (
          <div className="px-3">
            <PaginationItem>
              <PaginationLink className="text-white outline" href={`/blogs/${intID + 1}`}>
                {intID + 1}
              </PaginationLink>
            </PaginationItem>
          </div>
        )}
        <div className="px-3">
          <PaginationItem>
            {isNextDisabled ? null : <PaginationNext href={`/blogs/${intID + 1}`} />}
          </PaginationItem>
        </div>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogsPagination;