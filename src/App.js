import React from "react";
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
              path="/profile"
              render={(props) => <ProfilePage {...props} />}
            />
            <Redirect to="/profile" />
            <Redirect from="/" to="/profile" />
          </Switch>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
