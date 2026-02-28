"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { PortfolioVersion } from "../types";

interface VersionContextType {
  version: PortfolioVersion;
  setVersion: (v: PortfolioVersion) => void;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

export function VersionProvider({ children }: { children: ReactNode }) {
  const [version, setVersion] = useState<PortfolioVersion>("genai");

  return (
    <VersionContext.Provider value={{ version, setVersion }}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  const context = useContext(VersionContext);
  if (!context) {
    throw new Error("useVersion must be used within VersionProvider");
  }
  return context;
}
