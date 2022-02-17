import React from 'react';
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"

// Apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})


export default function AppX() {
  return(
    <ApolloProvider client={client}>
      <App></App>
    </ApolloProvider>
  );
}
