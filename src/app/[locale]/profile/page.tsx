"use client";
import LogoutButton from "@/app/component/LogoutButton";
import { useAppDispatch, useAppSelector } from "@/app/hook/hooks";
import useCustomRedirect from "@/app/hook/useCustomRedirect";
import { useHandleLogout } from "@/app/hook/useHandleLogout";
import { useMount } from "@/app/hook/useMount";
import { setToken } from "@/app/store/features/persistStoresSlice";
import { setUserInfo } from "@/app/store/features/userSlice";
import GlobalStyles from "@/app/theme/GlobalStyles";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const ProfileStyle = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .avatar {
    background: ${({ theme }) => theme.secondary};
    border: 6px solid ${({ theme }) => theme.dividing_4};
    border-radius: 36px;
    /* width: 112px; */
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .user_info {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    .name_level_container {
      display: flex;
      align-items: center;
      font-size: 24px;
      h1 {
        color: ${({ theme }) => theme.text_1};
        font-weight: 700;
      }
      h2 {
        color: ${({ theme }) => theme.primary};
        margin-left: 0.8rem;
        font-weight: bold;
        -webkit-text-stroke: 1.5px ${({ theme }) => theme.primary};
      }
    }
    .rate_container {
      display: flex;
      flex-direction: column;
      font-family: SF Pro;
      gap: 3px;
      margin-top: 15px;
      p {
        font-size: 10px;
        align-self: flex-end;
        color: ${({ theme }) => theme.text_3};
        margin-top: 6px;
      }
    }
    h3 {
      color: ${({ theme }) => theme.text_3};
      font-size: 14px;
      font-weight: 700;
    }
  }
`;
const Profile = () => {
  const dispatch = useAppDispatch();
  const { handleRedirectHomeUrl } = useCustomRedirect();
  const { handleLogout } = useHandleLogout();
  const { userInfo } = useAppSelector((state) => state.user);
  const { isMounted } = useMount();
  if (!isMounted) return null;
  console.log("userInfo", userInfo);
  return (
    <ProfileStyle>
      <GlobalStyles />
      <Image
        className="avatar"
        src={userInfo?.avatar || "/profileImg.png"}
        alt=""
        width={150}
        height={150}
        priority={true}
      />
      <div className="user_info">
        <div className="name_level_container">
          <h1>{userInfo?.name && userInfo.name}</h1>
          {/* <h2>
          {t("Lv.")} {level}
        </h2> */}
        </div>

        <h3>{userInfo?.line_email ?? "line e-mail"}</h3>

        {/* <div className="rate_container">
        <ProfileRate exp={exp}></ProfileRate>
        <p>
          {10 - exp} {t("Friends. TO GO")}
        </p>
      </div> */}
      </div>
      <Link href="/" className="button text-center">
        back to YUENCHI
      </Link>
      <LogoutButton />
    </ProfileStyle>
  );
};

export default Profile;
