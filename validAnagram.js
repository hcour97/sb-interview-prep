// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
// validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false
// validAnagram("awesome", "awesom"); // false
// validAnagram("qwerty", "qeywrt"); // true
// validAnagram("texttwisttime", "timetwisttext"); // true

// ASSUMPTIONS:
// only needs to work for simple inputs
// ignore capitalization, spaces and special characters

// REQUIREMENTS: solve with a frequency counter.

// SHORT SOLUTION:
// O(n log n) -- because of .sort()
function validAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// OPTIMIZED SOLUTION
// using a frequency counter
// O (log n)

function createFrequencyCounter(str) {
    let frequencies = new Map();
    
    for (let val of str) {
        let valCount = frequencies.get(val) || 0; // Either or: is frequencies.get(val) truthy? if falsy, set to 0;
        frequencies.set(val, valCount + 1)
    }
    return frequencies;
}

// console.log("TESTING createFrequencyCounter:");
// console.log(createFrequencyCounter("hello"));
// console.log(createFrequencyCounter("hannahbanana"));


function validAnagramOptimized(str1, str2) {
    // compare length of the strings.
    // if length is diff, return false.
    if (str1.length !== str2.length) {
        return false;
    }

    // run frequency counter on each string. Returns a Map
    const charMap1 = createFrequencyCounter(str1);
    const charMap2 = createFrequencyCounter(str2);

    // check Map size
    if (charMap1.size !== charMap2.size) return false;

    // compare the key value pairs of the two Maps:
    for (let key of charMap1.keys()) {
        // .has returns a boolean
        // .get returns a value

        // compare value of the key in Map2 and the value of the key in Map1
        if(charMap2.get(key) !== charMap1.get(key)) return false;
    }
    return true;
}

console.log("TESTING validAnagram:");
console.log(validAnagram("aaz", "zza"), "should be false");
console.log(validAnagram("anagram", "nagaram"), "should be true");
console.log(validAnagram("racecare", "racecar"), "should be false");

console.log("TESTING validAnagramOptimized:");
console.log(validAnagramOptimized("aaz", "zza"), "should be false");
console.log(validAnagramOptimized("anagram", "nagaram"), "should be true");
console.log(validAnagramOptimized("racecare", "racecar"), "should be false");
