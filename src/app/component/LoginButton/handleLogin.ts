import { postLineLogin } from "@/app/lib/line";

type GetLineAuthRes =
  | {
      data: string;
      error: string;
    }
  | undefined;

type HandleLineLoginProps = {
  handleRedirectLinePassUrl: () => string;
};

/* 
  帶 url: window.location.origin}/${locale}/linepasscode, 
  成功：redirect 至 LineAuthUrl (後端設置的 Line Platform)
  失敗：...
*/
export const handleLineLogin = async ({
  handleRedirectLinePassUrl,
}: HandleLineLoginProps) => {
  if (!window) return;

  const body = JSON.stringify({ url: handleRedirectLinePassUrl() });
  try {
    const postLineAuthRes = await postLineLogin({ body });
    if (!postLineAuthRes) {
      return;
    }
    const lineAuthRes = (await postLineAuthRes.json()) as GetLineAuthRes;
    if (!lineAuthRes || !lineAuthRes?.data) {
      return;
    }
    const redirectLineAuthUrl = lineAuthRes.data;
    window.location.href = redirectLineAuthUrl;
  } catch (err) {
    console.log("handleLineLogin err", err);
  }
};
