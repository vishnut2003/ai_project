import BlogList from "../BlogList";
import logic from "./BlogsPaginationLogic";

const BADAWALALOGIC = async () => {
    const {setURL} = logic();
    async function fetchPosts() {
      const res = await fetch(setURL);
  
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
  
      return res.json();
    }
    const posts = await fetchPosts();
    return(
        <>
        <BlogList posts = {posts}/>
        </>
    )
} 

export default BADAWALALOGIC;