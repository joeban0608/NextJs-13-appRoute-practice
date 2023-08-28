"use client";
import { styled } from "styled-components";
import { useTheme } from "next-themes";

const ThemeSelectorStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  .button {
    padding: 6px 18px;
    border-radius: 24px;
    background: var(--primary);
    color: var(--buttons);
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.28px;
    width: 265px;
  }
`;

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  console.log('theme', theme)
  return (
    <ThemeSelectorStyle className="button-block">
      <button
        className="button"
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark
      </button>
      <button
        className="button"
        onClick={() => {
          setTheme("light");
        }}
      >
        light
      </button>
    </ThemeSelectorStyle>
  );
};

export default ThemeSelector;
