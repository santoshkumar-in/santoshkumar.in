"use client";
import { AboutPage } from "../../components/AboutPage";
import { useVersion } from "../../lib/VersionContext";
import { getColors } from "../../lib/config";

export default function About() {
  const { version } = useVersion();
  const C = getColors(version);

  return <AboutPage version={version} C={C} />;
}
