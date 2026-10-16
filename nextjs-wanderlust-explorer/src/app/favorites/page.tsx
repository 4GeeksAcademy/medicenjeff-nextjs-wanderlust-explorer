"use client";

import Link from "next/link";
import { ExperienceGrid } from "@/components/experience-grid";
import { useFavorites } from "@/components/favorites-provider";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <section className="content-page favorites-page">
      <header className="page-heading">
        <p className="eyebrow">Your personal shortlist</p>
        <h1>Saved for someday.</h1>
        <p>Keep the experiences you love close while you plan your next escape.</p>
      </header>
      {favoriteExperiences.length ? (
        <ExperienceGrid experiences={favoriteExperiences} className="favorites-grid" />
      ) : (
        <div className="empty-state">
          <h2>Your list is waiting to be made</h2>
          <p>Tap the heart on any experience to save it here.</p>
          <Link className="button button--coral" href="/experiences">Explore experiences <span aria-hidden="true">→</span></Link>
        </div>
      )}
    </section>
  );
}