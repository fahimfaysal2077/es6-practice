// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }


// Arrow Function:
const doubleIt = (num) => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doBishalMath = (x, y) => {
    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(50);
console.log(result);
const result2 = add(50, 70);
console.log(result2);
const result3 = give5();
console.log(result3);
const result4 = doBishalMath(7, 5);
console.log(result4);