// import featuredItems from "./blogsArchiveItems";

// import featuredItems from "./blogsFeaturedItems";

// const BlogsArchive = ()=>{
//     return(<>
//                 "Blogs Archive here"
//         <div className="flex items-center my-4 mx-4">
//             <div className="w-1/3 ">

            
//             </div>
//         </div>
//         </>
//     )
// }

// export default BlogsArchive;


// const BlogsFeaturedItems = () =>{
// return (
//     <div className="bg-black text-white p-8 rounded-lg">
//       <h2 className="text-2xl font-bold mb-6">Featured posts</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {featuredItems.map((featuredItem, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//           >
//             {featuredItem.imageUrl && (
//               <img
//                 src={featuredItem.imageUrl}
//                 alt={featuredItem.title}
//                 className="w-full h-40 object-cover"
//               />
//             )}
//             <div className="p-4">
//               <h3 className="text-lg font-semibold mb-2">{featuredItem.title}</h3>
//               {featuredItem.description && (
//                 <p className="text-sm text-gray-400">{featuredItem.description}</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BlogsFeaturedItems;

//useeffect

// const BlogsFeaturedItems = () =>{
//   return (
//       <div className="bg-black text-white p-8 rounded-lg">
//         <h2 className="text-2xl font-bold mb-6">Featured posts</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {featuredItems.map((featuredItem, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//             >
//               {featuredItem.imageUrl && (
//                 <img
//                   src={featuredItem.imageUrl}
//                   alt={featuredItem.title}
//                   className="w-full h-40 object-cover"
//                 />
//               )}
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold mb-2">{featuredItem.title}</h3>
//                 {featuredItem.description && (
//                   <p className="text-sm text-gray-400">{featuredItem.description}</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default BlogsFeaturedItems;


import { useEffect, useState } from "react";
import fetchPost from "./blogsFeaturedItems";

const BlogFeatured = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await fetchPost();
      setPosts(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>ksadnasnd</h2>
      <ol className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default BlogFeatured;