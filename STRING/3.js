let str = "red";
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}