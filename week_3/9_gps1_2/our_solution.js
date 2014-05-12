// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Tony Leung
//  2. Matthew Darin


// 0. "YOU SIGNED... WHO?!"
/*
We first talked about assigning the data to arrays, individual variable, or Objects.
We ended up using Objects for our solution.

Pseudo Code
Create Objects for each of our new clients
Declare variable for each object
Each object represents the persons profile 
In each object we will include the clients name, age and a popular quote to remember them by.
*/

// 1. "Here they Come!"
var aSandler = {name: "Adam Sandler",
                age: 47,
                quote: "That's your home! Are you too good for your home?!"};
                
var kBell = {name: "Kristen Bell",
             age: 33,
             quote: "Do you wanna build a snowman?"};

var jCarrey = {name: "Jim Carrey",
              age: 52,
              quote: "...So you're telling me there's a chance? YEAH!"};

// 2. "TIME IS MONEY!"
//YOUR CODE HERE!
function Client(name, age, quote, func)
{
  this.name = name;
  this.age = age;
  this.quote = quote;
};

var aSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
var jCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

// 3. "SHOW 'EM OFF!"
function printClient(client){
    console.log("name: "+ client.name+ " age: "+ client.age + " quote: "+ client.quote);
}

printClient(aSandler);
printClient(kBell);
printClient(jCarrey);
printClient(shooterMcGavin);

// 4. "But wait, there's more!"
function Client(name, age, quote, func)
{
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.showQuote = function() {
    console.log("My Quote is: " + this.quote);
  }
}

jCarrey.showQuote();

// 5.  ** BONUS **

//  6.  Your Reflection:
/*
Building the pseudo code and deciding which direction to start was really helpful in 
laying the groundwork on how to tackle the problem.  We ran into a problem when we had 
to build a constructor.   We didnt exactly knew how to build it and ended up Googling
it.  Release 4 asked us to create a showQuote function and we werent sure on how to 
create it.   I first thought we build the a whole new showQuote function outside of
the Client function.  And then Client function will call on the showQuote function. 
Turns out we can build a function within a function and set the property to that 
function.  Mohit did help us with that part in the end.   Learning how to create 
a constructor was definitely a new thing I learned.  After working on this project,
I realized I still have a lot to learn about javascript.  I enjoyed building the initial
object, but moving beyond that and building a constructor that can call upon the same
object over and over is new for me.   I didnt find anything tedious about the project.
Everyone was new and fun.
*/ 
