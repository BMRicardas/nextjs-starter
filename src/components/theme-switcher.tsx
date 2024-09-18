"use client";

import { useEffect, useState } from "react";

import { Switch } from "@nextui-org/switch";
import { IconMoon, IconSun } from "@tabler/icons-react";

import useSystemTheme from "@/hooks/use-system-theme";

type Props =
  | {
      showLabel: true;
      label: string;
    }
  | {
      showLabel?: false;
      label?: never;
    };

export function ThemeSwitcher({ showLabel, label }: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={theme === "light"}
      onValueChange={(value) => setTheme(value ? "light" : "dark")}
      size="lg"
      color="success"
      startContent={<IconSun />}
      endContent={<IconMoon />}
    >
      {showLabel && label}
    </Switch>
  );
}
