import React, { useState, FormEvent } from "react";
import { Tabulator } from "models/tabulator";
import { tabulatorTypes } from "dictionaries/tabulatorTypes";
import styles from "./SearchForm.module.scss";

interface SearchFormProps {
  onSubmit: (query: string, tabulatorType: Tabulator) => void;
  searchStatus: ResponseStatus;
}

function SearchForm({ onSubmit, searchStatus }: SearchFormProps) {
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
      <button
        type="submit"
        value="Search"
        className={styles.searchButton}
        disabled={searchStatus === "LOADING"}
      >
        <span>Search</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z" />
        </svg>
      </button>
    </form>
  );
}

export default SearchForm;
