"use client";

import { useMemo, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Experience } from "@/types/experience";

export type Filters = { query: string; category: string; destination: string };

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function firstParam(value: string | string[] | null | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

/** Encapsula la lógica de filtrado: lectura de query params, resultados y escritura de la URL. */
export function useFilteredExperiences(experiences: Experience[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const filters: Filters = {
    query: firstParam(searchParams.get("q")),
    category: firstParam(searchParams.get("category")),
    destination: firstParam(searchParams.get("destination")),
  };

  const visibleExperiences = useMemo(() => {
    const titlePattern = filters.query.trim() ? new RegExp(escapeRegExp(filters.query.trim()), "i") : null;
    const destinationPattern = filters.destination.trim() ? new RegExp(escapeRegExp(filters.destination.trim()), "i") : null;

    return experiences.filter((experience) =>
      (!titlePattern || titlePattern.test(experience.title)) &&
      (!filters.category || experience.category === filters.category) &&
      (!destinationPattern || destinationPattern.test(experience.destination)),
    );
  }, [experiences, filters.query, filters.category, filters.destination]);

  function updateFilters(nextFilters: Filters) {
    const params = new URLSearchParams(searchParams.toString());

    if (nextFilters.query.trim()) params.set("q", nextFilters.query.trim());
    else params.delete("q");

    if (nextFilters.category) params.set("category", nextFilters.category);
    else params.delete("category");

    if (nextFilters.destination.trim()) params.set("destination", nextFilters.destination.trim());
    else params.delete("destination");

    const queryString = params.toString();
    startTransition(() => router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false }));
  }

  return { filters, visibleExperiences, isPending, updateFilters };
}