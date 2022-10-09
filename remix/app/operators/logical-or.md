---
meta:
  title: Logical OR
  description: The logical OR operator evaluates all values from left to right and returns the first truthy value.
icon:
---

The logical OR operator evaluates all values from left to right and
returns the first truthy value.

It's used to check if either value is true. It's like saying if
condition1 is true and condition2 is true then do _this_.

```javascript
if (condition1 || condition2) ) {
  // executes this block of code if either condition1 or condition2 is true
}

console.log(0 || 3) // 3

// you can combine the logical-or operator with the logical-and operator

console.log(0 || 3 && 6) // 6
console.log(0 || false && 4) // false
```
