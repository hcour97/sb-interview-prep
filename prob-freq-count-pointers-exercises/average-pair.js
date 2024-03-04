// add whatever parameters you deem necessary
//Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

// O(N)

// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false

function averagePair(array, average) {
    // start at the leftmost point - index = 0
    // find the average with value to the right of it.
    // compare that value with the average given. if it is the same return true. 
    // If it is different, move on to the next value.
    // when you reach the end of the array, start at index = 1 

    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (((array[i] + array[j])/2) === average) {
                return true;
            }
        }
    }
    return false;
}

// console.log(averagePair([1, 2, 3], 2.5), "should be true");
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), "should be true");
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1), "should be false");
// console.log(averagePair([], 4), "should be false");

function averagePairMultiplePointers(array, average) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let avg = (array[left] + array[right]) / 2;

        if (avg === average) {
            return true;
        } else if (avg < average){
            left++;
        } else {
            right--;
        }
    }
    return false;
}

console.log(averagePairMultiplePointers([1, 2, 3], 2.5), "should be true");
console.log(averagePairMultiplePointers([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), "should be true");
console.log(averagePairMultiplePointers([-1, 0, 3, 4, 5, 6], 4.1), "should be false");
console.log(averagePairMultiplePointers([], 4), "should be false");