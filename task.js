 

 // -------------------TASK 2.1-----------------------

// Question 1_________________

//  Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

function printArray(array){
    return array.join(",");
  }


// Question 2

// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
    if(Math.sign(number)==1)
      return -number;
    else
      return Math.abs(number);
  }


//   Question 3

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2)
{
  if(operation == '+')
    return value1 + value2;
  else if(operation == '-')
    return value1-value2;
  else if(operation == '*')
    return value1*value2;
  else
    return value1/value2;
}

// Question 4

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    if(d >= 7)
      return (d*40-50);
    else if(d >= 3)
      return (d*40-20);
    else{
      return d*40;
    }
  }


  // ________________________________________________________________________________________________________________


  // -------------------------------------TASK 2.2------------------------------

  // Question 2

  // You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

  function getMiddle(s)
  {
    let len = s.length;
    if(len%2!= 0)
      return (s.charAt(len/2));
    else{
      return (s.charAt((len-1)/2)+s.charAt((len)/2));
    }
  }


  // ________________________________________________________________________________________________________________________________


  // ----------------------------Task 2.3-------------------------------------------


  // Question 1

//   Create the function prefill that urns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.ret



function prefill(n, v) {
  if(n === 0 || n === '0') return [];
  
  if(n < 0 ||!parseInt(n)){
    let typeError = new TypeError();
    typeError.name = "TypeError";
    typeError.message = n + " is invalid";
    throw typeError;
  }
  return new Array(n).fill(v);
}


// Question 2


// Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

// return a function that returns n


function always (n) {
  return function ruby() {
    return n;
  }
    return ruby;
  }


  // Question 3

  // We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:
  

  function createFunctions(n) {
    var callbacks = [];
  
    for (var i=0; i<n; i++) {
      function closure(i){
      callbacks.push(function() {
        return i;
      });
    }
    closure(i);
    }
    return callbacks;
  }


  // Question 4

  
  function createSecretHolder(secret) {
  
    let _secret = secret;
    
    return {
      getSecret(){
        return _secret;
      },
      setSecret(secret){
        _secret = secret;
      }
    }
  
  }


