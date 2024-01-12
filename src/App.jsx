import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch';

const searchClient = algoliasearch('undefined', 'undefined');

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      {/* Widgets */}
    </InstantSearch>
  );
}
