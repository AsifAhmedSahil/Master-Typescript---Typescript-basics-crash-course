var numbers = [12, 45, 18, 49, 58];
console.log(numbers);
numbers[1] = 4545;
console.log(numbers);
var friends;
friends = ["sahil", "asif", "ahmed"];
console.log(friends);
var newLength = friends.push("sanjida");
console.log(newLength);
console.log(friends);
console.log(friends.join("---"));
// contextual typing ****
// contextual typing means friend er modde data ache aguli string type tai value ta o string type holo**
friends.forEach(function (value) {
    console.log(value.toLocaleUpperCase());
});
var newFriendArray = friends.map(function (value) {
    return value.toUpperCase();
});
console.log(newFriendArray);
// -----------------------mixed type array -----------------
var mixed;
mixed = ["sahil", "asif", 45, 25];
mixed.forEach(function (value) {
    if (typeof value === "string") {
        var uppercase = value.toUpperCase();
        console.log(uppercase);
    }
    else {
        var number = value.toFixed(2);
        console.log(number);
    }
});
console.log("mixed array is:", mixed);
