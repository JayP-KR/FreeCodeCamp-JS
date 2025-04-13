function greet (name, age) {
    let message = `Hello ${name}, your age is: ${age}.`;

    if (age < 18) {
        message += " You are young! You can play but don't able to vote.";
    } else if (age >= 18 && age <= 60) {
        message += " You will be able to vote";
    } else {
        message += " You are old relax you don't need to vote";
    }
    return message;
}

console.log(greet("Mishti",12));
console.log(greet("Arti",30));
console.log(greet("Jay",18));
console.log(greet("Krishnakant",60));
console.log(greet("Geeta",61));