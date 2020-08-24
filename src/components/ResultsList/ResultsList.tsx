import React from "react";
import { RecordView } from "models/tabulator";

interface ResultsListProps {
  list: RecordView[];
  searchStatus: ResponseStatus;
}

const titleMessage: { [key: string]: string } = {
  INIT: "Write something to start",
  FAILURE: "Couldn't load results",
  LOADING: "Loading...",
  SUCCESS: "Searched items list",
};

function ResultsList({ list, searchStatus }: ResultsListProps) {
  if (searchStatus === "ERROR") {
    return <p>error</p>;
  }
  return (
    <>
      <h2>{titleMessage[searchStatus]}</h2>
      {list.length === 0 && searchStatus === "SUCCESS" && (
        <p>No results found</p>
      )}
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
