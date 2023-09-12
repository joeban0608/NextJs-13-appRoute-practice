"use client";
import { signOut } from "next-auth/react";
import { setToken } from "../../store/features/persistStoresSlice";
import { setUserInfo } from "../../store/features/userSlice";
import { useAppDispatch } from "../../hook/hooks";
import { useRouter } from "next/navigation";
import { redirectHomeUrl } from "@/app/utils/redirect";

export const useHandleLogout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(setUserInfo(null));
    dispatch(setToken(""));
    signOut({
      redirect: false,
      // callbackUrl: "/"
    });
    router.push("/");
    // window.location.href = redirectHomeUrl;
  };
  return {
    handleLogout,
  };
};
