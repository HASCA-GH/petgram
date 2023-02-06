import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Context from './Context';

import App from './App';


// uri: https://petgram-server.midudev.now.sh/graphql
// const client = new ApolloClient({
//   uri: 'https://petgram-server-alejandroverita-alejandroverita.vercel.app/graphql',
//   cache: new InMemoryCache()
// })

// uri: 'https://petgram-server-alejandroverita-alejandroverita.vercel.app/graphql',

const client = new ApolloClient({
  uri: 'https://petgram-server-alejandroverita-alejandroverita.vercel.app/graphql',
  cache: new InMemoryCache(),
});

// const client = ...

// client
//   .query({
//     query: gql`
//       query getPhotos {
//         photos {
//           id
//           categoryId
//           src
//           likes
//           userId
//           liked
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// <React.StrictMode>
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
// </React.StrictMode>
);