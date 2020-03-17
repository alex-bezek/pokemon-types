import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TypesFactory from './types';
// import MyGraph from './Graph';
import Grid from './Grid';
import Table from './Table';
import './App.css';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/grid">Grid</Link>
        </li>
        <li>
          <Link to="/table">Weakness/Strength Table</Link>
        </li>
        <li>
          <Link to="/my-graph">D3 Graph</Link>
        </li>
      </ul>
    </nav>
    <Switch>
    <Route path="/grid">
      <Grid />
    </Route>
    <Route path="/table">
      <Table />
    </Route>
    <Route path="/my-graph">
      {/* <MyGraph
        height="900"
        width="1900"
        linkDistance={200}
        forceStrength={-2000}
        links={links}
        nodes={nodes}
      /> */}
      </Route>
    </Switch>
  </Router>
)


export default App;
