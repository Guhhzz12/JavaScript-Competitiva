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
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

function countSort(arr) {
    const n = arr.length; 
    const buckets = Array(100).fill(null).map(() => []);

    for (let i = 0; i < n; i++) {
        const [numStr, word] = arr[i]; 

        let finalWord = word; 

        if (i < n / 2) {
            finalWord = "-"; 
        }

        buckets[numStr].push(finalWord);
    }

    const resultStrings = [];
    for (let j = 0; j < 100; j++) {
        if (buckets[j].length > 0) { 
            resultStrings.push(...buckets[j]);
        }
    }

    console.log(resultStrings.join(' '));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}
