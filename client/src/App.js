import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import CreateUser from "./pages/CreateUser";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import UserLogin from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/login" component={UserLogin} /> */}
          {/* <Route exact path="/userlogin/:id" component={UserPage} /> */}
          <Route exact path="/userlogin/" component={UserLogin} />
          <Route exact path="/createuser/" component={CreateUser} />
          <Route exact path="/adminlogin/" component={AdminPage} />
          <Route exact path="/userpage/" component={UserPage} />
          <Route exact path="/userpage/:id" component={UserPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
