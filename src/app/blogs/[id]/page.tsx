import BlogPage from "../page";

export default async function blogsParams({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <BlogPage id={id} />
  );
}
