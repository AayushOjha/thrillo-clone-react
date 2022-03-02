import React from "react";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutPage/AboutUs";

// Apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default function AppX() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/About" element={<AboutUs />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
