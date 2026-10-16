import { Suspense } from "react";
import { ExperienceExplorer } from "@/components/experience-explorer";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<p className="content-page explorer-content">Loading experiences…</p>}>
      <ExperienceExplorer experiences={experiences} />
    </Suspense>
  );
}