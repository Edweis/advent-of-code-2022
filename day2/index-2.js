import fs from 'fs';

const LOSE_POINTS = {
    'A': 3,
    'B': 1,
    'C': 2
}
const WIN_POINTS = {
    'A': 2,
    'B': 3,
    'C': 1
}
const DRAW_POINTS = {
    'A': 1,
    'B': 2,
    'C': 3
}
const HAND_POINTS = {
    'X': LOSE_POINTS,
    'Y': DRAW_POINTS,
    'Z': WIN_POINTS
}

const OUTCOME_POINTS = {
    'X': 0,
    'Y': 3,
    'Z': 6,
}

const input = fs.readFileSync('./input.txt').toString()
const result = input.split('\n').map(line => {
    const [you, me] = line.split(' ');
    return HAND_POINTS[me][you] + OUTCOME_POINTS[me]
}).reduce((acc, val) => acc + val, 0);

console.log(result)
