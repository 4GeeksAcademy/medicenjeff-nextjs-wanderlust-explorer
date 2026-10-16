import Link from "next/link";
import { experiences } from "@/data/experiences";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div
          aria-hidden="true"
          className="home-hero__image"
          style={{ backgroundImage: `url(${experiences[0].imageUrl})` }}
        />
        <div className="home-hero__content">
          <p className="eyebrow">A little further, a little deeper</p>
          <h1>
            Leave room for <em>the unexpected.</em>
          </h1>
          <p className="home-hero__summary">
            Find the people, places, and small moments that make a trip yours.
          </p>
          <Link className="button button--coral" href="/experiences">
            Explore all experiences <span aria-hidden="true">→</span>
          </Link>
          <p className="home-hero__note">
            {experiences.length} handpicked ways to see the world
          </p>
        </div>
      </section>
    </>
  );
}