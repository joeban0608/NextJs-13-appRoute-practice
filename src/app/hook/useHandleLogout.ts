import { setToken } from "../store/features/persistStoresSlice";
import { setUserInfo } from "../store/features/userSlice";
import { useAppDispatch } from "./hooks";

export const useHandleLogout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(setUserInfo(null));
    dispatch(setToken(""));
  };
  return {
    handleLogout,
  };
};
