const lengthOfLastWord = function (string) {
    let array = string.trim().split(/\s+/)
    let word = array[array.length - 1]
    return length = word.length
};

console.log(lengthOfLastWord('Hello World'));