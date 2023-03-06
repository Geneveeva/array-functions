// QUESTION 1

// Mutating methods are ones that change the object after the method has been used. 
// Non-mutating methods do not change the object after the method has been used

// MUTATING METHODS
// array.pop()
// array.shift()
// array.splice()
// array.push()
// array.unshift()


// NON-MUTATING METHODS
// Array.filter()
// Array.slice()
// array.map()
// array.concat()
// ...array


// Add ‘Kotlin’ to the end of the array

const languages= ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languages.push("Kotlin")
 console.log(languages)

 //  Add ‘Java’ after ‘Ruby’

const add =languages.splice(3, 0, "Java")
console.log(languages)

 // Remove the first item in the array

  languages.shift()
  console.log(languages)

//   Add ’Scala’ and ‘Swift’ to the beginning of the array

 languages.splice(0, 0,"Scala", "Swift")
 console.log(languages)

//  Replace ‘PHP’ with ‘Go’ and ‘Rust’

const replace = languages.splice(5,1,"Go", "Rust")
console.log(languages)


// QUESTION 3


const fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
		
            }
    			
// ["apple", "mango", "orange"]


// QUESTION 4

function findMaxNumber(num) {
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max) {      
            max = num[i]; 
        }
    }
    return max;
}


let myArrayOfNumbers = [3, 6, 9, 12, 15, 20, 18];
let maxValue = findMaxNumber(myArrayOfNumbers);
console.log(maxValue)

    
// QUESTION 5    

function valTimesIndex(array) {
    return array.map((val,index) => val * index);   
}
let myArray = [2, 4, 6, 8, 10];
let result = valTimesIndex(myArray);
console.log(result);

