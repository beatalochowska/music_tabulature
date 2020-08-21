import { RecordResponse, Tabulator, RecordView } from "models/tabulator";

export const getTabs = async (
  query: string,
  tabulator: Tabulator
): Promise<RecordResponse[]> => {
  let apiURL = `http://www.songsterr.com/a/ra/songs.json?pattern=${query}`;

  if (tabulator !== Tabulator.ANY) {
    apiURL = `${apiURL}&track=${tabulator}`;
  }

  return (await fetch(apiURL)).json();
};

export const recordToView = ({
  artist,
  title,
  tabTypes,
}: RecordResponse): RecordView => {
  return {
    artist: artist.name,
    songTitle: title,
    tabTypes,
  };
};
