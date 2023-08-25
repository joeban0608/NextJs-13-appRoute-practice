"use client";
const DarkThemeConfig = {
  primary: "#FF4655",
  secondary: "#181A29",
  background_1: "#111",
  background_2: "#131522",
  background_3: "#2A2E43",
  background_4: "#40445E",
  background_5: "#2A2E43",
  text_1: "#FFF",
  text_2: "#CBCBCB",
  text_3: "#8A8F9C",
  text_4: "#5D5F69",
  buttons: "#FFF",
  dividing_1: "#25262F",
  dividing_2: "#40445E",
  dividing_3: "#25262F",
  dividing_4: "#7D8190",
  shareBackground: "#0B0D15",
  gameBackground: "#000",
  heart: "#FF3142",
  start: "#FF9E4F",
  linear_1: `linear-gradient(135deg, #F66444 0%, #F64453 32.29%, #3D51C0 100%)`,
  linear_1_icon: `
  #stop_1 {
    stop-color: #F66444;
  } 
  #stop_2 {
    stop-color: #F64453;
    offset: 0.3229;
  }
  #stop_3 {
    stop-color: #3D51C0;
    offset: 1;
  }
  `,
  mobileChatFooterStyle: `
    width: calc(100% - 26px);
    margin: 0 13px;
    padding: 0 0 12px 0;
    border-radius: 0 0 26px 26px;
  `,
};

const LightThemeConfig = {
  primary: "#01B8B8",
  secondary: "#FFF",
  background_1: "#FFF",
  background_2: "#E0E0E0",
  background_3: "#FFF",
  background_4: "#DADADA",
  background_5: "#EEE",
  text_1: "#231814",
  text_2: "#5B5B5B",
  text_3: "#ACACAC",
  text_4: "#5B5B5B",
  buttons: "#FFF",
  dividing_1: "#E0E0E0",
  dividing_2: "#ACACAC",
  dividing_3: "#CBCBCB",
  dividing_4: "#CBCBCB",
  shareBackground: "#E1E1E1",
  gameBackground: "#000",
  heart: "#FF3142",
  start: "#FF9E4F",
  linear_1: `linear-gradient(180deg, #01B8B8 0%, #019CB8 36.46%, #016BB8 100%)`,
  linear_1_icon: `
  #stop_1 {
    stop-color: #01B8B8;
  } 
  #stop_2 {
    stop-color: #019CB8;
    offset: 0.3646;
  }
  #stop_3 {
    stop-color: #016BB8;
    offset: 1;
  }
  `,
  mobileChatFooterStyle: `
    width: 100%;
    padding: 0 0 12px 0;
  `,
};

export const themeConfig = (selectTheme: string) => {
  switch (selectTheme) {
    case "dark":
      return DarkThemeConfig;
    case "light":
      return LightThemeConfig;
    default:
      return DarkThemeConfig;
  }
};
