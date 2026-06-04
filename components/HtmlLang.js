"use client";

import { useEffect } from "react";

// Sets <html lang> for the current page (the root layout is shared, so the
// Spanish route flips it to "es" on mount). <html> has suppressHydrationWarning.
export default function HtmlLang({ lang }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev;
    };
  }, [lang]);
  return null;
}
