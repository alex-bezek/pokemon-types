import React from 'react';
import PropTypes from 'prop-types';

import bug from './svgs/bug.svg';
import dark from './svgs/dark.svg';
import dragon from './svgs/dragon.svg';
import electric from './svgs/electric.svg';
import fairy from './svgs/fairy.svg';
import fighting from './svgs/fighting.svg';
import fire from './svgs/fire.svg';
import flying from './svgs/flying.svg';
import ghost from './svgs/ghost.svg';
import grass from './svgs/grass.svg';
import ground from './svgs/ground.svg';
import ice from './svgs/ice.svg';
import normal from './svgs/normal.svg';
import poison from './svgs/poison.svg';
import psychic from './svgs/psychic.svg';
import rock from './svgs/rock.svg';
import steel from './svgs/steel.svg';
import water from './svgs/water.svg';
import './icon.css'
import { TYPES } from '../constants';

const types = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
};

const propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

const defaultProps = {
  height: 100,
  width: 100,
}

const Icon = ({ type, height, width }) => {
  return (
    <div className={`icon ${type}`} style={{ height: `${height}px`, width:`${width}px` }}>
      <img src={ types[type] }/>
    </div>
  )
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
