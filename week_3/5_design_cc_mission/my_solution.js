// I worked by myself on this challenge

// Your mission description:
/*
You are on a quest to bring a bottle of Jameson whiskey back to your house from
the liquor store.    Along the way you run into drunks who wants to take your
booze, dogs that will try to maul you,  and kids who ask you to help them buy alcohol.   Also police officers
might be patrolling the neighborhood, so dont get caught without your id.

*/ 

/* Pseudocode
	Create a html layout of the game based on the wireframe.
	Map out the spaces from liquor store to house using a table with 10 cells left to right.
	For each cell space in the table, create an id for it to keep track of where you are.
	Create a player object:
	Use a prompt to get the players name.
		1.The player just needs a name, health, bottles, and a function to place the stats on the screen.
		2.Health status set to 100, bottles start with 5.
	
	Create a function called randomEvent that will pick one of five random events.
	These are the possible events:
		1.You run into a cop
		2.You run into a drunk
		3.You run into a dog
		4.You run into a teen
		5.You run into no one.
	Make choice 5 happen more often.  Each event triggers two outcomes. 
	Here's the list of outcomes.
		1. Cop - a. Show cop ID = no change, Run from cop = -50 health.
		2. Drunk - a. Give drunk a bottle = -1 bottle, Run from drunk = no change
		3. Dog - a. Pepper spray = no change, Run from dog = -50 health.
		4. Teen - a. Sell the boy a bottle = Go to Jail/End Game, b. Ignore kid = -10 health from getting tripped.
		5. No One - Nothing happens no change.
	If at any time, bottle = 0, or health = 0 - Game over	

	Create user interface functions
		1.A reset function to restart the game
		2.A function to move the character left
		3.A function to move the character right.
	
	Create a div to diplay the events and description of event.

	Tie in all functions to the html page.

	Rules of the game is as follows:
	1. You enter your name
	2. The status of the character is displayed on the screen
	3. Your character sit on cell 1 of the table.
	4. Player has a choice to move left or right on the cells.
	5. For each step either left or right, call the randomEvent function to generate an event.
	6. Based on events that happen, take off health or bottle points, or do nothing.
	7. If the character reaches the 10th position on the right.  You are home. 
	8. Prompt to play again.  Reset game
		

// Initial Code
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="stylesheets/jquest.css">
		<title>Jameson Quest</title>
		<meta http-equiv="content-type" content="image/jpeg; charset=UTF-8">
	</head>
	<body>
		<header>
			<h1>Jameson Quest</h1>
		</header>
		<section id="story">
			<p>You are on a quest to bring bottles of Jameson whiskey back to your house from
				the liquor store for a party you're having.    Along the way you run into drunks who want to take your booze, dogs that will try to maul you,  and kids who ask you to help them buy alcohol.   Also police officers might be patrolling the neighborhood, so don't get caught without your id!</p>
		</section>

		<section>
			<table align="center">
				<tr>
					<td>
						<img src="images/store.jpg" width="100%" height="100%"/>
					</td>
					<td>
						<img src="images/man.jpg" id="1" width="100%" height="100%"/>
					</td>
					<td>
						<img  id="2" width="100%" height="100%"/>
					</td>
					<td>
						<img id="3" width="100%" height="100%"/>
					</td>
					<td>
						<img id="4" width="100%" height="100%"/>
					</td>
					<td>
						<img id="5" width="100%" height="100%"/>
					</td>
					<td>
						<img id="6" width="100%" height="100%"/>
					</td>
					<td>
						<img id="7" width="100%" height="100%"/>
					</td>
					<td>
						<img id="8" width="100%" height="100%"/>
					</td>
					<td>
						<img id="9" width="100%" height="100%"/>
					</td>
					<td>
						<img id="10" width="100%" height="100%"/>
					</td>
					<td>
						<img src="images/house.png" width="100%" height="100%"/>
					</td>


				</tr>
			</table>
		</section>
		<section>
			<div id="eventwrapper">
				<div id="eventimg"><img id="eimg" width="300px" height="300px"></div>
				<div id="eventdesc"><p id="edesc"></p></div>
			</div>
			<div id="pstat">
				<ul>Player Stats
					<li>Name: <span id="name"> </span></li>
					<li>Health: <span id="health"> </span></li>
					<li>Bottles of Jameson: <span id="bottles"> </span></li>
				</ul>

			</div>
			<div id="userpanel">
				<div id="leftb">
					<p>Use the left and right arrows to move your character</p>
					<img id="lpic" src="images/left.jpeg" width="100px" height="100px" onclick="manleft()">
				</div>
				<div id="rightb">
					<img id="rpic" src="images/right.png" width="100px" height="100px" onclick="manright()">
				</div>
			</div>
		</section>


	</body>
	<script type="text/javascript">
			var pname = prompt("Welcome to Jameson Quest! Enter your name");
			function Player() {
				 this.stats = { Name: "name", Health: 100, Bottles: 5}
				 this.insert = function () {
				 								document.getElementById('name').innerHTML = this.stats.Name;
				 								document.getElementById('health').innerHTML = this.stats.Health;
				 								document.getElementById('bottles').innerHTML = this.stats.Bottles;
				 								
				 }
			}

			var newPlayer = new Player();
			newPlayer.stats.Name = pname;
			newPlayer.insert();

			function manleft() {
				var currentloc = 0;
 				for (var x=1; x < 11; x++) {
 					if (document.getElementById(x).src.indexOf("man.jpg") != -1) {
 						currentloc = x;
 					}				
 				}
 				if (currentloc > 1) {
 					document.getElementById(currentloc-1).src = "images/man.jpg";
 					document.getElementById(currentloc).src = "";
 					randomEvent();
				}
				else {
					alert("What are you doing back at the liquor store?");
					reset();
				}
			}				

			function manright() {
				var currentloc = 0;
 				for (var x=1; x < 11; x++) {
 					if (document.getElementById(x).src.indexOf("man.jpg") != -1) {
 						currentloc = x;
 					}				
 				}
 				if (currentloc < 10) {
 					//document.getElementById(currentloc+1).src = document.getElementById(currentloc).src;
 					document.getElementById(currentloc+1).src = "images/man.jpg";
 					document.getElementById(currentloc).src = "";
 					randomEvent();
				}
				else {
					document.getElementById('eimg').src = "images/jameson.jpg";
					document.getElementById('edesc').innerHTML="YAY!! We got home safe with all the alcohol!  Party Time!.....wait a sec, did we forget the ice?";
					setTimeout(function(){reset()},1000);
				
				}
			}				

			function buttonoff() {
				document.getElementById('lpic').style.visibility = "hidden";
				document.getElementById('rpic').style.visibility = "hidden";
			}

			function buttonon() {
				document.getElementById('lpic').style.visibility = "visible";
				document.getElementById('rpic').style.visibility = "visible";
			}

			function police(choice) {
					if (choice === 'a') {
						document.getElementById('edesc').innerHTML="You show him your ID and he lets you go.";
						buttonon();
					}
					if (choice === 'b') {
						console.log(newPlayer.stats.Health);
						if (newPlayer.stats.Health > 0) {
							document.getElementById('edesc').innerHTML="The cop had too many donuts, you got away but got a little scraped up";
							newPlayer.stats.Health = newPlayer.stats.Health - 50;
							document.getElementById('health').innerHTML=newPlayer.stats.Health;
							buttonon();
						}
						else {
							document.getElementById('edesc').innerHTML="You try to make a run for it, but you are too weak.  He calls in for backup and hauls you to jail";
							reset();
						} 
					}
			}

			function drunk(choice) {
					if (choice === 'a') {
						if (newPlayer.stats.Bottles > 0) {
							document.getElementById('edesc').innerHTML="You give him a bottle, you now have one less bottle for the party";
							newPlayer.stats.Bottles = newPlayer.stats.Bottles - 1;
							document.getElementById('bottles').innerHTML=newPlayer.stats.Bottles;
							buttonon();
						}
						else {
							document.getElementById('edesc').innerHTML="You give him a bottle, but you dont have anymore. You walk home with nothing, the party is over.";
							reset();
						}	
						
					}
					if (choice === 'b') {
						document.getElementById('edesc').innerHTML="You try to make a run for it.  He's too drunk to catch up";
						buttonon();
					}
			}

			function dog(choice) {
					if (choice === 'a') {
						document.getElementById('edesc').innerHTML="You take out your pepper spray, aim it at the dog, and pull the trigger.  The dog runs off howling..";
						buttonon();
					}
					if (choice === 'b') {
						if (newPlayer.stats.Health > 0) {
							document.getElementById('edesc').innerHTML="You try to make a run for it.  He bites you.  OUCH!";
							newPlayer.stats.Health = newPlayer.stats.Health - 50;
							document.getElementById('health').innerHTML=newPlayer.stats.Health;
							buttonon();
						}
						else {
							document.getElementById('edesc').innerHTML="You try to make a run for it.  You can't out run the dog and drop all your alcohol...*CRY*";
							reset();
						}
					}
			}

			function boy(choice) {
					if (choice === 'a') {
						document.getElementById('edesc').innerHTML="You sell the boy a bottle of Jameson, turns out the boy was part of an undercover sting.  The police comes and takes you to jail.";
						reset();
					}
					if (choice === 'b') {
						if (newPlayer.stats.Health > 0) {
							document.getElementById('edesc').innerHTML="You give the kid the cold shoulder and he throws a rock at you.   OUCH!";
							newPlayer.stats.Health = newPlayer.stats.Health - 10;
							document.getElementById('health').innerHTML=newPlayer.stats.Health;
							buttonon();
						}
						else {
							document.getElementById('edesc').innerHTML="You decline to buy him anything, he trips you and you fall on your head.   You wind up in the hospital.";
							reset();	
						}
					}
			}

			function randomEvent() {
					var e = Math.floor((Math.random() * 8) + 1);
					if (e === 1) {
						buttonoff();
						document.getElementById('eimg').src = "images/policeman.gif";
						document.getElementById('edesc').innerHTML="<p>A policeman calls out, \"Are you old enough to drink young man? Let me see your ID!\"</p><p>What do you want to do?<br><a href=\"#\" onclick=\"police('a')\">Show him your ID</a>   <a href=\"#\" onclick=\"police('b')\">Make a run for it!</a></p>";
					}
					else if (e === 2) {
						buttonoff();
						document.getElementById('eimg').src = "images/drunkman.gif";
						document.getElementById('edesc').innerHTML="<p>A drunk trucker walks up to you. \"Give me one of those bottles of Jameson buddy!\"</p><p>What do you want to do?<br><a href=\"#\" onclick=\"drunk('a')\">Give him the bottle</a>   <a href=\"#\" onclick=\"drunk('b')\">Make a run for it!</a></p>";	
					}
					else if (e === 3) {
						buttonoff();
						document.getElementById('eimg').src = "images/angrydog.jpg";
						document.getElementById('edesc').innerHTML="<p>An angry dog growls at you.</p><p>What do you want to do?<br><a href=\"#\" onclick=\"dog('a')\">Spray it with pepper spray.</a>   <a href=\"#\" onclick=\"dog('b')\">Make a run for it!</a></p>";	
					}
					else if (e === 4) {
						buttonoff();
						document.getElementById('eimg').src = "images/teen.jpg";
						document.getElementById('edesc').innerHTML="<p>A young teenage kid walks up to you. \"Say mister! Mind if I buy one of those bottles off you?\"</p><p>What do you want to do?<br><a href=\"#\" onclick=\"boy('a')\">Sell the boy a bottle</a>   <a href=\"#\" onclick=\"boy('b')\">Decline his offer and continue walking home</a></p>";		
					}
					else if (e > 5) {
						document.getElementById('eimg').src = "images/sweat.jpg";
						document.getElementById('edesc').innerHTML="<p>Lucky you! You didnt run into problems on this block. Continue heading home.</p>";
					}
			}	
			
			function reset() {
				var answer = confirm("Do you want to play again?");
				if (answer) {
					location.reload();
				}
			}



	</script>

</html>


// Refactored Code
Same as Initial code.   I broke up the randomEvent() into individual functions for 
each type of event and used the onclick event handler to pass in a different 
arguement for each event clicked.   I wanted to combine manleft() and manright(), but
the lines of code save is really small since too many dfferent things we're happening.
Only thing that was the same for both was going through all the id fields and finding
the current position of the character.  I did not see any other set of code repeating 
itself.

// Reflection
/* 
	I think the pseudo code did help me with the outline, but it was really hard digging
	deep and knowing the whole plan of the game like what functions to write, what buttons
	do I need to interface with the player, and lastly what the events are actually saying
	until I was already coding it.   The story on the game was basically what I used to build
	my pseudo code, so getting really detailed was a little tough.  

	Some of the questions I had was how do I make the user control panel.  Do I use prompts?
	Do I use images to click on?   How do I trigger a function call when I click on an image? 
	And when I clicked on the image, how do I cause another element with a particular id to 
	change it's content? I had to search Google quite a bit to find examples on how to do 
	pieces of each.  Breaking up the parts was key in building this game.
	I first made the functions to move the character from the left side then to the right.
	After that I made the function to allow the character to move backwards.  Then I created
	a random events function that would pick a random event, change the event image
	 and event description.   Lastly I added an player object that would keep track of the 
	 players name, health, and bottles of jameson.   

	 I had some trouble understanding what other properties can I tie in with 
	 getElementById.   I learned how that I can tie in the attribute properties
	 of each element such as .src, and .innerHTML to input html content between the element
	 tags.    

	 I learned how to trigger events by applying onclick to tags.

	 I feel much more confident with Javascript after this.   But I can do better.

	 I enjoy watching the game go from a blank css layout to a working game.

	 I found building the layout tedious since I had so many id's to manage.
*/