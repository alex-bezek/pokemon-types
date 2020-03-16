import React from 'react';
import Icon from './icons/icon'
import { TYPES, TYPES_DATA } from './constants';

class Type {
  constructor(type) {
    if(!Object.values(TYPES).includes(type)) {
      throw `Type ${type} not a supported type`;
    }

    this.type = type;
  }

  component(customProps) {
    return <Icon key={this.type} {...customProps} type={this.type} />
  }

  immuneAgainst() {
    return TYPES_DATA[this.type].immunes.map(type => TypesFactory.find(type))
  }

  weakAgainst() {
    return TYPES_DATA[this.type].weakness.map(type => TypesFactory.find(type))
  }

  strongAgainst() {
    return TYPES_DATA[this.type].strengths.map(type => TypesFactory.find(type))
  }

  id() {
    return this.type;
  }
}


let typeStore = {};
Object.values(TYPES).forEach(type => { typeStore[type] = (new Type(type)); })

class TypesFactory {
  static types() {
    return Object.values(typeStore);
  }

  static find(type) {
    return typeStore[type];
  }
}


export default TypesFactory;
