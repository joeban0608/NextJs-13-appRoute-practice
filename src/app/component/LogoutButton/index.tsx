"use client";
import { useHandleLogout } from "@/app/component/LogoutButton/useHandleLogout";
import Link from "next/link";
import React from "react";

const LogoutButton = () => {
  const { handleLogout } = useHandleLogout();

  return (
    <Link
      className="button"
      href={"/"}
      style={{ textAlign: "center" }}
      onClick={handleLogout}
    >
      Logout
    </Link>
  );
};

export default LogoutButton;
