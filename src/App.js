import React from 'react';
import Login from "./components/screens/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/styles.css";
function App() {
  return (
      <>
        <div>
          <Switch>
            <Route path={"/:route"} exact component={Login} />
          </Switch>
        </div>
      </>
  );
}

export default App;
