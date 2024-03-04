// add whatever parameters you deem necessary
// Write a function called twoArrayObject which accepts two arrays of varying lengths.
// The first array consists of keys and the second one consists of values. 
// Your function should return an object created from the keys and values. 
// If there are not enough values, the rest of keys should have a value of null. 
// If there not enough keys, just ignore the rest of values.

// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

function twoArrayObject(keysArray, valuesArray) {
    const results = {};
    const minLength = Math.min(keysArray.length, valuesArray.length);

    for (i = 0; i < minLength; i++) {
        results[keysArray[i]] = valuesArray[i];
    }

    // if the keysArray.length is longer, set all values to 0;
    for (let i = minLength; i < keysArray.length; i++) {
        results[keysArray[i]] = null;
    }
    
    return results;
}

console.log(twoArrayObject(["a", "b", "c"], [1, 2, 3]), "should be: {'a': 1, 'b': 2, 'c': 3}");
console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]), "should be: {'a': 1, 'b': 2, 'c': 3, 'd': null}");
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2]), "should be: {'x': 1, 'y': 2, 'z': null}");
console.log(twoArrayObject(['x', 'y'], [1, 2, 3, 4]), "should be: {'x': 1, 'y': 2}");
