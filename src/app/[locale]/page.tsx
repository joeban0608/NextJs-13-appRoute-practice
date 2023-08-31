import Link from "next/link";
import GlobalStyles from "../theme/GlobalStyles";
import Counter from "../component/Counter";
import ThemeSelector from "../theme/ThemeSelector";
import { getDictionary } from "../utils/getDictionaries";
import { Locale } from "../type/locale";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { ServerSession } from "../type/next-auth";
import LogoutButton from "../component/LogoutButton";
import LoginButton from "../component/LoginButton";

type HomeProps = {
  params: {
    locale?: Locale;
  };
};
export default async function Home({ params }: HomeProps) {
  const locale = params.locale ?? "en";
  const dict = await getDictionary(locale); // en
  const { YUENCHI } = dict;
  const session = (await getServerSession(authOptions)) as ServerSession;

  return (
    <main className="">
      <GlobalStyles />
      <h1> hello world, there is {YUENCHI}</h1>
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
