import React from "react";
import Header from "./elements/Header";
import { Home } from "./Home";
import { Router } from "@reach/router";

import { Movie } from "./Movie";
import { NotFound } from "./NotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />
      </Router>
    </div>
  );
};

export default App;
