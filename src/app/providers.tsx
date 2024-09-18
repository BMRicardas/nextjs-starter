"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

import { NextUIProvider } from "@nextui-org/react";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  const router = useRouter();

  // @ts-expect-error navigate is not a function
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
