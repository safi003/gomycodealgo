// String Manipulation Functions
function ReverseString (str){
    return str.split(" ").reverse().join(" ");
}

function CountCharacters(str){
    return str.length;
}

function CapitalizeWords(str){
    str.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Array Functions

function findMaxMin(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [max , min];
}

function SumofArray(arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    return sum;
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function fibonacci(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence.slice(0, n);
}