import React from "react";
import { PortfolioVersion } from "../types";
import { VERSION_CONFIG } from "../lib/config";

interface BrandLogoProps {
  size?: number;
  version: PortfolioVersion;
}

export function BrandLogo({ size = 26, version }: BrandLogoProps) {
  const accent = VERSION_CONFIG[version].accent;
  
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0, display: "block" }}>
      <rect width="32" height="32" rx="7" fill={accent} />
      {version === "genai" ? (
        <>
          <path d="M16 8 L16 24 M12 12 L20 12 M12 16 L20 16 M12 20 L20 20" stroke="#0c0e12" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
          <circle cx="16" cy="12" r="1.5" fill="#0c0e12"/>
          <circle cx="16" cy="16" r="1.5" fill="#0c0e12"/>
          <circle cx="16" cy="20" r="1.5" fill="#0c0e12"/>
        </>
      ) : (
        <>
          <path d="M11 9 L7 16 L11 23" stroke="#0c0e12" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M21 9 L25 16 L21 23" stroke="#0c0e12" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M18 9 L14 23" stroke="#0c0e12" strokeWidth="2" strokeLinecap="round" opacity="0.75"/>
        </>
      )}
    </svg>
  );
}
