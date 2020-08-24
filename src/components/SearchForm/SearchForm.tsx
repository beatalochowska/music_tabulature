import React, { useState, FormEvent } from "react";
import { Tabulator } from "models/tabulator";
import { tabulatorTypes } from "dictionaries/tabulatorTypes";
import styles from "./SearchForm.module.scss";

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
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <div className={styles.searchData}>
        <input
          className={styles.searchInput}
          type="text"
          name="name"
          placeholder="Type in to find your music"
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
        <select
          className={styles.searchSelect}
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
      </div>
      <button type="submit" value="Search" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
