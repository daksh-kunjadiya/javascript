let str = ["RED", "AND", "WHITE"];
let n = str.length;
for (let i = 0; i < n; i++) {
    if (str[i] == "AND") {
        console.log(str[i].toLowerCase());
    } else {
        console.log(str[i]);
    }
}