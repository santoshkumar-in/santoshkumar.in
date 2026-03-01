'use client'
import { PortfolioVersion } from "@/types";
import { VERSION_CONFIG } from "@/lib/config";

interface BrandLogoProps {
  size?: number;
  version: PortfolioVersion;
}


export function BrandLogo({ size = 26, version }: BrandLogoProps) {
  const accent = VERSION_CONFIG[version].accent;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0, display: "block" }}>
      <rect width="32" height="32" rx="7" fill={accent} />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill="white"
        fontSize="13"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.5"
      >
        SK
      </text>
    </svg>
  );
}

export function generateFaviconHref(accent: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="7" fill="${accent}"/>
  <text
    x="16"
    y="22"
    text-anchor="middle"
    fill="white"
    font-size="13"
    font-weight="700"
    font-family="system-ui, -apple-system, sans-serif"
    letter-spacing="-0.5"
  >SK</text>
</svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
