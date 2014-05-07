// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
//Beginner Campaign
//Mission 1 - Rescue Mission
//Pseudo Code
//move down x2
//move right
//move up x2
//move right x2
//move down x2
//attack

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();

//Mission 2 - Grab the Mushroom
//Pseudo Code
//move up 
//move right
//move left
//move up
//attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Mission 3 - Drink me
//Pseudo Code
//move right
//attack
//move right
//move down
//move up
//move right
//attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Mission 4 - Taunt the guards
//Psuedo Code
//move right
//break down down
//move right
//Taunt the guard by saying Hey There
//move left
//move left
//Tell Phoebe to attack
//move right
//Tell Phoebe to follow you
//move right x2
//move up
//move right
//Taunt the guards by saying Hey
//move down
//move right
//move up
//move right
 
this.moveRight();
this.bustDownDoor();

//Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
 
//Mission 5 - It's a Trap
//Pseudo Code
//move down x2
//Taunt the guard by saying hey
//move up x2

this.moveDown();
this.moveDown();
this.say("Hey");
this.moveUp();
this.moveUp();

//Mission 6 - Break the Prison
//Pseudo Code
//Check names of prisoner
//If they are a friend, set them free
//Escape

// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Lucas")
    return true;
if(name === "Gort")
    return false;
if(name === "Marcus")
    return true;
if(name === "Gordon")
    return true;

//Mission 7 - Taunt
//Pseudo Code
//Taunt x4

this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("BOO!");
this.say("Ha!");
this.say("Yawn!");

//Mission 8 - Cowardly Taunt
//Pseudo Code
//Move to a spot near the orges
//Taunt the enemy
//run to safe spot

this.moveXY(57, 30);
this.say("Hey");
this.moveXY(70, 10);

//Mission 9 - Commanding Followers
//Pseudo Code
//Move to the troops
//Tell the troops to follow you
//Go to spot near the orges
//Tell the troops to attack

this.moveXY(78, 67);
this.say("Follow");
this.moveXY(62, 41);
this.say("Attack");

//Mission 10 - Mobile Artillery
//Pseudo Code
//move in range 
//Kill first batch of orges
//move in range
//Kill second batch of orges
//If any orges still live, attack again
//move in range
//kill third batch of orges
//If any orges still live, attack again. 

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(47, 40);
this.attackXY(68,53);
this.attackXY(59,45);
this.attackXY(49,61);
this.attackXY(49,53);

//Release 3
//What is this referring to? Think programming-wise rather than in the terms of the game.
//this is referring to a keyword that is created when a function is created.  "This" is a
//reference to the object and is only available to the scope of the function.
//
//What does the () do in JavaScript?
//() surrounds the parameters/arguments that you may want to pass into a function.
//If the function has no parameters, it is still necessary to use the ();  If you do not
//use () at the end of a function such as myFunction, javascript will think it is a
//property instead.
//An example of a function with no parameters
//var test = myFunction();
//An example of a function with parameters
//var test = myFunction(name, age);
//
//What is the point of the semicolons?
//Semicolons is how Javascript determines that you are done with your statement.  
//You can opt out and not use semicolons if you move to a new line after each statment.
//Some minifiers also might have problems shrinking down your js file if you dont 
//use semicolons.  Minifiers are tools that remove unnecessary characters from your
//source code without affecting its functionality.  I am a little bias toward using semicolons
//I came from a CS degree, so writing in Java and C++, I was always ending my code 
//statements with semicolons.   It was basically like a period at the end of a sentence.   

// Reflection:
// Write your reflection here.
//What parts of your strategy worked? What problems did you face?
//Using pseudo code really helped put it all together before actually writing the code.
//It really limited the number of back and forths I needed to do.  Only problem was finding
//the right coordinates to attack.

//What questions did you have while coding? What resources did you find to help you answer them?
//I knew this was referencing the function you called, but I never really understood the
//scope of this until I researched it more.  See below for the site I used to learn more about this.

//What concepts are you having trouble with, or did you just figure something out? If so, what?
//Concepts were all pretty straight foward.   Syntax wise it is pretty close to Ruby.

//Did you learn any new skills or tricks?
//I learned how to to pass in parameters just like in Ruby.

//How confident are you with each of the Learning Competencies?
//This challenge was pretty easy to understand.

//Which parts of the challenge did you enjoy?
//Enjoyed learning through a game, nice change from running example code over and over.

//Which parts of the challenge did you find tedious?
//this.moveRight();
//this.moveLeft();
//this.moveUp();..........
//this.moveXY(a,b).....YAY!


//Other Resources:
//http://code.tutsplus.com/tutorials/fully-understanding-the-codethiscode-keyword--net-21117
//http://en.wikipedia.org/wiki/Minification_(programming)
//http://mislav.uniqpath.com/2010/05/semicolons/

