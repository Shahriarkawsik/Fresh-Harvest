import ClientProductPage from "./ClientProductPage";

type PageProps = {
  params: { blogId: string };
};

export default function Page({ params }: PageProps) {
  return <ClientProductPage blogId={params.blogId} />;
}
