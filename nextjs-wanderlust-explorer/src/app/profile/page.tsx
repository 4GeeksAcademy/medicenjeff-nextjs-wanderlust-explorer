"use client";

import Link from "next/link";
import { useFavorites } from "@/components/favorites-provider";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <section className="content-page profile-page">
      <header className="profile-heading">
        <p className="eyebrow">A traveler, not a tourist</p>
        <h1>Your travel journal.</h1>
      </header>
      <div className="profile-overview">
        <div className="profile-person">
          <div className="profile-avatar" aria-hidden="true">AM</div>
          <div><h2>Alex Morgan</h2><p>Based in Portland, Oregon<br />Wandering since 2018</p></div>
        </div>
        <Link className="profile-stat" href="/favorites" aria-label={`${favoriteIds.length} saved experiences. View favorites`}>
          <strong>{favoriteIds.length}</strong><span>experiences saved</span>
        </Link>
      </div>
      <p className="profile-note">A good trip is made of details: the view from a quiet trail, a meal shared with strangers, the long way home. Keep collecting the ones that stay with you.</p>
    </section>
  );
}