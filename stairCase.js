'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    
    let f_string = '';

    for(let i = 0; i < n; i++){
        for(let j = n-1; j < i;j--){
            f_string += ' ';
        }
        for(let k = i; k >= 0; k--){
            f_string += '#'
        }

        console.log(f_string);
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
