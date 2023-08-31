"use client";
import { useParams, usePathname } from "next/navigation";
import { Locale } from "../type/locale";

const useCustomRedirect = () => {
  const params = useParams();
  const locale = (params.locale as Locale) ?? "en";
  const handleRedirectLinePassUrl = () => {
    if (!window) return `https://yuenchi.ai/${locale}/linepasscode`;
    return `${window.location.origin}/${locale}/linepasscode`;
  };

  const handleRedirectHomeUrl = () => {
    if (!window) return `https://yuenchi.ai/${locale}`;
    return `${window.location.origin}/${locale}`;
  };
  const handleRedirectProfile = () => {
    if (!window) return `https://yuenchi.ai/${locale}/profile`;
    return `${window.location.origin}/${locale}/profile`;
  };
  return {
    handleRedirectLinePassUrl,
    handleRedirectHomeUrl,
    handleRedirectProfile,
    locale,
  };
};

export default useCustomRedirect;
