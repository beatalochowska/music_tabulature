import React, { useState } from "react";
import { SearchForm, ResultsList } from "components";
import { RecordView, Tabulator, RecordResponse } from "models/tabulator";
import { getTabs, recordToView } from "api/musicTab";
import styles from "./MainPage.module.scss";

function MainPage() {
  const [resultsList, setResultsList] = useState<RecordView[]>([]);
  const [searchStatus, setSearchStatus] = useState<ResponseStatus>("INIT");

  const onSubmit = (query: string, tabulatorType: Tabulator): void => {
    setSearchStatus("LOADING");
    const results: Promise<RecordResponse[]> = getTabs(query, tabulatorType);
    results
      .then((res) => {
        const preparedList: RecordView[] = res.map(recordToView);
        setSearchStatus("SUCCESS");
        setResultsList(preparedList);
      })
      .catch(() => {
        setSearchStatus("ERROR");
      });
  };

  return (
    <>
      <header className={styles.header}>
        <h1>Find your tabulators</h1>
      </header>
      <div className="container">
        <SearchForm onSubmit={onSubmit} searchStatus={searchStatus} />
        <ResultsList list={resultsList} searchStatus={searchStatus} />
      </div>
    </>
  );
}

export default MainPage;
