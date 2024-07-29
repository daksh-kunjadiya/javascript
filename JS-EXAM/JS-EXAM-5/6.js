let arr = [1,1,1,2,2,2,3,3,4,5,5];

let array = [];

for (let i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
        array.push(arr[i]);
    }
}

console.log(array);  
