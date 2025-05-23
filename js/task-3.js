function filterArray(numbers, value) {
    const bigNumber = [];
    for (const number of numbers) {
        if (number > value) {
            bigNumber.push(number);
        } 
    }
    return bigNumber;
}

// function filterArray(numbers, value) {

//     const bigNumber = [];
 
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > value) {
//             bigNumber.push(numbers[i]);
//         } 
//     }
// return bigNumber
// }





console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



