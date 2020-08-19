import React from "react";

const tabulatorTypes: { value: string; name: string }[] = [
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

function SelectForm() {
  const [selectedValue, setSelectedValue] = React.useState("1");
  return (
    <form>
      <label>
        Search for artist or music piece:
        <input type="text" name="name" />
      </label>
      <select
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
      >
        {tabulatorTypes.map((el) => (
          <option value={el.value}>{el.name}</option>
        ))}
      </select>
      <input type="submit" value="Search" />
    </form>
  );
}

export default SelectForm;
