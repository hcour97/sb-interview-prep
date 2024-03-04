// add whatever parameters you deem necessary
// assume only lowercase, no spaces, no special characters

// return true if message can be written with letters given
// return false if message cannot be written with letters given
// frequency count each and compare... but if there are extra letters in the letters category that may be unnessary to the right category...
// so would just have to make sure all the letters in message are in the letters.
// don't even need the frequency, just need to know if the value is in there. so maybe just compare the list of key values.


// O(M + N) 
// where M is the length of the message and N is the length of letters.

function frequencyCounter(str) {
    let frequencies = new Map();

    for (let val of str) {
        let valCount = frequencies.get((val)) || 0;
        frequencies.set(val, valCount + 1);
    }
    return frequencies;
}

function constructNote(message, letters) {
    let messageFreq = frequencyCounter(message);
    let lettersFreq = frequencyCounter(letters);

    for (let [key, value] of messageFreq.entries()) {
       if (!lettersFreq.has(key) || lettersFreq.get(key) < value) {
        return false;
       } 
    }
    return true;
 }


// console.log(constructNote("abcdeeeeef", 'abcdefg'));
console.log(constructNote("abcd", ""), "expect false");
console.log(constructNote("", "abc"), "expect true");
console.log(constructNote("aa", "abcd"), "expect false");
console.log(constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd"), "expect true");
console.log(constructNote("abc", "abcd"), "expect true");

