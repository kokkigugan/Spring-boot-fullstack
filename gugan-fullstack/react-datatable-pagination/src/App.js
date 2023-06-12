import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import AddUser from "./components/AddUser";
import User from "./components/User";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="navbar-brand mx-auto">
          <a href="/users" className="navbar-brand">
            Tourist Database
          </a>
        </div>
        <div className="navbar-nav">
          <li className="nav-item">
            <Link to={"/users"} className="nav-link">
              <button>Users</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              <button>Add User</button>
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/users"]} component={UsersList} />
          <Route exact path="/add" component={AddUser} />
          <Route path="/users/:id" component={User} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
