// export const lineAuth = (
//   data: any
// ): Promise<{
//   data: string;
//   error: string;
// }> => services.post("/line/login", data);

import { baseURL } from "../utils/baseUrl";

type Body = {
  body: BodyInit | null | undefined;
};
export const postLineLogin = async ({ body }: Body) => {
  try {
    const formatUrl = baseURL + "/line/login";
    const fetchConfig = {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
      method: "POST",
      body,
    };
    return fetch(formatUrl, fetchConfig);
  } catch (err) {
    console.log("post line login error: ", err);
  }
};

export const postUserLogin = async ({ body }: Body) => {
  try {
    const formatUrl = baseURL + "/user/login";
    const fetchConfig = {
      method: "POST",
      body,
    };
    return fetch(formatUrl, fetchConfig);
  } catch (err) {
    console.log("post user login error: ", err);
  }
};
export const getUserInfo = async (token: string) => {
  try {
    const formatUrl = baseURL + "/user/me";
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const fetchConfig = {
      method: "GET",
      headers: myHeaders,
      // "Content-Type": "application/json",
      // Accept: "application/json",
    };
    return fetch(formatUrl, fetchConfig);
  } catch (err) {
    console.log("get user info error: ", err);
  }
};

// export const getWebUserInfo = (): Promise<{
//   data: UserInfoType;
//   error: string;
// }> => services.get("/user/me");
