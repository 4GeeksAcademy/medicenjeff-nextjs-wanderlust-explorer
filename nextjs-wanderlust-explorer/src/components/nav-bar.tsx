"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar({ favoriteCount }: { favoriteCount: number }) {
  const pathname = usePathname();
  const onExperiences = pathname.startsWith("/experiences");

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link className="site-nav__link" href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
      <Link className="site-nav__link" href="/experiences" aria-current={onExperiences ? "page" : undefined}>Explore</Link>
      <Link className="site-nav__link" href="/favorites" aria-current={pathname === "/favorites" ? "page" : undefined}>
        Saved <span className="site-nav__count">{favoriteCount}</span>
      </Link>
      <Link className="site-nav__link" href="/profile" aria-current={pathname === "/profile" ? "page" : undefined}>Profile</Link>
    </nav>
  );
}