import Link from "next/link";
import Counter from "./component/Counter";

export default function Home() {
  return (
    <main className="">
      <h1> hello world</h1>
      <Counter />
      <Link href="post/aaa">link to post aaa</Link>
    </main>
  );
}
