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
