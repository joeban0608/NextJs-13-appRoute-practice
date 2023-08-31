import LogoutButton from "@/app/component/LogoutButton";
import { useAppSelector } from "@/app/hook/hooks";
import { useMount } from "@/app/hook/useMount";
import GlobalStyles from "@/app/theme/GlobalStyles";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";
import ProfileContent from "./Content";
import { PageLocale } from "@/app/type/locale";
import { getDictionary } from "@/app/utils/getDictionaries";

const Profile = async ({ params }: PageLocale) => {
  const locale = params.locale ?? "en";
  const dict = await getDictionary(locale); // en
  const { YUENCHI } = dict;
  return <ProfileContent dict={dict}/>;
};

export default Profile;
