"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

type FavoritesContextValue = {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  function toggleFavorite(id: string) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((currentId) => currentId !== id)
        : [...currentIds, id],
    );
  }

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      <SiteHeader favoriteCount={favoriteIds.length} />
      {children}
      <footer className="site-footer">
        <div className="site-footer__inner">
          <Link className="brand" href="/" aria-label="Wanderlust Explorer home">
            <span className="brand__mark" aria-hidden="true">W</span>
            <span className="brand__name">Wanderlust</span>
          </Link>
          <span>Made for the stories you bring back.</span>
        </div>
      </footer>
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}