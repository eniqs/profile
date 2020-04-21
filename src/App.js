import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProfilePage from "pages/ProfilePage.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Switch>
            <Route
              path="/index"
              render={(props) => <ProfilePage {...props} />}
            />
            <Redirect to="/index" />
            <Redirect from="/" to="/index" />
          </Switch>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
