// Given an array of integers, and a number, 
// find the number of pairs of integers in the array whose sum is equal to the second parameter. 
// You can assume that there will be no duplicate values in the array.

// try to avoid using .sort() to for better time complexity.

function countPairs(array, sum) {
    const numSet = {}; // seen numbers
    let totalPairs = 0;

    for (let num of array) {
        const complementNum = sum - num;
        if (numSet[complementNum]) {
            totalPairs ++;
        }
        numSet[num] = true;
    }
    return totalPairs;
}

console.log(countPairs([3,1,5,4,2], 6), "should be 2") // 2 (1,5 and 2,4)
console.log(countPairs([10,4,8,2,6,0], 10), "should be 3") // 3 (2,8, 4,6, 10,0)
console.log(countPairs([4,6,2,7], 10), "should be 1") // 1 (4,6)
console.log(countPairs([1,2,3,4,5], 10), "should be 0") // 0
console.log(countPairs([1,2,3,4,5], -3), "should be 0") // 0
console.log(countPairs([0,-4],-4), "should be 1") // 1
console.log(countPairs([1,2,3,0,-1,-2],0), "should be 2") // 2