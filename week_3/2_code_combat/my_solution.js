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
//
//What does the () do in JavaScript?
//What is the point of the semicolons?

// Reflection:
// Write your reflection here.

