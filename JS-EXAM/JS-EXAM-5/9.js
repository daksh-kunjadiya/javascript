let arr = [5, 9, 2, 3, 4, 7, 1, 6, 8];
let sort = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
        sort = false;
    }
}
console.log(sort);