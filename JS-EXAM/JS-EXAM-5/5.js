let arr = [1, 2, 2, 3, 2, 4, 5];
let elementCount = 2;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elementCount) {
        count++;
    }
}

console.log(count);
