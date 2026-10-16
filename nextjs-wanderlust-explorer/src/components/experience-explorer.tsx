"use client";

import type { Experience, ExperienceCategory } from "@/types/experience";
import { useFilteredExperiences } from "@/hooks/use-filtered-experiences";
import { FilterBar } from "@/components/filter-bar";
import { ExperienceCards } from "@/components/experience-cards";

const categories: ExperienceCategory[] = ["Adventure", "Culture", "Food", "Wellness", "Nature"];

export function ExperienceExplorer({ experiences }: { experiences: Experience[] }) {
  const { filters, visibleExperiences, isPending, updateFilters } = useFilteredExperiences(experiences);

  function clearFilters() {
    updateFilters({ query: "", category: "", destination: "" });
  }

  return (
    <>
      <div className="page-banner">
        <div className="page-heading">
          <p className="eyebrow">Small moments, big memories</p>
          <h1>Find your kind of elsewhere.</h1>
          <p>Thoughtful local experiences, made for curious people and unhurried days.</p>
        </div>
      </div>
      <section className="content-page explorer-content" aria-label="Browse experiences">
        <FilterBar
          filters={filters}
          categories={categories}
          hasActiveFilters={Boolean(filters.query || filters.category || filters.destination)}
          onUpdate={updateFilters}
          onClear={clearFilters}
        />
        <p className="results-meta" aria-live="polite">
          <span><strong>{visibleExperiences.length}</strong> experiences</span>
          {isPending ? <span>Updating results…</span> : <span>Curated for the curious</span>}
        </p>
        {visibleExperiences.length ? (
          <ExperienceCards experiences={visibleExperiences} className="experience-grid--explorer" />
        ) : (
          <div className="empty-state">
            <h2>No se encontraron resultados</h2>
            <p>Prueba con otro título, categoría o destino.</p>
            <button className="button button--coral" type="button" onClick={clearFilters}>Mostrar todas las experiencias</button>
          </div>
        )}
      </section>
    </>
  );
}