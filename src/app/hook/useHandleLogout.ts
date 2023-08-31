import { signOut, useSession } from "next-auth/react";
import { setToken } from "../store/features/persistStoresSlice";
import { setUserInfo } from "../store/features/userSlice";
import { useAppDispatch } from "./hooks";
import useCustomRedirect from "./useCustomRedirect";

export const useHandleLogout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(setUserInfo(null));
    dispatch(setToken(""));
    signOut({ callbackUrl: "/" });
  };
  return {
    handleLogout,
  };
};
