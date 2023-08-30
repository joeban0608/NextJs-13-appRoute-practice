import Counter from "@/app/component/Counter";
import Link from "next/link";
import styles from "./styles.module.scss";
import GlobalStyles from "@/app/theme/GlobalStyles";
type Page = {
  params: { slug: string };
};
const PostSlugPage = async ({ params }: Page) => {
  return (
    <main className={styles.main}>
      <GlobalStyles />
      <h1>Here is post {params.slug} page</h1>
      <Counter />
      <Link className={styles.link} href="/">
        back to home
      </Link>
    </main>
  );
};

export default PostSlugPage;
