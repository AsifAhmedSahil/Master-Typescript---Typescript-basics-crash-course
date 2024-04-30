let numbers: number[] = [12,45,18,49,58]
console.log(numbers)

numbers[1] = 4545
console.log(numbers)

let friends:string[];
friends = ["sahil","asif","ahmed"]
console.log(friends)

let newLength: number = friends.push("sanjida")
console.log(newLength)
console.log(friends)
console.log(friends.join("---"))

// contextual typing ****

// contextual typing means friend er modde data ache aguli string type tai value ta o string type holo**

friends.forEach((value) =>{
    console.log(value.toLocaleUpperCase())

})

let newFriendArray = friends.map((value) =>{
    return value.toUpperCase()
})


console.log(newFriendArray)

// -----------------------mixed type array -----------------

let mixed: (string | number)[];

 mixed = ["sahil","asif",45,25]

 mixed.forEach((value) =>{
    if(typeof value === "string"){
        let uppercase = value.toUpperCase()
        console.log(uppercase)
    }
    else{
        let number = value.toFixed(2)
        console.log(number)
    }
 })

 console.log("mixed array is:",mixed)
