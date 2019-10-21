export const outcomes = {
  'Rock': {
    'Paper': [0, 'Paper covers rock'],
    'Scissors': [1, 'Rock crushes scissors'],
    'Lizard': [1, 'Rock crushes lizard'],
    'Spock': [0, 'Spock vaproized rock']
  },
  'Paper': {
    'Scissors': [0, 'Scissors cut paper'],
    'Rock': [1, 'Paper covers rock'],
    'Lizard': [0, 'Lizard eats paper'],
    'Spock': [1, 'Paper disproves Spock']
  },
  'Scissors': {
    'Paper': [1, 'Scissors cuts paper'],
    'Rock': [0, 'Rock breaks scissors'],
    'Lizard': [1, 'Scissors decapitate lizard'],
    'Spock': [0, 'Spock smashes scissors']
  },
  'Lizard': {
    'Paper': [1, 'Lizard eats paper'],
    'Rock': [0, 'Rock crushes lizard'],
    'Scissors': [0, 'Scissors decapitate lizard'],
    'Spock': [1, 'Lizard poisons Spock']
  },
  'Spock': {
    'Paper': [0, 'Paper disproves Spock'],
    'Rock': [1, 'Spock vaporizes rock'],
    'Lizard': [0, 'Lizard poisons Spock'],
    'Scissors': [1, 'Spock smashes scissors']
  }
};

export const choices = Object.keys(outcomes);
