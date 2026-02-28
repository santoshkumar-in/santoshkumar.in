"use client";
import React from "react";
import { VersionProvider, useVersion } from "../lib/VersionContext";
import { getColors, GLOBAL_STYLES } from "../lib/config";
import { useWidth } from "../lib/hooks";
import { TopNav, MobileTabBar, BottomBar } from "../components/Navigation";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { version, setVersion } = useVersion();
  const w = useWidth();
  const isMobile = w < 768;
  const C = getColors(version);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
      <div style={{ display: "flex", flexDirection: "column", height: "100dvh", background: C.bg, color: C.text, overflow: "hidden", fontFamily: "'IBM Plex Sans', sans-serif" }}>
        {!isMobile && <TopNav version={version} setVersion={setVersion} C={C} />}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {children}
        </div>
        {isMobile && <MobileTabBar C={C} />}
        <BottomBar version={version} C={C} />
      </div>
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Santosh Kumar - Portfolio</title>
        <meta name="description" content="Gen AI Engineer & Full-Stack Developer" />
      </head>
      <body>
        <VersionProvider>
          <LayoutContent>{children}</LayoutContent>
        </VersionProvider>
      </body>
    </html>
  );
}
