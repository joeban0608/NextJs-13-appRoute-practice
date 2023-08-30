"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { UserInfoRes, UserInfoType, UserLoginRes } from "@/app/type/user";
import { getUserInfo, postUserLogin } from "@/app/lib/line";
import { useAppDispatch, useAppSelector } from "@/app/hook/hooks";
import { setToken } from "@/app/store/features/persistStoresSlice";
import { isEmptyObj } from "@/app/utils/isEmptyObj";
import { setUserInfo } from "@/app/store/features/userSlice";
import useCustomRedirect from "@/app/hook/useCustomRedirect";

const LinePassCode = () => {
  const searchParams = useSearchParams();
  const oneTimePassToken = searchParams.get("oneTimePass");
  // const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.persistStores);

  const { handleRedirectHomeUrl, handleRedirectProfile } = useCustomRedirect();
  const handleUserLogin = async () => {
    try {
      const body = JSON.stringify({ one_time_pass: oneTimePassToken });
      const postUserLoginRes = await postUserLogin({
        body,
      });
      if (!postUserLoginRes) return;
      const userLoginRes = (await postUserLoginRes.json()) as UserLoginRes;
      if (userLoginRes.error || !userLoginRes || !userLoginRes?.data) return;
      dispatch(setToken(userLoginRes.data));
      console.log("userLoginRes", userLoginRes);
    } catch (err) {
      console.log("handleUserLogin error", err);
    }
  };

  const handleGetUserInfo = async () => {
    try {
      const getUserInfoRes = await getUserInfo(token);
      if (!getUserInfoRes) return;
      const userInfoRes = (await getUserInfoRes.json()) as UserInfoRes;
      if (
        userInfoRes.error ||
        !userInfoRes ||
        !userInfoRes?.data ||
        isEmptyObj(userInfoRes.data)
      )
        return;
      dispatch(setUserInfo(userInfoRes.data));
      // window.location.href = handleRedirectProfile();
    } catch (err) {
      dispatch(setUserInfo(null));
      window.location.href = handleRedirectHomeUrl();
      console.log("handleGetUserInfo error:", err);
    }
  };

  useEffect(() => {
    if (!oneTimePassToken) return;
    handleUserLogin();
  }, [oneTimePassToken]);

  useEffect(() => {
    if (!token) return;
    handleGetUserInfo();
  }, [token]);

  return <div>linepasscode</div>;
};

export default LinePassCode;
