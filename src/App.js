import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
