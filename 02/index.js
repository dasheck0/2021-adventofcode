const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const lines = input.split('\n');

const horizontal = lines
    .filter(line => line.startsWith('forward'))
    .map(line => parseInt(line.split(' ')[1], 10))
    .reduce((a, b) => a + b, 0);

const depth = lines
    .filter(line => line.startsWith('up') || line.startsWith('down'))
    .map(line => parseInt(line.split(' ')[1], 10) * (line.startsWith('up') ? -1 : 1))
    .reduce((a, b) => a + b, 0);

console.log(horizontal, depth, horizontal * depth);

// part 2
let horizontal2 = 0;
let depth2 = 0;
let aim = 0;

lines.forEach(line => {
    const [direction, distance] = line.split(' ');

    if (['up', 'down'].includes(direction)) {
        aim += (direction === 'up' ? -1 : 1) * parseInt(distance, 10);
    }

    if (direction === 'forward') {
        const parsedDistance = parseInt(distance, 10);

        depth2 += aim * parsedDistance;
        horizontal2 += parsedDistance;
    }
});

console.log(horizontal2, depth2, horizontal2 * depth2);