function duplicateCount(text){
    //...
    let lastHighestAlpha = 0;
    let check = text.toLowerCase();
    let obj = {};

    for (let char of text) {
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }

        if (obj[char] > lastHighestAlpha) {
            lastHighestAlpha = obj[char];
        }
    }

    let ans = [];

    for (let key in obj) {
        if (obj[key] === lastHighestAlpha) {
            ans.push(key);
        }
    }

    return lastHighestAlpha;
}

console.log(duplicateCount("abcde"))
console.log(duplicateCount("abccccdsssde"))