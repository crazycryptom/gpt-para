"use client";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

interface Props extends ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children, ...props }: Props) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}