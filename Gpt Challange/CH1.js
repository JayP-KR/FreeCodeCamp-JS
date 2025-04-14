function countCharacters(str) {
    str = str.toLowerCase();
    const obj = {};

    for (const char of str) {
        if (obj[char]) {
            obj[char]++;
        } else if (char !== " ") {
            obj[char] = 1;
        }
    }

    console.log(obj);
    return obj;
}

countCharacters("Jay Guruji");