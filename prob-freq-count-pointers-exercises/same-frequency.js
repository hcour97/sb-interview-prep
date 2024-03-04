//Write a function called sameFrequency. 
// Given two positive integers, find out if the two numbers have the same frequency of digits.

function frequencyCounter(num) {
    // turn the number into a string
    // count the number of times each digit appears
    let str = num.toString()

    let frequencies = new Map();
    for (let val of str) {
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);
    }
    return frequencies;
}

function sameFrequency(num1, num2) {
    if (num1.length !== num2.length) {
        return false;
    }

    map1Freq = frequencyCounter(num1);
    map2Freq = frequencyCounter(num2);

    for (let [key, value] of map1Freq.entries()) {
        // if it doesn't have the key or if the values are not equal to each other
        if (!map2Freq.has(key) || map2Freq.get(key) != map1Freq.get(key)) {
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(182,281), "should be true");
console.log(sameFrequency(34,14), "should be false");
console.log(sameFrequency(3589578, 5879385), "should be true");
console.log(sameFrequency(22,222), "should be false");
