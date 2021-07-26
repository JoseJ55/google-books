import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/css/main.css"

import Home from "./pages/Home";
import { BookProvider } from "./bookContext";

function App() {
  return (
    <BookProvider>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </BookProvider>
  );
}

export default App;
