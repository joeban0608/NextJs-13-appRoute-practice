import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "../store/ReduxProvider";
import StyledComponentsRegistry from "../../../registry";
import CustomThemeProvider from "../theme/CustomThemeProvider";
import { Locale } from "../type/locale";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }];
}
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale?: Locale;
  };
};
export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.locale ?? "en"} suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <CustomThemeProvider>{children}</CustomThemeProvider>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}