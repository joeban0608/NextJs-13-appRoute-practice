import Link from "next/link";
import Counter from "../component/Counter";
import ThemeSelector from "../theme/ThemeSelector";
import { getDictionary } from "../utils/getDictionaries";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { ServerSession } from "../type/next-auth";
import LogoutButton from "../component/LogoutButton";
import LoginButton from "../component/LoginButton";
import { PageLocale } from "../type/locale";

export default async function Home({ params }: PageLocale) {
  const locale = params.locale ?? "en";
  const dict = await getDictionary(locale); // en
  const { YUENCHI } = dict;
  const session = (await getServerSession(authOptions)) as ServerSession;

  return (
    <main className="">
      <h1> hello world, there is {YUENCHI} sec app</h1>
      <Counter />
      <Link href="post/aaa" style={{ color: "var(--primary)" }}>
        link to post aaa
      </Link>
      <div className="link-block flex flex-col gap-[20px]">
        <ThemeSelector />
        {!session && <LoginButton />}
        {session && <LogoutButton />}
      </div>
    </main>
  );
}
