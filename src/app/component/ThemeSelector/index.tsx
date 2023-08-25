"use client";

import { useAppDispatch } from "@/app/hook/hooks";
import {
  ThemeColor,
  setSelectTheme,
} from "@/app/store/features/persistStoresSlice";
import { styled } from "styled-components";

const ThemeSelectorStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  .button {
    color: ${({ theme }) => theme.buttons};
    padding: 6px 18px;
    border-radius: 24px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.buttons};
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.28px;
    width: 265px;
  }
`;

const ThemeSelector = () => {
  const dispatch = useAppDispatch();
  const handleSelectTheme = (theme: ThemeColor) => {
    dispatch(setSelectTheme(theme));
  };

  return (
    <ThemeSelectorStyle className="button-block">
      <button
        className="button"
        onClick={() => {
          handleSelectTheme("dark");
        }}
      >
        Dark
      </button>
      <button
        className="button"
        onClick={() => {
          handleSelectTheme("light");
        }}
      >
        light
      </button>
    </ThemeSelectorStyle>
  );
};

export default ThemeSelector;
