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
  const dict = await getDictionary(params.locale ?? "en"); // en
  const { YUENCHI } = dict;
  
  return (
    <main className="">
      <GlobalStyles />
      <h1> hello world, there is {YUENCHI}</h1>
      <Counter />
      <Link href="post/aaa">link to post aaa</Link>
      <ThemeSelector />
    </main>
  );
}
