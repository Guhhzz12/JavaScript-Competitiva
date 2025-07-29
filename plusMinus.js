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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    
    let maior = 0
    let zero = 0;
    let menor = 0;
    const tam = arr.length;
    
    for (let n of arr){
        if(n > 0){
            maior += 1;
        }
        else if(n === 0){
            zero += 1;
        }
        else{
            menor += 1;
        }
        
    }
    maior = maior / tam;
    zero = zero / tam;
    menor = menor / tam;
    
    console.log(maior.toFixed(6));
    console.log(menor.toFixed(6));
    console.log(zero.toFixed(6));

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
