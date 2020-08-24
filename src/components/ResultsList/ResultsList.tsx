import React from "react";
import { RecordView } from "models/tabulator";
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

function ResultsList({ list, searchStatus }: ResultsListProps) {
  if (searchStatus === "ERROR") {
    return <p>Sorry, something went wrong :( Please try again later.</p>;
  }
  return (
    <>
      <div className={styles.spinner}></div>
      {searchStatus === "LOADING" && <div className={styles.spinner}></div>}
      {searchStatus === "INIT" && <h2>{titleMessage[searchStatus]}</h2>}
      {searchStatus === "SUCCESS" && <h2>{titleMessage[searchStatus]}</h2>}
      {list.length === 0 && searchStatus === "SUCCESS" && (
        <p>No results found</p>
      )}
      <ul>
        {list.map(({ artist, songTitle, tabTypes }, id) => (
          <table key={id}>
            <tbody>
              <tr>
                <td>{artist}</td>
                <td>{songTitle}</td>
                {tabTypes.map((el, id) => (
                  <td key={id}>{el}</td>
                ))}
              </tr>
            </tbody>
          </table>
        ))}
      </ul>
    </>
  );
}

export default ResultsList;
