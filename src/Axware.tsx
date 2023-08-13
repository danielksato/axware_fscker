import React, { useEffect, useState, type FC } from 'react';

import { AXWARE_URL, PROXY_URL } from './const';

import SortableTable from './components/SortableTable';
import 'normalize.css';
import './Axware.scss';

const Axware: FC<{ axUrl: string }> = ({ axUrl }) => {
  const [axHTML, setAxHTML] = useState(null as string | null);

  useEffect(() => {
    fetch(encodeURI(PROXY_URL + AXWARE_URL))
      .then((res) => res.text())
      .then((html) => {
        setAxHTML(html);
      });
  }, []);

  if (!axHTML) return null;

  const axwarePage = document.createElement('document');
  axwarePage.innerHTML = axHTML;

  const table = axwarePage.querySelector('table:last-of-type');
  const tableHTML = table?.innerHTML;

  if (!tableHTML) {
    return null;
  }

  return <SortableTable table={table} />;
};

const App: FC = () => {
  const [axUrl, setAxUrl] = useState(AXWARE_URL);
  const [url, setUrl] = useState(AXWARE_URL);

  useEffect(() => {
    document.title = `Hypothetical Axware Results for ${axUrl}`;
  }, [axUrl]);

  return (
    <main>
      <header>
        <h1>Hypothetical Axware Results</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setAxUrl(url);
          }}
        >
          <input
            onChange={(e) => setUrl(e.target.value)}
            id="axware-url"
            value={url}
          />
          <button type="submit">Change URL</button>
        </form>
      </header>
      <article>
        <Axware axUrl={axUrl} />
      </article>
    </main>
  );
};

export default App;
