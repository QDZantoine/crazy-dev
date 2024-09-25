"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}