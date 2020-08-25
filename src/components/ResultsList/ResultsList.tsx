import React from "react";
import { RecordView, Tabulator } from "models/tabulator";
import styles from "./ResultsList.module.scss";
import { tabulatorsConverter, titleMessage } from "dictionaries/tabulatorTypes";

interface ResultsListProps {
  list: RecordView[];
  searchStatus: ResponseStatus;
}

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
    <section className={styles.searchResults}>
      {searchStatus === "LOADING" && <div className={styles.spinner}></div>}
      {searchStatus === "INIT" && <h2>{titleMessage[searchStatus]}</h2>}

      {list.length === 0 && searchStatus === "SUCCESS" && (
        <p>Sorry, we didn't find your tabulators :( </p>
      )}

      <table>
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
    </section>
  );
}

export default ResultsList;
