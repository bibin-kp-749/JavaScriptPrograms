// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.



const isPalindrome = (number) => {
    let reversed = number.toString().split("").reverse().join("");
    if (number == Number(reversed)) {
        return (true)
    }
    {
        return (false)
    }
}

console.log(isPalindrome(121));