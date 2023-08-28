import Counter from "@/app/component/Counter";
import Link from "next/link";

type Page = {
  params: { slug: string };
};
const PostSlugPage = ({ params }: Page) => {
  return (
    <main>
      <h1>Here is post {params.slug} page</h1>
      <Counter />
      <Link href="/">back to home</Link>
    </main>
  );
};

export default PostSlugPage;
