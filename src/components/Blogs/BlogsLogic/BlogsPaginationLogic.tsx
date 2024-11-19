import usePaginationLogic from "./BlogsPaginationReactLogic";

const logic = () => {
  const { page } = usePaginationLogic();
  const setURL =
    process.env.WORDPRESS_BASE_URL! +
    "/posts?per_page=6&page=" +
    page +
    "&orderby=date";
  return {setURL};
};
export default logic;
