export enum Tabulator {
  CHORDS = "CHORDS",
  TEXT_BASS_TAB = "TEXT_BASS_TAB",
  TEXT_GUITAR_TAB = "TEXT_GUITAR_TAB",
  PLAYER = "PLAYER",
  ANY = "ANY",
}

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

export interface RecordResponse {
  id: number;
  type: string;
  title: string;
  artist: {
    id: number;
    type: string;
    nameWithoutThePrefix: string;
    useThePrefix: boolean;
    name: string;
  };
  chordsPresent: boolean;
  tabTypes: Tabulator[];
}

export interface RecordView {
  artist: string;
  songTitle: string;
  tabTypes: Tabulator[];
}
