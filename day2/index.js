import fs from 'fs';

const POINTS = { 'X': 1, 'Y': 2, 'Z': 3, };
const ME_LOSE_VS = {
    'X': 'C',
    'Y': 'A',
    'Z': 'B'
}

const ME_DRAW_VS = {
    'X': 'A',
    'Y': 'B',
    'Z': 'C'
}

const input = fs.readFileSync('./input.txt').toString()
const result = input.split('\n').map(line => {
    const [you, me] = line.split(' ');
    const meValue = POINTS[me]
    let points = 0;
    if (ME_LOSE_VS[me] === you) points = 6
    if (ME_DRAW_VS[me] === you) points = 3
    return meValue + points;
}).reduce((acc, val) => acc + val, 0)

console.log(result)
