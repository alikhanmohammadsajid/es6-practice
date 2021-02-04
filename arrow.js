// function doubleIt(num) {    
//     return num * 2
// }

// const doubleIt = function func(num) {
//     return (num * 2)
// }


const doubleIt = num => num * 2 
const add = (a, b) => a + b
const give5 = () => 5
const finalNum = give5()

const doMath = (a, b) => {
    const sum = a + b
    const diff = a - b
    const total = sum * diff
    return total
}
const result = doMath(6, 4);
console.log(result)