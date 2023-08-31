"use client";
import useCustomRedirect from "@/app/hook/useCustomRedirect";
import GlobalStyles from "@/app/theme/GlobalStyles";
import { Locale } from "@/app/type/locale";
import Link from "next/link";
import { handleLineLogin } from "./handleLogin";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type LoginProps = {
  params: {
    locale?: Locale;
  };
};
export default function Login({ params }: LoginProps) {
  const { handleRedirectLinePassUrl, locale } = useCustomRedirect();
  // console.log("signIn", signIn());
  // const { data: session } = useSession();
  const router = useRouter();
  // useEffect(() => {
  //   if (!session) return;
  //   router.push(`/${locale}/profile`);
  // }, [locale, router, session]);

  return (
    <main className="gap-[10px] flex-column">
      <GlobalStyles />
      <div className="button-block flex flex-col gap-[12px]">
        <button
          className="button mt-[10px]"
          style={{ background: "var(--line)" }}
          onClick={() => {
            handleLineLogin({ handleRedirectLinePassUrl });
            // signIn("line");
          }}
        >
          Line Login
        </button>
        <Link href="/" className="button text-center">
          back to YUENCHI
        </Link>
        {/* <button
          className="button"
          style={{ background: "var(--line)" }}
          onClick={() => {
            // signOut();
          }}
        >
          Line sign out
        </button> */}
      </div>
    </main>
  );
}
