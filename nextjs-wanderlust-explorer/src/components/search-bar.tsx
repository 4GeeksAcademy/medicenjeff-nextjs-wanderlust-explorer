"use client";

export function SearchBar({ id, label, value, placeholder, onChange }: {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="filter-field filter-search">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="search" placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}