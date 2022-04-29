console.log("***** Object Practice *****");

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: "Savon",
  lastName: "Huynh",
  hasSiblings: true,
  shoeCount: 7,
  favThreeFoods: ["pho", "chicken wings", "pizza", "fish"],
};
console.log("A little about me:", me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
// No space between first and last name
// let fullName = me.firstName + me.lastName;
// Space between first and last name
let fullName = `${me.firstName} ${me.lastName}`;
// Another way:
// let fullName = me.firstName + " " + me.lastName;
console.log(fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
let firstFaveFood = me.favThreeFoods[0];
let lastFaveFood = me.favThreeFoods.slice(-1); //Returns element as new array object
let lastFaveFood2 = me.favThreeFoods[3];
console.log(firstFaveFood);
console.log(lastFaveFood);
console.log(lastFaveFood2);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(`Current pairs of shoes: ${me.shoeCount}`);
let newShoeCount = me.shoeCount + 1;
console.log(`Added another pair of shoes`);
console.log(`Updated shoe count: ${newShoeCount}`);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = "green";
console.log(me.favoriteColor);
console.log(me); 
