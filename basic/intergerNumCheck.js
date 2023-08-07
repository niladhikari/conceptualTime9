function isInteger(num) {
    if (typeof num !== 'number') {  // number validation check
        return 'give me number'   
    }
    else{
        if (num % 1 == 0) {   // integer chacking
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(isInteger(2))

// function isInteger(num) {
//     if (!Array.isArray(num)) {  // number validation check
//         return 'give me array'   
//     }
//     for (let i = 0; i < num.length; i++) {
//         const element = num[i];

//         if (element % 1 == 0) {   // integer chacking
//             console.log('interger number');
//         }
//         else{
//             console.log('not interger number');
//         }
//     }
// }

// const numbers = [1,2,4,5,3.5,6,7.8];
// isInteger(numbers);