// Add Digits

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

var addDigits = function(num) {
    // Split numbers from number type to a string
    stringNum = num.toString()
    // create variable to hold the new calculation in
    let newCalc = 0;
    // Loop through the single digit numbers (which treats the string as an array i.e 234 has become [2,3,4])
    for(let i = 0; i < stringNum.length; i++) {
        // Adds each single digit together to the same total i.e 2+3+4, turns string back to number type for calculation
        newCalc += Number(stringNum[i]);
        console.log('This is the new calc ' + newCalc);
    }
    // Evaluate if the new calculation, back to a string to see if it is equal to a single digit
    if (newCalc.toString().length === 1) {
        console.log(newCalc);
        return newCalc;
    }
    // If not, said the new calc to go through the same process, repeat until single digit 
    return addDigits(newCalc);
};

addDigits(38);
addDigits(999);
addDigits(11)
addDigits(0);
addDigits(123);