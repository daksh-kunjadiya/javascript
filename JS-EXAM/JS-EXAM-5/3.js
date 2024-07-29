let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log(smallest);
