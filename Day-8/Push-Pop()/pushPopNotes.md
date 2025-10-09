## How to use push() & pop() Methods in JavaScript Arrays?
Last Updated : 23 Jul, 2025
Arrays are dynamic data structures in JavaScript that have the ability to hold several values of various types. The push() and pop() methods are used for adding and removing elements from an array's last index.

1. ## Using push() Method in JavaScript
The push() method is used to add or push the new value to the given array. it added a new value to the end of array, using this we increases the length of the array. The pushed element will always have the last index number.

## Syntax

arr.push(YOUR_VALUE);

let arr = [1, 2];
arr.push("3");
​
console.log(arr);

Output
[ 1, 2, '3' ]
2. ## Using pop() Method in JavaScript
This pop() method is used to remove the last element from the given array. It will always remove the last element of the given array and decrease the length of the array.

## Syntax

 arr.pop();

let arr = [1, 2, 3];
let lastNum = arr.pop();
​
console.log(arr);
console.log(lastNum);

Output
[ 1, 2 ]
3
## Conditional Usage of pop() and push() Methods

This approach entails using pop() and push() inside of conditional statements or loops. This makes it possible to manipulate the array dynamically, adding and removing elements in response to specific criteria. This is helpful in situations where user input, API responses, or other runtime circumstances determine the content of the array.


let num = [1, 2, 3, 4, 5];
​
if (num.length > 4) {
  num.pop();
}
​
console.log(num);
​
let condition = true;
​
if (condition) {
  num.push(6);
}
​
console.log(num);

Output
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4, 6 ]
