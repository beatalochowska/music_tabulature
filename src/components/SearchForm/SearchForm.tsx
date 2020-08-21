import React, { useState, FormEvent } from "react";
import { getTabs, recordToView } from "api/musicTab";
import { Tabulator, RecordResponse, RecordView } from "models/tabulator";
import { tabulatorTypes } from "dictionaries/tabulatorTypes";

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTabulatorType, setSelectedTabulatorType] = useState<Tabulator>(
    Tabulator.ANY
  );
  const [resultsList, setResultsList] = useState<RecordView[]>([]);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const results: Promise<RecordResponse[]> = getTabs(
      searchQuery,
      selectedTabulatorType
    );
    results.then((res) => {
      const preparedList: RecordView[] = res.map(recordToView);
      setResultsList(preparedList);
    });
  };

  return (
    <>
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
      <h2>Searched items list:</h2>
      <ul>
        {resultsList.map(({ artist, songTitle, tabTypes }) => (
          <li key={`${artist}${songTitle}${tabTypes}`}>
            {artist}, {songTitle}, {tabTypes.toString()}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchForm;
