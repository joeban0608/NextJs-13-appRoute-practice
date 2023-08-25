import Link from "next/link";
import Counter from "./component/Counter";
import ThemeSelector from "./component/ThemeSelector";
import GlobalStyles from "./theme/GlobalStyles";

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
