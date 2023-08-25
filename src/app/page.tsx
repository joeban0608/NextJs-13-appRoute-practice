import Link from "next/link";
import Counter from "./component/Counter";
import ThemeSelector from "./component/ThemeSelector";

export default function Home() {
  return (
    <main className="">
      <h1> hello world</h1>
      <Counter />
      <Link href="post/aaa">link to post aaa</Link>
      <ThemeSelector />
    </main>
  );
}
