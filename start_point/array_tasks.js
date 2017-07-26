var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = [];
		newArray = arr1.concat(arr2);
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var squared = arr.map(function(x){
			return x * x;
		})
		return squared;
	},

	sum: function (arr) {
		var sumOf = arr.reduce(function(sum, value){
			return sum + value;
		});
		return sumOf;
	},

	findDuplicates: function (arr) {
		// assign array length to variable
		var arrayLength = arr.length;
		// new array to collect duplicates
		output = [];
		// new object to tally appearances of item
		counts = {};
		// loop through array to the length of the array
		for ( var i = 0; i < arrayLength; i++ ) {
			// assign item of array to new variable 'item'
		  var item = arr[i];
		  // each item in array then assigned to counts 'object' where the iterations are incremented if item aleady exists 
		  counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
		  // if loop to capture event when duplicates are found
		  if (counts[item] === 2) {
		  	// push duplicate item to the output array
		    output.push(item);
		  }
		}
		// return output array
		return output;	
	},
	
	removeAndClone: function (arr, valueToRemove) {
		var amendedArray = arr.filter(function(item){
		  return item !== valueToRemove;
		});
		return amendedArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		// new array to capture, index matches
		var newArray = [];
		// indexOf reports first index it finds a match
		var index = arr.indexOf(itemToFind);
		// while loop, indexOf returns -1 when no match found in array
		while (index != -1) {
			// adds any index numbers found to new array
		  newArray.push(index);
		  // increments index to start run cycle again
		  index = arr.indexOf(itemToFind, index + 1);
		}
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evensArray = arr.filter(function(item){
				return (item % 2 === 0 ) 
		})
		var squaredArray = this.square(evensArray);
		var total = this.sum(squaredArray);
		return total;
	}

}

module.exports = arrayTasks
