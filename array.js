let myArray = [1,2,3,4,5];

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum
}
console.log(sum(myArray))

function sapxep(arr) {
    return arr.sort((a, b) => {
        return a - b;
    })
}
console.log (sapxep(myArray))


function getMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return {min, max}
}
let MinMax = getMinMax(myArray)
console.log(MinMax.max, MinMax.min)