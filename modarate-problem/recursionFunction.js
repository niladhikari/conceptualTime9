/* function name sumOfN(). you will be provided a number n. you have to calculate the total of all numbers between 1 to n . use function recursion
*/

// 3 => 3 + 2 + 1

// 3 + sumOfN(2)
// 3 + 2 + sumOfN(1)
// 3 + 2 + 1

function sumOfN(n){
    if(n === 1){
        return 1;
    }else{
        return n + sumOfN(n-1);  // function nije ke nije call korte pare
    }
}
const n = 5;
console.log(sumOfN(n))