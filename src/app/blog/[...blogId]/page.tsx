import ClientProductPage from "./ClientProductPage";

export default function Page({ params }: { params: { blogId: string[] } }) {
  const blogId = params.blogId[0]; // Pick first part of dynamic route
  return <ClientProductPage blogId={blogId} />;
}
