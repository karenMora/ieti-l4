import React, { Component } from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import { Login }  from './App/LoginComponet/Login';
import Profile from './App/ProfileComponent/Profile';
import { RegisterUser } from './App/RegisterUser/RegisterUser';
import { NewTask } from './App/NewTask/NewTask';
import HomeComponent from './App/HomeComponent/HomeComponent';
import TaskFilters from './App/NewTask/TaskFilters';
//import Profile from '.App/ProfileComponent/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: '', priority: 0, dueDate: moment()};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginView}/>
          <Route exact path="/Profile" component={ProfileView}/>
          <Route exact path="/RegisterUser" component={RegisterUserView}/>
          <Route exact path="/NewTask" component={NewTaskView}/>
          <Route exact path="/HomeComponent" component={HomeComponentView}/>
          <Route exact path="/TaskFilters" component={TaskFiltersView}/>
        </div>
      </Router>
    );
  }

}

const LoginView = () => (
  <div>
    <Login />
  </div>
);

const ProfileView = () => (
  <div><Profile /></div>
);

const RegisterUserView = () => (
  <div><RegisterUser /></div>
);

const NewTaskView = () => (
  <div><NewTask /></div>
);

const HomeComponentView = () => (
  <div><HomeComponent /></div>
);

const TaskFiltersView = () => (
  <div><TaskFilters /></div>
);

export default App;
