"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  const router = useRouter();

  return (
    // @ts-expect-error navigate is not a function
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
