"use client";

import Link from "next/link";
import type { Experience } from "@/types/experience";

export function ExperienceCard({ experience, favoriteIds, toggleFavorite }: {
  experience: Experience;
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
}) {
  const isFavorite = favoriteIds.includes(experience.id);

  return (
    <article className="experience-card">
      <div className="experience-card__media">
        <Link className="experience-card__visual" href={`/experiences/${experience.id}`} aria-label={`View ${experience.title}`}>
          <span className="experience-card__image" style={{ backgroundImage: `url(${experience.imageUrl})` }} />
          <span className="experience-card__category">{experience.category}</span>
        </Link>
        <button
          className="favorite-button"
          type="button"
          aria-label={`${isFavorite ? "Remove" : "Add"} ${experience.title} ${isFavorite ? "from" : "to"} favorites`}
          aria-pressed={isFavorite}
          onClick={() => toggleFavorite(experience.id)}
        >
          <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
        </button>
      </div>
      <div className="experience-card__body">
        <h2 className="experience-card__title"><Link href={`/experiences/${experience.id}`}>{experience.title}</Link></h2>
        <p className="experience-card__destination"><span aria-hidden="true">⌖</span> {experience.destination}</p>
        <div className="experience-card__footer">
          <span className="rating">{experience.rating.toFixed(1)}</span>
          <span className="price"><strong>${experience.price}</strong> / person</span>
        </div>
      </div>
    </article>
  );
}