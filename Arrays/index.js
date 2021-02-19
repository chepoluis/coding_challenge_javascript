const array1 = [1,2,3,4,5,6,7,8,9,10];
const arrayResult = [];

for(let i = array1.length - 1; i >= 0; i--) {
    arrayResult.push(array1[i]);
}

console.log(arrayResult);