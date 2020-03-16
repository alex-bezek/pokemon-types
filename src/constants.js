const TYPES = {
  BUG: 'bug',
  DARK: 'dark',
  DRAGON: 'dragon',
  ELECTRIC: 'electric',
  FAIRY: 'fairy',
  FIGHTING: 'fighting',
  FIRE: 'fire',
  FLYING: 'flying',
  GHOST: 'ghost',
  GRASS: 'grass',
  GROUND: 'ground',
  ICE: 'ice',
  NORMAL: 'normal',
  POISON: 'poison',
  PSYCHIC: 'psychic',
  ROCK: 'rock',
  STEEL: 'steel',
  WATER: 'water',
};

const TYPES_DATA = {
  [TYPES.BUG]: {
    weakness: [TYPES.FIRE, TYPES.FIGHTING, TYPES.POISON, TYPES.FLYING, TYPES.GHOST, TYPES.STEEL, TYPES.FAIRY],
    strengths: [TYPES.GRASS, TYPES.PSYCHIC, TYPES.DARK],
    immunes: []
  },
  [TYPES.DARK]: {
    weakness: [TYPES.FIGHTING, TYPES.DARK, TYPES.FAIRY],
    strengths: [TYPES.PSYCHIC, TYPES.GHOST],
    immunes: [],
  },
  [TYPES.DRAGON]: {
    weakness: [TYPES.STEEL],
    strengths: [TYPES.DRAGON],
    immunes: [TYPES.FAIRY],
  },
  [TYPES.ELECTRIC]: {
    weakness: [TYPES.ELECTRIC, TYPES.GRASS, TYPES.DRAGON],
    strengths: [TYPES.WATER, TYPES.FLYING],
    immunes: [TYPES.GROUND],
  },
  [TYPES.FAIRY]: {
    weakness: [TYPES.FIRE, TYPES.POISON, TYPES.STEEL],
    strengths: [TYPES.FIGHTING, TYPES.DRAGON, TYPES.DARK],
    immunes: [],
  },
  [TYPES.FIGHTING]: {
    weakness: [TYPES.POISON, TYPES.FLYING, TYPES.PSYCHIC, TYPES.BUG, TYPES.FAIRY],
    strengths: [TYPES.ICE, TYPES.ROCK, TYPES.DARK, TYPES.STEEL],
    immunes: [TYPES.GHOST],
  },
  [TYPES.FIRE]: {
    weakness: [TYPES.FIRE, TYPES.WATER, TYPES.ROCK, TYPES.DRAGON],
    strengths: [TYPES.GRASS, TYPES.ICE, TYPES.BUG, TYPES.STEEL],
    immunes: [],
  },
  [TYPES.FLYING]: {
    weakness: [TYPES.ELECTRIC, TYPES.ROCK, TYPES.STEEL],
    strengths: [TYPES.GRASS, TYPES.FIGHTING, TYPES.BUG],
    immunes: [],
  },
  [TYPES.GHOST]: {
    weakness: [TYPES.DARK],
    strengths: [TYPES.PSYCHIC, TYPES.GHOST],
    immunes: [TYPES.NORMAL],
  },
  [TYPES.GRASS]: {
    weakness: [TYPES.FIRE, TYPES.GRASS, TYPES.POISON, TYPES.FLYING, TYPES.BUG, TYPES.DRAGON, TYPES.STEEL],
    strengths: [TYPES.WATER, TYPES.GROUND, TYPES.ROCK],
    immunes: [],
  },
  [TYPES.GROUND]: {
    weakness: [TYPES.GRASS, TYPES.BUG],
    strengths: [TYPES.FIRE, TYPES.ELECTRIC, TYPES.POISON, TYPES.ROCK, TYPES.STEEL],
    immunes: [TYPES.FLYING],
  },
  [TYPES.ICE]: {
    weakness: [TYPES.FIRE, TYPES.WATER, TYPES.ICE, TYPES.STEEL],
    strengths: [TYPES.GRASS, TYPES.GROUND, TYPES.FLYING, TYPES.DRAGON],
    immunes: [],
  },
  [TYPES.NORMAL]: {
    weakness: [TYPES.ROCK, TYPES.STEEL],
    strengths: [],
    immunes: [TYPES.GHOST],
  },
  [TYPES.POISON]: {
    weakness: [TYPES.POISON, TYPES.GROUND, TYPES.ROCK, TYPES.GHOST],
    strengths: [TYPES.GRASS, TYPES.FAIRY],
    immunes: [TYPES.STEEL],
  },
  [TYPES.PSYCHIC]: {
    weakness: [TYPES.PSYCHIC, TYPES.STEEL],
    strengths: [TYPES.FIGHTING, TYPES.POISON],
    immunes: [TYPES.DARK],
  },
  [TYPES.ROCK]: {
    weakness: [TYPES.FIGHTING, TYPES.GROUND, TYPES.STEEL],
    strengths: [TYPES.FIRE, TYPES.ICE, TYPES.FLYING, TYPES.BUG],
    immunes: [],
  },
  [TYPES.STEEL]: {
    weakness: [TYPES.FIRE, TYPES.WATER, TYPES.ELECTRIC, TYPES.STEEL],
    strengths: [TYPES.ICE, TYPES.ROCK, TYPES.FAIRY],
    immunes: [],
  },
  [TYPES.WATER]: {
    weakness: [TYPES.WATER, TYPES.GRASS, TYPES.DRAGON],
    strengths: [TYPES.FIRE, TYPES.GROUND, TYPES.ROCK],
    immunes: [],
  },
}

export {
  TYPES,
  TYPES_DATA,
}
