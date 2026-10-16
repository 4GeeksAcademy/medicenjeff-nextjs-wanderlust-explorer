import type { Experience } from "@/types/experience";
import { ExperienceCard } from "@/components/experience-card";
import { useFavorites } from "@/components/favorites-provider";

export function ExperienceCards({ experiences, className = "" }: {
  experiences: Experience[];
  className?: string;
}) {
  const { favoriteIds, toggleFavorite } = useFavorites();

  if (!experiences.length) return null;

  return (
    <div className={`experience-grid ${className}`.trim()}>
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          favoriteIds={favoriteIds}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}