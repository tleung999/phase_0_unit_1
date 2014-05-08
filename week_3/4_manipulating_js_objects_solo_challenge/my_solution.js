// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.

var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}

/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
  Create a variable called adam set it equal to a new object

2. Give adam a name property with the value "Adam".
  Create name property set it to "Adam" in the adam object 

3. Add a spouse property to terah and assign it the value of adam.
  Create spouse property in terah and set it to adam object

4. Change the value of the terah weight property to 125.
  Set weight property to 125 in the terah object

5. Remove the eyeColor property from terah.
  Remove the eyeColor property from the terah object.

6. Add a spouse property to adam and assign it the value of terah.
  Create spouse property in adam object and set it to terah object

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
  Create children property in terah object and set it to a blank object

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
  In the blank children object in terah set a new property called carson and carson will 
  hold a property called name with the value "Carson"

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
  In the blank children object in terah set a new property called carter and carter will 
  hold a property called name with the value "Carter"

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
  In the blank children object in terah set a new property called colton and colton will 
  hold a property called name with the value "Colton"

11. Add a children property to adam and assign it the value of terah children.
  Create a new property called children in the adam object and set it to the value of terah's
  children.
*/

// __________________________________________
// Write your code below.

var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;

/* __________________________________________
// Reflection: Use the reflection guidelines
    I initially thought I was suppose to build a new object and include 
    all the properties all at once.   Such that I would build out the object 
    shown below.  
    
    var terah = {
      name: "Terah",
      age: 32,
      height: 66,
      weight: 125,
      hariColor: "brown",
      children: {carson: {name: "Carson"}, carter: {name: "Carter"}, colton: {name: "Colton"}},
      spouse: adam
    };

    var adam = {
      name: "Adam",
      children: terah.children
      spouse: terah
    };

    But I ran into a major problem where you cant call adam 
    since adam is undefined.   And if put adam on top of terah, then adam 
    cant call terah or terah.children since terah wasnt created yet.   

    I tried for  while to try to find a solution and even tried to imbed adam into
    the terah object. Example below.

    var terah = {
      name: "Terah",
      age: 32,
      height: 66,
      weight: 125,
      hariColor: "brown",
      children: {carson: {name: "Carson"}, carter: {name: "Carter"}, colton: {name: "Colton"}},
      spouse: adam = {  name: "Adam",
                        children: terah.children
                        spouse: terah
                      }
    };

    But I couldnt reference the parent object so adam.children and adam.spouse
    was undefined.    

    After this I posted a question on the Discussion board about how to reference
    a property in an object if the property is calling another object that hasnt
    be defined.  Example below

    var car = {color: "green", obj:  truck};
    var truck = {color: "blue", obj: car};

    Someone was nice enough to mentioned to me that I had to break it out doing the
    following.

    var car = {color: green,};
    var truck = {color: blue, obj: car};
    
    car.obj = truck;

    Finally I had my AHA moment!!   That solved my issue since my code now turned to
    this.
    
    var terah = {
      name: "Terah",
      age: 32,
      height: 66,
      weight: 125,
      hariColor: "brown",
      children: {carson: {name: "Carson"}, carter: {name: "Carter"}, colton: {name: "Colton"}},
    };

    var adam = {
      name: "Adam",
      children: terah.children
    };

    adam.spouse = terah;
    terah.spouse = adam;

    But then I realized I was reading the whole challenge incorrectly.   The
    challenge was basically telling me to build one piece at a time.    Build
    an empty object called adam, create new properties for adam, remove a 
    property from terah, etc.    So I rewrote the whole code challenge (Final code
    up above).  *YAWN*  it took me the whole evening wednesday night to realize 
    my mistake!

    I learned a lot about objects because of this challenge, how to delete,
    add properties, nest objects, reference other objects, and change 
    properties.   

    I really feel much more confident working with objects now.   The
    only part I think I will need more practice is creating functions inside
    an object property.  

    I enjoyed solving this challenge after working on it all night.  The AHA
    moment put a smile on my face.   

    It was tedious when I had to reset node.js since I didnt want my
    previous declaration of the object to interfere with my new update.
    So I was constantly exiting and entering node and then pasting my
    updated code.

*/
// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)