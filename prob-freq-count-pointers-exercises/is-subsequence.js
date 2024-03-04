//Write a function called isSubsequence which takes in two strings 
// and checks whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the 
// first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < str1.length && pointer2 < str2.length) {
        if (str1[pointer1] === str2[pointer2]) {
            pointer1 ++;
        }
        pointer2 ++;
    }
    return pointer1 === str1.length;
}

console.log(isSubsequence('hello', 'hello world'), "should be true"); 
console.log(isSubsequence('sing', 'sting'), "should be true");
console.log(isSubsequence('abc', 'abracadabra'), "should be true");
console.log(isSubsequence('abc', 'acb'), "should be false");
