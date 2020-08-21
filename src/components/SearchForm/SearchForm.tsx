import React, { useState, FormEvent } from "react";
import { Tabulator } from "models/tabulator";
import { tabulatorTypes } from "dictionaries/tabulatorTypes";

interface SearchFormProps {
  onSubmit: (query: string, tabulatorType: Tabulator) => void;
}

function SearchForm({ onSubmit }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTabulatorType, setSelectedTabulatorType] = useState<Tabulator>(
    Tabulator.ANY
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(searchQuery, selectedTabulatorType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search for artist or music piece:
        <input
          type="text"
          name="name"
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
      </label>
      <select
        value={selectedTabulatorType}
        onChange={(event) =>
          setSelectedTabulatorType(event.target.value as Tabulator)
        }
      >
        {tabulatorTypes.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      <button type="submit" value="Search">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
