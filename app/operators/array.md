---
meta:
  title: Array
  description: The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
---

An `Array` object enables storing a collection of multiple items under a single variable name.

In JavaScript, arrays have the following core characteristics:

### Features of an Array
- An array declaration allocates sequential memory blocks.
- Arrays are static. This means that an array once initialized cannot be resized.
- Each memory block represents an array element.
- Array elements are identified by a unique integer called as the subscript/index of the element.
- Arrays too, like variables, should be declared before they are used.
- Array initialization refers to populating the array elements.
- Array element values can be updated or modified but cannot be deleted. 


#### Declaring and Initializing Arrays

```
let array_name; //declaration
array_name = [val1,val2,valn..] //initialization
```
#### Example: Simple Array
```
let alphas = ["1","2","3","4"]
console.log(alphas[0]); //1
console.log(alphas[1]); //2
```