import Link from "next/link";
import Counter from "./component/Counter";
import GlobalStyles from "./theme/GlobalStyles";
import ThemeSelector from "./theme/ThemeSelector";

export default function Home() {
  return (
    <main className="">
      <GlobalStyles />
      <h1> hello world</h1>
      <Counter />
      <Link href="post/aaa">link to post aaa</Link>
      <ThemeSelector />
    </main>
  );
}
