// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

//Quadratic time (o(n^3))

//takes in a string
//both cases of same letter considered different chars
//contains any of the 128ASCII chars
//empty?
//spacing considered characters

//returns a boolean
//true if the string only has unique chars else false

//hasUniqueChars("  nAa"),false) because there are two spaces ' '
//hasUniqueChars("abcdef"),true)
//hasUniqueChars("aA"),true) // case - sensitivity
//hasUniqueChars("++-"),false) // because there are two '+'

function hasUniqueChars(str) {
  //loop through the string twice
  //compare each values with the next and return true if no match is found and false if a match is found

  //fails in certain tests

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (i !== j && str[i] !== str[j]) {
        return true;
      }
      return false;
    }
  }
}

//USING SET
function hasUniqueChars(str) {
  //use set to create an object and compare its size with that of the length of the str
  return new Set(str).size === str.length;
}

console.log(hasUniqueChars("  nAa"), false);
console.log(hasUniqueChars("abcdef"), true);
console.log(hasUniqueChars("aA"), true);
console.log(hasUniqueChars("++-"), false);

//UNIQUE ARR

//O(n ^ 2) complexity
const isUnique = (arr) => {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    console.log(`~~~~ OUTER LOOP ~~~~ i === ${i}`);

    for (let j = 0; j < arr.length; j++) {
      console.log(`~~~~ INNER LOOP ~~~~ j === ${j}`);
      if (i !== j && arr[i] === arr[j]) {
        result = false;
      }
    }
  }

  return result;
};

console.log(isUnique([1, 2, 3]) === true);
// console.log(isUnique([1,1,3]) === false);

//USING BREADCRUMBS (UNIQUE ARR)
//faster algorithms
const isUnique1 = (arr) => {
  let result = true;
  let breadCrumbs = {};
  for (let i = 0; i < arr.length; i++) {
    //then we a property look up in the breadCrumbs obj (constant time operation) if we have seen the element before and if so, the results become false
    if (breadCrumbs[i]) {
      result = false;
    }
    //if we haven't found it we set it to true
    else {
      breadCrumbs[i] = true;
    }
  }
  return result;
};

console.log(isUnique([1, 2, 3]) === true);
console.log(isUnique([1, 1, 3]) === false);

//TASK
//Given an array of numbers, sort them without returning any duplicate values in the sorted array
// uniqSort([4, 2, 2, 3, 2, 2, 2]) => [2, 3, 4]

function uniqSort(arr) {
  //create an empty obj for tracking the arr elements
  let arrObj = {};
  //create array to push value once starting with the first arr element as its element (assuming the very first element cannot be a duplicate)
  let sortedArr = [];

  for (let i = 0; i < arr.length; i++) {
    //if the element is not in the arrObj yet: push it to the sortedArr and set its value in the arrObj to true after the push
    if (!arrObj[arr[i]]) {
      //linear time complexity
      sortedArr.push(arr[i]); //linear time complexity
      arrObj[arr[i]] = true; //linear time complexity
    }
    console.log(arrObj);
  }
  return sortedArr.sort((a, b) => a - b);
}

uniqSort([4, 2, 2, 3, 2, 2, 2]);
