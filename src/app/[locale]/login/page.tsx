"use client";
import useCustomRedirect from "@/app/hook/useCustomRedirect";
import GlobalStyles from "@/app/theme/GlobalStyles";
import { Locale } from "@/app/type/locale";
import Link from "next/link";
import { handleLineLogin } from "./handleLogin";

type LoginProps = {
  params: {
    locale?: Locale;
  };
};
export default function Login({ params }: LoginProps) {
  const { handleRedirectLinePassUrl } = useCustomRedirect();
  return (
    <main className="gap-[10px] flex-column">
      <GlobalStyles />
      <div className="button-block flex flex-col gap-[12px]">
        <button
          className="button mt-[10px]"
          style={{ background: "var(--line)" }}
          onClick={() => {
            handleLineLogin({ handleRedirectLinePassUrl });
          }}
        >
          Line Login
        </button>
        <Link href="/" className="button text-center">
          back to YUENCHI
        </Link>
      </div>
    </main>
  );
}
