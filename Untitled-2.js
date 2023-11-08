

Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

 

Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
Example 2:

Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.
Example 3:

Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
 


function isEmpty(obj) {
    if (Array.isArray(obj)) {
      return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj).length === 0;
    }
    return false; // Not an array or object
  }
  
  // Example usage:
  const obj1 = {"x": 5, "y": 42};
  const obj2 = {};
  const arr1 = [null, false, 0];
  
  console.log(isEmpty(obj1)); // Output: false
  console.log(isEmpty(obj2)); // Output: true
  console.log(isEmpty(arr1)); // Output: false
  