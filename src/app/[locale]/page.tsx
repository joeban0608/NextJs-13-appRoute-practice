import Link from "next/link";
import GlobalStyles from "../theme/GlobalStyles";
import Counter from "../component/Counter";
import ThemeSelector from "../theme/ThemeSelector";
import { getDictionary } from "../utils/getDictionaries";
import { Locale } from "../type/locale";

type HomeProps = {
  params: {
    locale?: Locale;
  };
};
export default async function Home({ params }: HomeProps) {
  const locale = params.locale ?? "en";
  const dict = await getDictionary(locale); // en
  const { YUENCHI } = dict;

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
        <Link href={`/${locale}/login`} className="button text-center">
          login
        </Link>
      </div>
    </main>
  );
}