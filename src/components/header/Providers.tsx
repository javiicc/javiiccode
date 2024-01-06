"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted) {
  //   return <>{":-("}</>;
  // }

  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      {children}
      {/* {mounted && <div className={theme}>{children}</div>} */}
    </ThemeProvider>
  );
  // return <ThemeProvider attribute="class" defaultTheme="dark">{children}</ThemeProvider>;
}
