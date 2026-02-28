"use client";
import { ProjectsPage } from "../../components/ProjectsPage";
import { useVersion } from "../../lib/VersionContext";
import { getColors } from "../../lib/config";

export default function Projects() {
  const { version } = useVersion();
  const C = getColors(version);

  return <ProjectsPage version={version} C={C} />;
}
