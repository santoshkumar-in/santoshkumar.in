"use client";
import { ContactPage } from "../../components/ContactPage";
import { useVersion } from "../../lib/VersionContext";
import { getColors } from "../../lib/config";

export default function Contact() {
  const { version } = useVersion();
  const C = getColors(version);

  return <ContactPage version={version} C={C} />;
}
