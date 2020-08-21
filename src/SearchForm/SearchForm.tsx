import React, { useState, FormEvent } from "react";
import { getTabs, recordToView } from "api/musicTab";
import { Tabulator, RecordResponse, tabulatorTypes } from "models/tabulator";

const handleSubmit = (input: string, event: FormEvent) => {
  const results: Promise<RecordResponse[]> = getTabs(input, Tabulator.ANY);

  results.then((res) => console.log(res.map(recordToView)));
  event.preventDefault();
};

function SearchForm() {
  const [selectedValue, setSelectedValue] = useState("0");
  const [searchedValue, setSearchedValue] = useState("");
  return (
    <form onSubmit={(event) => handleSubmit(searchedValue, event)}>
      <label>
        Search for artist or music piece:
        <input
          type="text"
          name="name"
          value={searchedValue}
          onChange={(event) => {
            setSearchedValue(event.target.value);
          }}
        />
      </label>
      <select
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
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
