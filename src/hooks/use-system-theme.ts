import { Dispatch, SetStateAction, useMemo } from "react";

import { useTheme } from "next-themes";

type Theme = "light" | "dark";
type SetTheme = Dispatch<SetStateAction<Theme>>;

export default function useSystemTheme() {
  const { theme, setTheme, systemTheme } = useTheme();

  return useMemo(() => {
    return {
      theme: theme === "systemTheme" ? systemTheme : theme,
      setTheme,
      systemTheme,
    } as { theme: Theme; setTheme: SetTheme };
  }, [theme, setTheme, systemTheme]);
}
