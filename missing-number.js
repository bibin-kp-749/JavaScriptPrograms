// Given an array nums containing n distinct numbers in the range [0, n], return the only 
//number in the range that is missing from the array.

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
// 2 is the missing number in the range since it does not appear in nums.

function missingNumber(nums) {
    let num;
    nums.sort((a, b) => a - b)
    for (let i = 0; i <= nums.length; i++) {
        if (i !== nums[i]) {
            num = i;
            break;
        }
    }
    return num;
}
let answer = missingNumber([45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14])
console.log(answer)