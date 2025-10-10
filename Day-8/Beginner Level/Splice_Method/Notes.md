## The splice() method in JavaScript is a powerful array method used to change the contents of an array by removing, replacing, or adding elements in place. This means it modifies the original array directly, rather than creating a new one.
Syntax:
JavaScript

array.splice(startIndex, deleteCount, item1, item2, ..., itemN)
## Parameters:
startIndex (Required): The zero-based index at which to start changing the array.
A negative index counts back from the end of the array.
If startIndex is greater than or equal to the array's length, no elements will be deleted, but new elements (if provided) will be added to the end.
deleteCount (Optional): An integer indicating the number of elements to remove from startIndex.
If omitted, or if its value is greater than or equal to the number of elements from startIndex to the end of the array, all elements from startIndex to the end will be deleted.
To delete all elements after startIndex while also adding new elements, Infinity can be passed as deleteCount.
item1, item2, ..., itemN (Optional): The elements to add to the array, starting at startIndex. If no elements are specified, splice() only removes elements. 
Return Value:
The splice() method returns an array containing the deleted elements. If no elements are removed, it returns an empty array.
Examples:
Removing elements.
JavaScript

    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 2); // Removes 2 elements starting from index 1 ('March', 'April')
    // months is now ['Jan', 'June']
Adding elements.
JavaScript

    const fruits = ['apple', 'banana', 'cherry'];
    fruits.splice(2, 0, 'grape', 'lemon'); // At index 2, remove 0 elements, then add 'grape' and 'lemon'
    // fruits is now ['apple', 'banana', 'grape', 'lemon', 'cherry']
replacing elements.
JavaScript

    const colors = ['red', 'green', 'blue'];
    colors.splice(1, 1, 'yellow'); // At index 1, remove 1 element ('green'), then add 'yellow'
    // colors is now ['red', 'yellow', 'blue']
