// function goodBad(number) {
//     let goodBad;
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];
//         // console.log(element)
//         if (element >= 0) {
//             console.log('good number')
//         }
//         else{
//             console.log('bad number')
//         }
//     }
// }
// const numbers = [12,4,-5,8,-7,9,-4];
// const goodBadNum = goodBad(numbers);
// console.log(goodBadNum);

function goodBad(number) {
    let goodNum = [];
    let badNum = [];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        // console.log(element)
        if (element >= 0) {
            goodNum.push(element);
        }
        else{
            badNum.push(element)
            
        }
    }
    const goodBadnum = {
        goodNum:goodNum.length,
        badNum:badNum.length,
    };
    return goodBadnum;
}
const numbers = [12,4,-5,8,-7,9,-4];
const goodBadNum = goodBad(numbers);
console.log(goodBadNum);