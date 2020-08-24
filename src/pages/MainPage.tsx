import React, { useState } from "react";
import { SearchForm, ResultsList } from "components";
import { RecordView, Tabulator, RecordResponse } from "models/tabulator";
import { getTabs, recordToView } from "api/musicTab";

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
      <h1>Music Tabulators MainPage</h1>
      <SearchForm onSubmit={onSubmit} />
      <ResultsList list={resultsList} searchStatus={searchStatus} />
    </>
  );
}

export default MainPage;
