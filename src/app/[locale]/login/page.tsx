import GlobalStyles from "@/app/theme/GlobalStyles";
import { Locale } from "@/app/type/locale";
import LoginButton from "@/app/component/LoginButton";
import { getDictionary } from "@/app/utils/getDictionaries";
import BackToHome from "@/app/component/BaclToHome";

type LoginProps = {
  params: {
    locale?: Locale;
  };
};
export default async function Login({ params }: LoginProps) {
  const locale = params.locale ?? "en";
  const dict = await getDictionary(locale); // en
  const { YUENCHI } = dict;

  return (
    <main className="gap-[10px] flex-column">
      <GlobalStyles />
      <div className="button-block flex flex-col gap-[12px]">
        <LoginButton />
        <BackToHome homeName={YUENCHI} />
      </div>
    </main>
  );
}
