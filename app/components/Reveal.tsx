"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    __reveal?: () => void;
  }
}

/**
 * The reveal observer itself lives in the inline <head> script in layout.tsx
 * so it runs at DOM-ready without waiting for hydration. This component just
 * re-runs it after client-side navigations, which swap in new page content
 * that the initial pass never saw.
 */
export function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    window.__reveal?.();
  }, [pathname]);
  return null;
}
