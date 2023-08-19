import Router from '../sorucevap/src/Router';
import { NativeBaseProvider } from "native-base";


import { ApolloProvider } from '@apollo/client';
import client from '../sorucevap/src/Apollo'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <Router></Router>
      </NativeBaseProvider>
    </ApolloProvider>

  );
}
