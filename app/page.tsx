"use client";
import { HelloPage } from "../components/HelloPage";
import { useVersion } from "../lib/VersionContext";
import { getColors } from "../lib/config";
import { useRouter } from "next/navigation";

export default function Home() {
  const { version } = useVersion();
  const C = getColors(version);
  const router = useRouter();

  return <HelloPage onContactClick={() => router.push("/contact")} version={version} C={C} />;
}
