import { notFound } from "next/navigation";
import { ExperienceDetail } from "@/components/experience-detail";
import { experiences } from "@/data/experiences";

// Prerender every experience detail page at build time. This makes the [id]
// segment known during prerendering, so client hooks in the shared layout
// (FavoritesProvider useState, NavBar usePathname) resolve without suspending.
export function generateStaticParams() {
  return experiences.map((experience) => ({ id: experience.id }));
}

export default async function ExperiencePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);
  if (!experience) notFound();
  return <ExperienceDetail experience={experience} />;
}