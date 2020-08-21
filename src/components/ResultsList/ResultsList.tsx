import React from "react";
import { RecordView } from "models/tabulator";

interface ResultsListProps {
  list: RecordView[];
}

function ResultsList({ list }: ResultsListProps) {
  return (
    <>
      <h2>Searched items list:</h2>
      <ul>
        {list.map(({ artist, songTitle, tabTypes }) => (
          <li key={`${artist}${songTitle}${tabTypes}`}>
            {artist}, {songTitle}, {tabTypes.toString()}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ResultsList;
