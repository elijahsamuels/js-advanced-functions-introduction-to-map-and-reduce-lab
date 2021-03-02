// Your code here

sourceArray = [1, 2, 3, -9]

// function genericIterator(){let i = 0; i < sourceArray.length; i++}

// mapToNegativize returns an array with all values made negative
// 1) transforms correctly

function mapToNegativize(sourceArray) {
	let newArray = []
	for (let i = 0; i < sourceArray.length; i++ ) {
	  newArray.push(-1 * sourceArray[i])
	};
	return newArray
};

// mapToNoChange returns an array with the original values
//   2) transforms correctly

function mapToNoChange(sourceArray) {
	let newArray = []
	for (let i = 0; i < sourceArray.length; i++ ) {
	  newArray.push(sourceArray[i])
	};
	return newArray
};

// mapToDouble returns an array with the original values multiplied by 2
//   3) transforms correctly

function mapToDouble(sourceArray) {
	let newArray = []
	for (let i = 0; i < sourceArray.length; i++ ) {
	  newArray.push(2 * sourceArray[i])
	};
	return newArray
};

// mapToSquare returns an array with the original values squared
//   4) transforms correctly

function mapToSquare(sourceArray) {
	let newArray = []
	for (let i = 0; i < sourceArray.length; i++ ) {
		newArray.push(sourceArray[i] * sourceArray[i])
	};
	return newArray
};

// reduceToTotal returns a running total when not given a starting point
// 1) reduces correctly
// reduceToTotal returns a running total when given a starting point
// 2) reduces correctly

function reduceToTotal(sourceArray, startingPoint = 0) {
	let newArray = startingPoint
	for (let i = 0; i < sourceArray.length; i++ ) {
		newArray = newArray + sourceArray[i]
	};
	return newArray
};

// reduceToAllTrue returns true when all values are truthy
// 3) reduces correctly
// reduceToAllTrue returns false when any value is falsy
// 4) reduces correctly

function reduceToAllTrue(src) {
	for (let i = 0; i < src.length; i++ ) {
	  if (!src[i]) return false
	}
	return true
  }
  
  // reduceToAnyTrue returns true when a true value is present
  // 5) reduces correctly
  
  // reduceToAnyTrue returns false when no true value is present
  // 6) reduces correctly
  
  function reduceToAnyTrue(src) {
	for (let i = 0; i < src.length; i++ ) {
	  if (src[i]) return true
	}
	return false
  }
  