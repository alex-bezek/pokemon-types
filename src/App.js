import React from 'react';
import TypesFactory from './types'
import './App.css'

const Grid = () => (
  <div className="wrapper">
    {
      TypesFactory.types().map(type => type.component())
    }
  </div>
);

const TableOfWeakness = () => (
  <table style={{width: "100%"}}>
    <tr>
      <th>Type</th>
      <th>Strengths</th>
      <th>Weakness</th>
      <th>Immunes</th>
    </tr>
    {
      TypesFactory.types().map(type => (
        <tr style={{ textAlign: 'center' }}>
          <td>{type.component()}</td>
          <td>{type.strongAgainst().map(strongType => strongType.component())}</td>
          <td>{type.weakAgainst().map(weakgType => weakgType.component())}</td>
          <td>{type.immuneAgainst().map(immuneType => immuneType.component())}</td>
      </tr>
      ))
    }
  </table>
)

const App = () => (
  // <Grid />
  <TableOfWeakness />
)


export default App;
