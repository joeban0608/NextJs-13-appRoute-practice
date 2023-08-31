import React from "react";
import ProfileContent from "./Content";
import { PageLocale } from "@/app/type/locale";
import { getDictionary } from "@/app/utils/getDictionaries";

const Profile = async ({ params }: PageLocale) => {
  const locale = params.locale ?? "en";
  const dict = await getDictionary(locale); // en
  // const { YUENCHI } = dict;
  return <ProfileContent dict={dict} />;
};

export default Profile;
