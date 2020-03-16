import React, { useEffect } from 'react';
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
  <table style={{ width: "100%" }}>
    <tbody>
      <tr>
        <th>Type</th>
        <th>Strengths</th>
        <th>Weakness</th>
        <th>Immunes</th>
      </tr>
      {
        TypesFactory.types().map(type => (
          <tr style={{ textAlign: 'center' }} key={type.id()}>
            <td>{type.component()}</td>
            <td>{type.strongAgainst().map(strongType => strongType.component())}</td>
            <td>{type.weakAgainst().map(weakType => weakType.component())}</td>
            <td>{type.immuneAgainst().map(immuneType => immuneType.component())}</td>
        </tr>
        ))
      }
    </tbody>
  </table>
)

const App = () => (
  // <Grid />
  <TableOfWeakness />
  // <Graph />
)


export default App;
