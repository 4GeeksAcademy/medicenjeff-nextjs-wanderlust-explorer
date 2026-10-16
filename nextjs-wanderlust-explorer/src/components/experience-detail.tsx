"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Experience } from "@/types/experience";
import { useFavorites } from "@/components/favorites-provider";

export function ExperienceDetail({ experience }: { experience: Experience }) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(experience.id);

  // Mantener el título del documento sincronizado con la experiencia mostrada.
  useEffect(() => {
    document.title = `${experience.title} | Wanderlust Explorer`;
    return () => { document.title = "Wanderlust Explorer | Find your way out there"; };
  }, [experience.title]);

  return (
    <article className="detail-page">
      <Link className="breadcrumb" href="/experiences">← All experiences</Link>
      <div className="detail-hero">
        <div className="detail-hero__image" role="img" aria-label={experience.title} style={{ backgroundImage: `url(${experience.imageUrl})` }} />
        <span className="detail-hero__label">{experience.category}</span>
      </div>
      <div className="detail-layout">
        <div className="detail-copy">
          <h1>{experience.title}</h1>
          <div className="detail-copy__meta">
            <span>{experience.destination}</span>
            <span className="rating">{experience.rating.toFixed(1)} guest rating</span>
          </div>
          <p className="detail-copy__description">{experience.description}</p>
          <div className="detail-facts">
            <div className="detail-fact"><span>Destination</span><strong>{experience.destination}</strong></div>
            <div className="detail-fact"><span>Category</span><strong>{experience.category}</strong></div>
            <div className="detail-fact"><span>Rating</span><strong>{experience.rating.toFixed(1)} / 5</strong></div>
          </div>
        </div>
        <aside className="detail-aside" aria-label="Experience price and save action">
          <div><p className="detail-aside__price">${experience.price}</p><p className="detail-aside__note">per person</p></div>
          <button className="favorite-button" type="button" aria-pressed={isFavorite} onClick={() => toggleFavorite(experience.id)}>
            <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>{isFavorite ? "Saved" : "Save experience"}
          </button>
        </aside>
      </div>
    </article>
  );
}