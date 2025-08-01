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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {

    let min = 0;
    let max = 0;
    let total = 0;
    let minvalue = arr[0];
    let maxvalue = arr[0];

    for (let n of arr){
        if(n < minvalue){
            minvalue = n;
        }
        if(n > maxvalue){
            maxvalue = n;
        }
        total += n;
    }

    min = total - maxvalue;
    max = total - minvalue;

    console.log(min + ' ' + max);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
