import React from "react";
import Button from '@material-ui/core/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Profile='/Profile';

export default function HomeComponent() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/Perfil">Perfil</Link></li>
          <li><Link to="/NewTask">New Task</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/Perfil"><Perfil /></Route>
          <Route path="/NewTask"><NewTask /></Route>
          <Route path="/dashboard"><Dashboard />
          </Route>
        </Switch>
        <Button type="submit" variant="contained" color="black" className="submit" component={Link} to={Profile}>
            volver
        </Button>
      </div>
    </Router>
  );
}

function Perfil() {
  return (
    <h2>Perfil</h2>
  );
}

function NewTask() {
  return (
    <h2>New Task</h2>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
