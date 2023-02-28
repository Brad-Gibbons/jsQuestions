// Add Digits

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

var addDigits = function(num) {
    // Split numbers
    stringNum = num.toString()
    let newCalc = 0;
    // Loop through the single digit numbers
    for(let i = 0; i < stringNum.length; i++) {
        // Adds each single digit together, turns strings to number also
        newCalc += Number(stringNum[i]);
        console.log('This is the new calc ' + newCalc);
    }
    // Evaluate if the new calculation, back to a string is equal to a single digit
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