const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const lines = input.split('\n');
let count = 0;

// first
lines.forEach((line, index) => {
    if (index > 0) {
        const lastLine = lines[index - 1];
        if (parseInt(line, 10) > parseInt(lastLine, 10)) {
            count += 1;
        }
    }
});

console.log(count);

// second
count = 0;
lines.forEach((line, index) => {
    if (index > 0 && index < lines.length - 2) {
        const lastLineSum = parseInt(lines[index - 1], 10) + parseInt(line, 10) + parseInt(lines[index + 1], 10);
        const currentSum = parseInt(line, 10) + parseInt(lines[index + 1], 10) + parseInt(lines[index + 2], 10);

        if (currentSum > lastLineSum) {
            count += 1;
        }
    }
});
console.log(count);