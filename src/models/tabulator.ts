export enum Tabulator {
  CHORDS = "CHORDS",
  TEXT_BASS_TAB = "TEXT_BASS_TAB",
  TEXT_GUITAR_TAB = "TEXT_GUITAR_TAB",
  PLAYER = "PLAYER",
  ANY = "ANY",
}

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
