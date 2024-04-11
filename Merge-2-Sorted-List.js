// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 // Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

var mergeTwoLists = function(list1, list2) {
    const newArray=list1.concat(list2);
    newArray.sort((a,b)=>a-b)
    return newArray
};
console.log(mergeTwoLists([1,2,4],[1,3,4]))
