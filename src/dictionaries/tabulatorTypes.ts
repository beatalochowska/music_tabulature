import { Tabulator } from "models/tabulator";

export const tabulatorTypes: Dictionary<Tabulator>[] = [
  {
    value: Tabulator.CHORDS,
    label: "Chords",
  },
  {
    value: Tabulator.TEXT_BASS_TAB,
    label: "Bass",
  },
  {
    value: Tabulator.TEXT_GUITAR_TAB,
    label: "Guitar",
  },
  {
    value: Tabulator.PLAYER,
    label: "Player",
  },
  {
    value: Tabulator.ANY,
    label: "Any",
  },
];

export const titleMessage: { [key: string]: string } = {
  INIT: "Search for your favourite music",
  FAILURE: "Couldn't load results",
  LOADING: "Loading...",
  SUCCESS: "Searched items list",
};

export const tabulatorsConverter: { [key: string]: string } = {
  CHORDS: "chords",
  TEXT_BASS_TAB: "bass",
  TEXT_GUITAR_TAB: "guitar",
  PLAYER: "player",
};
