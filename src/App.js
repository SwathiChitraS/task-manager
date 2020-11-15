import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout/Layout';
import TaskManager from './containers/TaskManager';
import NewTask from './containers/CreateNewTask';
import NewProject from './containers/CreateNewProject';
import Login from './containers/Login/Login';
// import AddItem from './containers/AddItem/AddItem';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Layout>
          {/* <TaskManager></TaskManager> */}
        <Switch>
          <Route exact path="/NewTask" component={NewTask}></Route>
          <Route exact path="/NewProject" component={NewProject}></Route>
          <Route path="/TaskManager" component={TaskManager}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
