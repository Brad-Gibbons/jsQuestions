// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// var canConstruct = function(ransomNote, magazine) {
//     let match = [];
//     // Loop through each string taking one character from ransome note and comparing with all magazine characters
//     for(let i = 0; i < ransomNote.length; i++) {
//         console.log(ransomNote[i])  

//         for(let j = 0; j < magazine.length; j++) {
//             console.log(ransomNote[i], magazine[j])
//             if(ransomNote[i] === magazine[j]) {
//                 match.push(magazine[j])
//             }
//             console.log(match)
//         }
//     } 
// };

function canConstruct(ransomNote, magazine) {
    for(let ch of ransomNote) {
        if(magazine.includes(ch)) {
            magazine = magazine.replace(ch, 0);
        } else {
            return false;
        }
    }
    return true;
}

console.log(canConstruct('back','background'));