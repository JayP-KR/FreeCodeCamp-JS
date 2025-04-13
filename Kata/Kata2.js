function duplicateCount(text){
    let string = text.toLowerCase();

    let count = 0;
    let obj = {};

    for (const char of string) {
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }

        if (obj[char] === 2) {
            count++;
        }
    }

    return count;
}