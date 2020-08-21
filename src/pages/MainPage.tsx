import React, { useState } from "react";
import { SearchForm, ResultsList } from "components";
import { RecordView, Tabulator, RecordResponse } from "models/tabulator";
import { getTabs, recordToView } from "api/musicTab";

function MainPage() {
  const [resultsList, setResultsList] = useState<RecordView[]>([]);

  const onSubmit = (query: string, tabulatorType: Tabulator): void => {
    const results: Promise<RecordResponse[]> = getTabs(query, tabulatorType);
    results.then((res) => {
      const preparedList: RecordView[] = res.map(recordToView);
      setResultsList(preparedList);
    });
  };

  return (
    <>
      <h1>Music Tabulators MainPage</h1>
      <SearchForm onSubmit={onSubmit} />
      <ResultsList list={resultsList} />
    </>
  );
}

export default MainPage;
