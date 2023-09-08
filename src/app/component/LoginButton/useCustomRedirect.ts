"use client";
import { useParams } from "next/navigation";
import { Locale } from "../../../../i18n.config";

const useCustomRedirect = () => {
  const params = useParams();
  const locale = (params.locale as Locale) ?? "en";
  const handleRedirectLinePassUrl = () => {
    if (!window) return `https://yuenchi.ai/${locale}/linepasscode`;
    return `${window.location.origin}/${locale}/linepasscode`;
  };

  return {
    handleRedirectLinePassUrl,
    locale,
  };
};

export default useCustomRedirect;
