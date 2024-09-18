import { ReactNode } from "react";

import { NextUIProvider } from "@nextui-org/react";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
