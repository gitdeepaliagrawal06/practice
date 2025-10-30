 ## JavaScript Array splice() Method
Last Updated : 11 Jul, 2025
The splice() method in JavaScript is a powerful and flexible tool for modifying arrays. It allows us to add, remove, or replace elements within an array. It’s often used to update or manage array contents in various ways.

## Syntax 

array.splice(startIndex, deleteCount, item1, item2, ..., itemN);

startIndex: The position where changes will begin. If it exceeds the array length, it starts at the end. If negative, it counts from the end.
deleteCount: The number of elements to remove from startIndex. If omitted, all elements from startIndex to the end are removed. If set to 0, no elements are removed.
item1, item2, ..., itemN: Elements to add starting at startIndex. If none are provided, splice() only removes elements.
Return Value: While it mutates the original array in place, still it returns the list of removed items. In case there is no removed array it returns an empty array.

The splice() method can perform different tasks depending on the parameters provided.

1. ## Removing Elements from an Array
The splice() method can be used to remove elements from an array. This is done by providing the startIndex and the deleteCount (the number of elements to remove).


let a = ["Apple", "Banana", "Cherry", "Date"];
a.splice(1, 2);
​
console.log(a);

Output
[ 'Apple', 'Date' ]
In this example

startIndex is 1, so removal starts from "Banana".
deleteCount is 2, meaning 2 elements (Banana and Cherry) will be removed.
The array after the operation contains only ["Apple", "Date"].
2. ## Adding Elements to an Array
we can also use splice() to add elements to an array without removing any. To do this, set deleteCount to 0 and provide the elements to add.

let fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.splice(2, 0, "Mango", "Peach");
​
console.log(fruits);

Output
[ 'Apple', 'Banana', 'Mango', 'Peach', 'Cherry', 'Date' ]
In this example

startIndex is 2, so the new elements will be inserted starting at the third position.
deleteCount is 0, so no elements are removed.
"Mango" and "Peach" are added at index 2.
3. ## Replacing Elements in an Array
We can also use splice() to replace elements. Provide the startIndex, deleteCount, and the elements to replace the removed items.


let fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.splice(1, 2, "Orange", "Grape");
​
console.log(fruits);

Output
[ 'Apple', 'Orange', 'Grape', 'Date' ]
In this example

startIndex is 1, so removal starts from "Banana".
deleteCount is 2, so "Banana" and "Cherry" are removed.
"Orange" and "Grape" are added in place of the removed items.
4. ## Adding or Removing Elements from the End of the Array
Since splice() works with any position in the array, you can use it to add or remove elements from the end of the array by using a startIndex equal to the array length.


let fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.splice(fruits.length - 1, 1);  // Removes the last element
​
console.log(fruits);

Output
[ 'Apple', 'Banana', 'Cherry' ]
5. ## Handling Negative Indices
We can also use negative numbers for the startIndex to remove or add elements starting from the end of the array. Negative indices count from the end, where -1 refers to the last element, -2 to the second last, and so on.


let fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.splice(-2, 1, "Mango");
​
console.log(fruits);

Output
[ 'Apple', 'Banana', 'Mango', 'Date' ]
In this example

startIndex is -2, so removal starts from "Cherry", which is the second-to-last element.
deleteCount is 1, so only "Cherry" is removed.
"Mango" is added in place of "Cherry".
We have a complete list of Javascript Array methods, to check those please go through this Javascript Array Complete reference article.

Conclusion
The splice() method in JavaScript is a powerful tool for adding, removing, or replacing elements in an array. It directly modifies the original array and offers flexibility in handling array data by specifying the starting index, number of elements to remove, and new elements to add. Whether manipulating specific elements or working with the array's end, splice() simplifies array management.