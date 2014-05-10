	//defined two arrays. one with 4 elements and one with 5 elements.
	var evenArray = [4,21,18,39];
	var oddArray = [23,233,2,34,32];

//sorted the arrays in ascending order and assigned them to new variables.
	var sortedEvenArray = evenArray.sort(function(a,b) {
		return a-b;
	});

	var sortedOddArray = oddArray.sort(function(a,b) {
		return a-b;
		});
console.log("Sorted Even Array " + sortedEvenArray);
console.log("Sorted Odd Array " + sortedOddArray);
//Create Calculator object and create sum, mean, and median property.
function Calculator() {
			this.sum = function(array) {
												var final_sum = 0;
												for (var i = 0; i < array.length; i++) {
													final_sum += array[i];
												}
												return final_sum;
									};
			this.mean = function(array) {
										var final_sum = 0;
										for (var i = 0; i < array.length; i++) {
											final_sum += array[i];
										}
										var mean = (final_sum/array.length);
										return mean;
									};
			this.median = function(array) {
											var median = 0;
											if (array.length % 2 === 0) {
												var first_number = array[array.length/2];
												var second_number = array[(array.length/2) - 1];
												median = (first_number + second_number) / 2;
												return median;
											}
											else {
												median = array[Math.floor(array.length/2)];
												return median;
											}
										};

}
//declare new instance of Calculator
var newCalc = new Calculator();


//test to see if newCalc variable is an instance of Calculator 
if (newCalc instanceof Calculator) {
	console.log("newCalc is an instance of calculator.");
}
else {
	console.log("newCalc is not an instance of calculator.");
}

//Get the sum of Arrays
console.log("Even Array Sum " + newCalc.sum(sortedEvenArray));
console.log("Odd Array Sum " + newCalc.sum(sortedOddArray));

//test to see if 'sum' is a function
if (typeof newCalc.sum === "function") {
	console.log("sum is a function");
}
else {
	console.log("sum is not a function");
}

//Get the mean of Arrays
console.log("Even Array Mean " + newCalc.mean(sortedEvenArray));
console.log("Odd Array Mean " + newCalc.mean(sortedOddArray));

//test to see if mean is a function.
if (typeof newCalc.mean === "function") {
	console.log("mean is a function");
}
else {
	console.log("mean is not a function");
}

//Get the median of Arrays
console.log("Even Array Median " + newCalc.median(sortedEvenArray));
console.log("Odd Array Median " + newCalc.median(sortedOddArray));

//test to see if median is a function
if (typeof newCalc.median === "function") {
	console.log("median is a function");
}
else {
	console.log("median is not a function");
}

/*Reflection
This was a very interesting assignment since it was only 2 of us working on it.
Since my partner was 1st, he seen the code so he kinda knew what we needed to write.
But I did tell him that we'll be honest and pretend that we have no idea and go by exactly
what I write on the pseudo code.   

While he was deciphering my pseudo code, he did come back to me a few times to clarify exactly
what I meant with certain sentences.    

We both learned how to use objects better and how to test if something is an instance of an object
and if its a function using typeof.

I enjoyed learning about objects and everything seemed to click.

I really wished we had more members so we can really experience the assignment the way it was
intended.   I envisioned this assign to act like the telephone game, where all it takes is one
person along the line to say something different and everything from beginning to end doesnt match.

Writing user stories is important and it needs to be clear and detailed.   We need to know exactly
what you want, what the results needs to be, and what functionality you like.   If there is no clean
pseudo code, the actual code might not match up with what the user wants.   How things are interpreted
is really important!  

So I think our problem with why none of our test passed was because of the refactoring.   When I 
refactored the code, I took all the individual functions and put them all into one huge object called
Calculator.   Calculator held the three functions needed to get the sum, mean, and median.   But the 
test had them split up.    So unless we change the refactored code or we change the test, it wont match
apples to apples.    

I understand that this how the software development lifecycle works so I except to see more
of this as we get deeper into the bootcamp.   Exciting!




*/
