"use client";
import { useParams, usePathname } from "next/navigation";

const useCustomRedirect = () => {
  const params = useParams();
  const locale = params.locale ?? "en";
  const handleRedirectLinePassUrl = () => {
    if (!window) return "https://yuenchi.ai/linepasscode";
    return `${window.location.origin}/${locale}/linepasscode`;
  };

  const handleRedirectHomeUrl = () => {
    if (!window) return "https://yuenchi.ai";
    return `${window.location.origin}/${locale}`;
  };
  return {
    handleRedirectLinePassUrl,
    handleRedirectHomeUrl,
  };
};

export default useCustomRedirect;
