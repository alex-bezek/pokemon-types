import React, { useState } from 'react';
import TypesFactory from './types';
import './Grid.css';

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const TypeIcon = ({ type, isFocused = false, onClick, ...customProps }) => (
  <div style={{ margin: 'auto' }}>
    {
      type.component({
        onClick: () => onClick(type.id()),
        isFocused,
        ...customProps,
      })
    }
  </div>
);

const SmallTypeIcon = ({ type, onClick }) => (
  <div style={{ marginLeft: '10px', marginRight: '10px', display: 'inline-block' }}>
    <TypeIcon type={type} onClick={onClick} width={50} height={50} />
  </div>
)

const TypeCard = ({ type, onClick }) => {
  if (type == undefined) return null;

  const strongAgainst = TypesFactory.find(type.id()).strongAgainst();
  const weakAgainst = TypesFactory.find(type.id()).weakAgainst();
  const immuneAgainst = TypesFactory.find(type.id()).immuneAgainst();
  const rowStyles = {
    // textAlign: 'left',
    // height: '60px',
    // lineHeight: '60px',

    // display: 'table-cell',
    // height: '200px',
    // border: '3px dashed #1c87c9',
    // verticalAlign: 'middle',

    display: 'inline-block',
    width: '100%',
    height: '65px',
    verticalAlign: 'middle',
    lineHeight: '65px',
    textAlign: 'center',
    border: '3px dashed #1c87c9',
  }
  return (
    <div className="type-card">
      <TypeIcon type={type} onClick={onClick} />
      <hr class="solid"></hr>
      <div style={rowStyles}>
        <span>Strong Against: </span>
        {strongAgainst.map(type => <SmallTypeIcon type={type} onClick={onClick} />)}
      </div>
      <div>
        <span>Weak Against: </span>
        {weakAgainst.map(type => <SmallTypeIcon type={type} onClick={onClick} />)}
      </div>
      <div>
        <span>Immune Against: </span>
        {immuneAgainst.map(type => <SmallTypeIcon type={type} onClick={onClick} />)}
      </div>
    </div>
  )
}

const Table = () => {
  const [selectedId, setSelectId] = useState();
  const onClick = (id) => { selectedId === id ? setSelectId() : setSelectId(id) }

  if (selectedId) {
    return <TypeCard type={TypesFactory.find(selectedId)} onClick={onClick} />;
  }

  return (
    <div className="grid">
      { TypesFactory.types().map(type => (<TypeIcon type={type} onClick={onClick} />)) }
    </div>
  )
}

export default Table;