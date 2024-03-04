// Write a function called separatePositive which accepts an array of non-zero integers. 
// Separate the positive integers to the left and the negative integers to the right. 
// The positive numbers and negative numbers need not be in sorted order. 
// The problem should be done in place (in other words, do not build a copy of the input array).

// O(n)

function separatePositive(array) {
    let left = 0;
    let right = array.length - 1;

    // iterate through array, until left pointer is less than right pointer
    while (left < right ) {
        // if element at left pointer is negative and right pointer is positive, swap them
        if (array[left] < 0 && array[right] > 0) {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;

        // if element at left pointer is positive, move left pointer to the right
        } else {
            if (array[left] > 0) {
            left++;
            } 
            if (array[right] < 0) {
                right--;
            }
        }
    }
    return array;
}

console.log(separatePositive([2, -1, -3, 6, -8, 10]), "should be [2, 10, 6, -3, -1, -8]");
console.log(separatePositive([5, 10, -15, 20, 25]), "should be [5, 10, 25, 20, -15]");
console.log(separatePositive([-5, 5]), "should be [5, -5]" );
console.log(separatePositive([1, 2, 3]), "should be [1, 2, 3]");
