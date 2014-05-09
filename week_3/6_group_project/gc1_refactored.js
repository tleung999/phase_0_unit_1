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
