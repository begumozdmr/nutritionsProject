import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'styles/style.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProviders } from 'context/contextProvider';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ContextProviders>
          <App />
        </ContextProviders>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
