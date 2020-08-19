import React, { FormEvent } from "react";

const tabulatorTypes: { value: string; name: string }[] = [
  {
    value: "0",
    name: "Any",
  },
  {
    value: "1",
    name: "Chords",
  },
  {
    value: "2",
    name: "Bass",
  },
  {
    value: "3",
    name: "Guitar",
  },
  {
    value: "4",
    name: "Player",
  },
];

const handleSubmit = (input: string, event: FormEvent) => {
  fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${input}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
  event.preventDefault();
};

function SelectForm() {
  const [selectedValue, setSelectedValue] = React.useState("0");
  const [searchedValue, setSearchedValue] = React.useState("");
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
        {tabulatorTypes.map((el) => (
          <option value={el.value} key={el.value}>
            {el.name}
          </option>
        ))}
      </select>
      <input type="submit" value="Search" />
    </form>
  );
}

export default SelectForm;