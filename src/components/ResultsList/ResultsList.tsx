import React from "react";
import { RecordView, Tabulator } from "models/tabulator";
import styles from "./ResultsList.module.scss";

interface ResultsListProps {
  list: RecordView[];
  searchStatus: ResponseStatus;
}

const titleMessage: { [key: string]: string } = {
  INIT: "Search for your favourite music",
  FAILURE: "Couldn't load results",
  LOADING: "Loading...",
  SUCCESS: "Searched items list",
};

const tabulatorsConverter: { [key: string]: string } = {
  CHORDS: "chords",
  TEXT_BASS_TAB: "bass",
  TEXT_GUITAR_TAB: "guitar",
  PLAYER: "player",
};

const renderSingleType = (tab: Tabulator) => {
  let renderedName = tabulatorsConverter[tab];
  return (
    <li className={styles[renderedName]} key={tab}>
      {renderedName}
    </li>
  );
};

function ResultsList({ list, searchStatus }: ResultsListProps) {
  if (searchStatus === "ERROR") {
    return <p>Sorry, something went wrong :( Please try again later.</p>;
  }

  return (
    <div className={styles.searchResults}>
      {searchStatus === "LOADING" && <div className={styles.spinner}></div>}
      {searchStatus === "INIT" && (
        <h2 className={styles.searchTitle}>{titleMessage[searchStatus]}</h2>
      )}

      {list.length === 0 && searchStatus === "SUCCESS" && (
        <p>Sorry, we didn't find your tabulators :( </p>
      )}

      <table className={styles.results}>
        <tbody>
          {list.map(({ artist, songTitle, tabTypes }, id) => (
            <tr key={id} className={styles.searchRecord}>
              <td className={styles.songTitle}>{songTitle}</td>
              <td className={styles.artist}>{artist}</td>
              <td className={styles.tabulators}>
                <ul>{tabTypes.map(renderSingleType)}</ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsList;
