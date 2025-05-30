import ClientProductPage from "./ClientProductPage";

// type PageProps = {
//   params: { blogId: string };
// };

// export default function Page({ params }: PageProps) {
//   return <ClientProductPage blogId={params.blogId} />;
// }

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  return <ClientProductPage blogId={blogId} />;
}
