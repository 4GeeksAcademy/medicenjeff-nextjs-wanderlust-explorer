"use client";

import Link from "next/link";
import { Suspense } from "react";
import { NavBar } from "@/components/nav-bar";

/**
 * Static placeholder rendered by <Suspense> while NavBar resolves the
 * pathname. In Next.js 16, usePathname() suspends during prerendering on
 * routes with unknown dynamic params (e.g. /experiences/[id]). Wrapping the
 * component that reads the pathname in a Suspense boundary with a fallback
 * keeps the rest of the layout prerendered (docs: use-pathname).
 */
function NavFallback({ favoriteCount }: { favoriteCount: number }) {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link className="site-nav__link" href="/">Home</Link>
      <Link className="site-nav__link" href="/experiences">Explore</Link>
      <Link className="site-nav__link" href="/favorites">
        Saved <span className="site-nav__count">{favoriteCount}</span>
      </Link>
      <Link className="site-nav__link" href="/profile">Profile</Link>
    </nav>
  );
}

export function SiteHeader({ favoriteCount }: { favoriteCount: number }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Wanderlust Explorer home">
          <span className="brand__mark" aria-hidden="true">W</span>
          <span className="brand__name">Wanderlust</span>
        </Link>
        <Suspense fallback={<NavFallback favoriteCount={favoriteCount} />}>
          <NavBar favoriteCount={favoriteCount} />
        </Suspense>
      </div>
    </header>
  );
}