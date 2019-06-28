/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function multOfThree(value) {
    return (value % 3 === 0 ? true : false)
}

function multOfFive(value) {
    return (value % 5 === 0 ? true : false)
}

const maxNumber = 1000;
let total = 0;

const values = new Array(maxNumber).fill(0).map((x, i) => i);

const multiples = values.filter((value) => {
    if (multOfFive(value) || multOfThree(value)) {
       return value;
    }
});

total = multiples.reduce((cv, pv) => pv + cv);

console.log(`total = ${total}`);
