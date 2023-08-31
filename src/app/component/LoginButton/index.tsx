"use client";
import useCustomRedirect from "@/app/hook/useCustomRedirect";
import { signIn } from "next-auth/react";
import React from "react";
import { handleLineLogin } from "./handleLogin";

const LoginButton = () => {
  const { handleRedirectLinePassUrl } = useCustomRedirect();

  return (
    <button
      className="button mt-[10px]"
      style={{ background: "var(--line)" }}
      onClick={() => {
        handleLineLogin({ handleRedirectLinePassUrl });
        // signIn("line");
      }}
    >
      Line Login
    </button>
  );
};

export default LoginButton;
