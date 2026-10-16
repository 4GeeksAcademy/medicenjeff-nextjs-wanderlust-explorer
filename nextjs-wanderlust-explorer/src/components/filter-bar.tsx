"use client";

import type { Filters } from "@/hooks/use-filtered-experiences";
import { SearchBar } from "@/components/search-bar";

export function FilterBar({ filters, categories, hasActiveFilters, onUpdate, onClear }: {
  filters: Filters;
  categories: readonly string[];
  hasActiveFilters: boolean;
  onUpdate: (nextFilters: Filters) => void;
  onClear: () => void;
}) {
  return (
    <div className="filter-bar">
      <SearchBar
        id="experience-search"
        label="Search by title"
        value={filters.query}
        placeholder="Try “sunrise” or “market”"
        onChange={(query) => onUpdate({ ...filters, query })}
      />
      <div className="filter-field">
        <label htmlFor="category-filter">Category</label>
        <select id="category-filter" value={filters.category} onChange={(event) => onUpdate({ ...filters, category: event.target.value })}>
          <option value="">All categories</option>
          {categories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
      </div>
      <SearchBar
        id="destination-filter"
        label="City or country"
        value={filters.destination}
        placeholder="Try “Kyoto” or “Peru”"
        onChange={(destination) => onUpdate({ ...filters, destination })}
      />
      <button className="clear-filters" type="button" disabled={!hasActiveFilters} onClick={onClear}>Clear filters</button>
    </div>
  );
}