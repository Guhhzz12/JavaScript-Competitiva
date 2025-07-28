'use strict';

const fs = require('fs');

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    
    let map = {};

    for(let bird of arr){
        if(map[bird]){
            map[bird] += 1;
        }
        else{
            map[bird] = 1;
        }
    }

    let max_bird = 0;
    let max_qtd = 0;

    for(let bird in map){
        let c_qtd = map[bird];

        if(c_qtd > max_qtd){
            max_qtd = c_qtd;
            max_bird = bird;
        }

        if(c_qtd === max_qtd && max_bird > bird){
            max_bird = bird;
        }
    }

    return max_bird;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
